import React from 'react'
import { Carousel } from 'react-bootstrap';
import imageOne from '../images/dsmain1.jpeg';
import imageTwo from '../images/dsmain2.jpeg';
import imageThree from '../images/dsmain3.jpg';


const imageSilder = () =>{
    return(
        <>
           <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={imageOne}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={imageTwo}
                alt="Third slide"
            />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imageThree}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        </>
    )
}

export default imageSilder;