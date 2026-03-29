import React from "react";
import { Carousel, Image } from "antd";
import {
	NO_USED_CAR_IMAGE_AVAILABLE_LINK,
	USED_CAR_DRAWER_CAROUSEL_CONTAINER_CLASS_NAME,
} from "./const.js";

/**
 * This component represents the carousel used for
 * showing all the used car images.
 * @param props — Object containing:
 *   - usedCarInfo: — The used car data including images.
 * @returns {Element} — The used car drawer carousel component.
 */
function UsedCarDrawerCarousel(props) {
	return (
		<div
			className={
				USED_CAR_DRAWER_CAROUSEL_CONTAINER_CLASS_NAME
			}
		>
			<Carousel arrows swipeToSlide>
				{/* Show all the images available */}
				{props.usedCarInfo?.images?.length > 0 ? (
					// In case there is at least one available image
					props.usedCarInfo?.images?.map((item) => (
						<Image.PreviewGroup key={item}>
							<Image src={item} />
						</Image.PreviewGroup>
					))
				) : (
					// In case of no images available
					<Image src={NO_USED_CAR_IMAGE_AVAILABLE_LINK} />
				)}
			</Carousel>
		</div>
	);
}

export default UsedCarDrawerCarousel;
