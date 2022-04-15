import React from 'react';
import { Carousel } from 'react-bootstrap';
import Banner1 from '../../../../../images/banner/banner1.jpg'
import Banner2 from '../../../../../images/banner/banner2.jpg'
import Banner3 from '../../../../../images/banner/banner3.jpg'

const Banner = () => {
    return (
        <div>
                    <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Consideration</h3>
                    <p>During this initial phase, your customers complete the majority of their research online and expect to visit only ONE dealership to finalize the purchase process. </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Purchase</h3>
                    <p>This is where the final decision-making, negotiations, and reassurance take place. At this point, customers want to know where they can get the best deal for their car.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Service</h3>
                    <p>The service phase is an often-overlooked opportunity to drive consumers back to your dealer website and back into your shop. </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        </div>

    );
};

export default Banner;