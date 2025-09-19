export default async function middleware(request) {
	// Get the URL
	const url = new URL(request.url);

	// Check whether the URL matches a used car URL
	const match = url.pathname.match(/^\/used-cars(\d+)$/);

	// Fallback
	if (!match) {
		return;
	}

	// Retrieve the used car id from URL
	const usedCarId = match[1];

	try {
		// Fetch used cars overview and extract json response
		const jsonResponse = await fetch(
			"https://mmeletricarservice.it/api/used-cars-overview/usedCarsOverview"
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

		// Create custom HTML with Open Graph meta tags
		const html = `
			<!DOCTYPE html>
			<html lang="it">
			<head>
				<meta charset="UTF-8" />
				<title>${usedCar.name}</title>
				<meta property="og:title" content="${usedCar.name}" />
				<meta property="og:description" content="Prezzo: €${usedCar.price} - Anno: ${usedCar.year} - Km: ${usedCar.mileage} - Carburante: ${usedCar.fuel} - Stato: ${usedCar.status}" />
				<meta property="og:image" content="${usedCar.image}" />
				<meta property="og:url" content="${url.href}" />
				<meta property="og:type" content="product" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="${usedCar.name}" />
				<meta name="twitter:description" content="Prezzo: €${usedCar.price} - Anno: ${usedCar.year} - Km: ${usedCar.mileage} - Carburante: ${usedCar.fuel} - Stato: ${usedCar.status}" />
				<meta name="twitter:image" content="${usedCar.image}" />
			</head>
			<body>
				<script>
					window.location.replace("${url.pathname}");
				</script>
			</body>
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
