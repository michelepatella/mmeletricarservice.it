/**
 * Middleware defined to catch bot requests to used car
 * pages and return a custom HTML containing overview information
 * about that car, instead of index.html.
 * @param request — The request caught.
 * @returns {Response|void} — Returns a Response containing
 * HTML if the request comes from a bot; otherwise, returns
 * nothing to allow the normal request flow.
 */
export default async function middleware(request) {
	// Get the URL
	const url = new URL(request.url);

	// Check whether the URL matches a used car URL
	const regex = /^\/used-cars(\d+)$/;
	const match = regex.exec(url.pathname);

	// Fallback
	if (!match) {
		return;
	}

	// Retrieve the used car id from URL
	const usedCarId = match[1];

	try {
		// Fetch used cars overview and extract json response
		const jsonResponse = await fetch(
			"https://mmeletricarservice.it/api/used-cars-overview/used-cars-overview"
		);
		const usedCars = await jsonResponse.json();

		// Retrieve used car overview which id is equal to
		// those of the current used car
		const usedCar = usedCars?.used_cars_overview.find(
			(c) => String(c.id) === usedCarId
		);

		// Fallback
		if (!usedCar) {
			return;
		}

		// Check whether the request came from a bot
		const ua = request.headers.get("user-agent") || "";
		const isBot =
			/(facebook|twitter|linkedin|pinterest|whatsapp|telegram|slack|googlebot)/i.test(
				ua
			);

		// Fallback
		if (!isBot) {
			return;
		}

		// Create custom HTML with Open Graph meta tags
		const html = `
			<!DOCTYPE html>
			<html lang="it">
			<head>
				<meta charset="UTF-8" />
				<title>${usedCar.name} — MM Eletricar Service</title>
				<meta property="og:title" content="${usedCar.name} a €${usedCar.price} — MM Eletricar Service" />
				<meta 
  				property="og:description" 
  				content="${usedCar.name} del ${usedCar.year} con ${usedCar.mileage.toLocaleString()} km, carburante ${usedCar.fuel}, in ${usedCar.status.toLowerCase()} stato, disponibile a €${usedCar.price}." 
				/>
				<meta property="og:image" content="${usedCar.image}" />
				<meta property="og:url" content="${url.href}" />
				<meta property="og:type" content="product" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="${usedCar.name} a €${usedCar.price} — MM Eletricar Service" />
				<meta name="twitter:description" content="${usedCar.name} del ${usedCar.year} con ${usedCar.mileage.toLocaleString()} km, carburante ${usedCar.fuel}, in ${usedCar.status.toLowerCase()} stato, disponibile a €${usedCar.price}." />
				<meta name="twitter:image" content="${usedCar.image}" />
			</head>
			<body></body>
			</html>
		`;

		// Return custom HTML as response
		return new Response(html, {
			headers: { "content-type": "text/html" },
		});
	} catch (err) {
		// Capture middleware errors
		console.error("Middleware error:", err);
		// Fallback
		return;
	}
}

export const config = {
	matcher: ["/used-cars:id(\\d+)"], // NOSONAR
};
