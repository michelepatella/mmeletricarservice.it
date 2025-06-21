import React from "react";
import { Carousel, Image } from "antd";

/**
 * This component represents the carousel used for
 * showing all the used car images within its drawer.
 * If no used car image is available, the carousel is filled with
 * an image indicating the user that there is no image available
 * for that car.
 * @constructor
 */
function UsedCarDrawerCarousel(props) {
	return (
		<div className="carousel-container">
			{/* Carousel */}
			<Carousel
				arrows
				swipeToSlide={true}
				infinite={false}
			>
				{/* Show all the images available */}
				{props.usedCarInfo?.images?.length > 0 ? (

					// In case there is at least one available image
					props.usedCarInfo?.images?.map((
						item,
						index
					) => (
						<Image.PreviewGroup
							key={index}
							preview={{
								maskClosable: true,
							}}
						>
							<Image
								src={item}
								preview={true}
							/>
						</Image.PreviewGroup>
					))

				) : (

					// In case of any image available, show an image
					// indicating the user that no image is available for that car
					<Image
						src="/images/empty-carousel-image.svg"
						dots={false}
						preview={false}
					/>

				)}
			</Carousel>
		</div>
	);
}

export default UsedCarDrawerCarousel;
