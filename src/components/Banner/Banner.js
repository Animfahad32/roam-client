import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner1.jpg';
import banner1bg from '../../images/banner1bg.jpg';
import banner2 from '../../images/banner2.jpg';
import banner2bg from '../../images/banner2bg.jpg';
import "./Banner.css";
const Banner = () => {
    return (
        <>
         <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption className="carousel-caption">
      <img src={banner1bg} className="d-block w-100 " alt="" />
      <h2 className="banner-heading">A journey of a 1000 miles starts with a single step.</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
    <img src={banner2bg} className="d-block w-100 " alt="" />
      <h2 className="banner-heading">Find your paradise</h2>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>   
        </>
    );
};

export default Banner;