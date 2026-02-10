import React from 'react'
import bg from './about1.jpeg'
import { Link } from 'react-router-dom'
import { Award, Factory, Wifi, Cable, ArrowRight } from 'lucide-react'
import './AboutHomePage.css'

function AboutHomePage() {
  return (
    <section className='about-home-section'>
      <div className="container">

        <div className="heading">
          <span>ABOUT US</span>
        </div>

        <div className="about-wrapper">

          <div className="about-image">
            <img src={bg} alt="about" />
            <div className="image-badge">
              <Award size={32} />
              <span>ISO Certified</span>
            </div>
          </div>

          <div className="about-content">

            <div className="content-item">
              <div className="icon-wrapper">
                <Award size={24} />
              </div>
              <p>
                <strong>DIGITAL STRIKER PRIVATE LIMITED</strong> is an MSME-registered organization 
                and an ISO 9001:2015 & ISO 14001:2015 certified company, driven by a team of skilled 
                professionals with over 18 years of experience in the Indian manufacturing and service industries. 
                We are actively engaged with ISP, Broadband, and Telecom companies, delivering dependable products 
                and solutions that meet evolving industry demands.
              </p>
            </div>

            <div className="content-item">
              <div className="icon-wrapper">
                <Factory size={24} />
              </div>
              <p>
                Our strength lies in our well-equipped manufacturing facilities supported by 
                state-of-the-art technology. We manufacture a comprehensive range of optical fiber products -
                <span className="highlight-inline">
                  including Joint Closure Boxes (Square, Rectangular, and Cylindrical), FTTH Boxes, 
                  Optical Sleeves, Fiber Management System /LIU And Clipping Wire.
                </span>. 
                To support client branding needs, we also provide custom logo and product customization options, 
                subject to minimum order quantities. In addition, we operate an in-house Patch Cord Assembly Unit.
              </p>
            </div>

            <div className="content-item">
              <div className="icon-wrapper">
                <Wifi size={24} />
              </div>
              <p>
                Beyond manufacturing, we offer sales and service support for optical fiber splicing 
                and testing equipment such as Splicing Machines, OTDRs, Cleavers, Power Meters with VFL, 
                and related accessories.
              </p>
            </div>

            <div className="highlight-box">
              <Cable size={28} className="highlight-icon" />
              <strong>
                We are also a reliable supplier of Optical Fiber Cables, including 2F FTTH, 2F, 4F, 6F, 12F, 
                24F, 48F, and 96F, available in FRP and Armoured variants, offered at competitive industry rates.
              </strong>
            </div>

            <Link className='about-btn' to={'/about'}>
              Read More
              <ArrowRight size={20} />
            </Link>

          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutHomePage