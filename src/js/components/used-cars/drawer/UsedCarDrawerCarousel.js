import React from "react";
import {Carousel, Image} from "antd";

/**
 * Used Car Drawer Carousel
 * @constructor
 */
function UsedCarDrawerCarousel(props) {
    return (

        <div className="carousel-container">
            {/* Carousel */}
            <Carousel
                arrows
                swipeToSlide={true}
                infinite={false}>

                {/* Show all the images */}
                {
                    props.usedCarInfo.images.map((item, index) => (
                        <Image.PreviewGroup
                            key={index}
                            preview={{
                                toolbarRender: () => null,
                                maskClosable: true
                            }}>
                            <Image
                                src={item}
                                preview={true}
                            />
                        </Image.PreviewGroup>
                    ))
                }

            </Carousel>
        </div>

    );
}


export default UsedCarDrawerCarousel;