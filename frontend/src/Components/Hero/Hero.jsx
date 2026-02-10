import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Hero.css';

import b11 from './banner-15.jpeg';
import b13 from './banner-14.jpeg';
import b12 from './banner-16.jpeg';
import manufacturingBg from './manufacturing-bg.png';

function Hero() {
  return (
    <section className="hero-section">
      <Carousel fade interval={3000} pause={false} controls indicators>
        
        {/* Slide 1 – Digital Striker Manufacturing (first on load) */}
        <Carousel.Item>
          <div className="hero-slide-wrapper manufacturing-slide">
            <div className="hero-background-image" style={{ backgroundImage: `url(${manufacturingBg})` }}></div>
            <img className="hero-image" src={b13} alt="Digital Striker Manufacturing" />
          </div>
          <div className="hero-overlay"></div>
          <Carousel.Caption className="hero-content">
            <h2>Digital Striker Manufacturing</h2>
            <p>
              Leading manufacturer of OFC Equipment.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <img className="hero-image" src={b11} alt="FTTH Solutions" />
          <div className="hero-overlay"></div>
          <Carousel.Caption className="hero-content">
            <h2>FTTH Solutions</h2>
            <p>
              We listen, understand, then perform the task until your goal is completely achieved.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
          <img className="hero-image" src={b12} alt="Optical Fiber Tools" />
          <div className="hero-overlay"></div>
          <Carousel.Caption className="hero-content">
            <h2>Optical Fiber Tools</h2>
            <p>
              We import specialized machinery to enhance productivity and precision in fiber manufacturing.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </section>
  );
}

export default Hero;
