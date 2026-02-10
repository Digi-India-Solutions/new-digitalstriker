import React from 'react'
import './ServicesHomePage.css'

import bg from './bg.jpg'
import s1 from './s1.jpg'
import s2 from './s2.jpg'
import s3 from './s3.jpg'

const ServicesHomePage = () => {
  return (
    <section className="services-section">
      
      {/* Hero */}
      <div
        className="services-hero"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="overlay"></div>
        <h1>Our Services</h1>
        <p>Delivering excellence through innovation and expertise</p>
      </div>

      {/* Services Cards */}
      <div className="services-container">

        {/* Card 1 */}
        <div className="service-card">
          <img src={s3} alt="Optical Fiber Works" />
          <div className="card-content">
            <h3>Optical Fiber Works</h3>
            <p>
              We plan, deploy and manage client's optical networks covering
              project management and operational support.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="service-card">
          <img src={s2} alt="Manufacturing" />
          <div className="card-content">
            <h3>Manufacturing</h3>
            <p>
              We are leading manufacturers of OFC Equipment, Ribbon Fiber
              Sleeves, Joint Closures, BJC (Bamboo) and more.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="service-card">
          <img src={s1} alt="Import" />
          <div className="card-content">
            <h3>Import</h3>
            <p>
              We import specialized machinery for fiber work to enhance
              productivity and precision in manufacturing.
            </p>
          </div>
        </div>

      </div>

    </section>
  )
}

export default ServicesHomePage
