import React from 'react';
import Banner from '../Banner/Banner';
import Testimonial from '../Testimonial/Testimonial';
import Tours from '../Tours/Tours';
import WhyChoseUs from '../WhyChoseUs/WhyChoseUs';

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Tours></Tours>
      <WhyChoseUs></WhyChoseUs>
      <Testimonial></Testimonial>
    </>
  );
};

export default Home;