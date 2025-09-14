import React from "react";
import { Carousel, Image } from "antd";
import { NO_USED_CAR_IMAGE_AVAILABLE_LINK } from "../../../../utils/internalLinks";
import { handleScrollLabelStyle } from "../../../../styleLogic/usedCarsStyleHandler";
import CustomText from "../../../../components/CustomText/CustomText";
import { CUSTOM_TEXT_TYPES } from "../../../../utils/const/components/customTextConst";
import { USED_CARS_DRAWER_CAROUSEL_CONTAINER_CLASS_NAME } from "../../../../utils/const/sections/usedCarsConst";
import { HORIZONTAL_SCROLL_LABEL } from "../../../../utils/const/sections/generalSectionConst";

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
		<div
			className={
				USED_CARS_DRAWER_CAROUSEL_CONTAINER_CLASS_NAME
			}
		>
			{/* Carousel */}
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
					// In case of any image available, show an image
					// indicating the user that no image is available for that car
					<Image src={NO_USED_CAR_IMAGE_AVAILABLE_LINK} />
				)}
			</Carousel>

			{/* Label indicating the user to scroll
			 the pictures to explore them */}
			<CustomText
				type={CUSTOM_TEXT_TYPES.BODY}
				style={handleScrollLabelStyle(false)}
				text={HORIZONTAL_SCROLL_LABEL}
			/>
		</div>
	);
}

export default UsedCarDrawerCarousel;
