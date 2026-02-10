import React, { useEffect } from 'react';
import './CompanyOverView.css';
import { 
  Settings, 
  ShieldCheck, 
  Users, 
  Cpu, 
  Truck, 
  Factory, 
  Award,
  CheckCircle2,
  Workflow
} from 'lucide-react';

// Images Import
import s1 from './s55.jpeg';
import s2 from './s44.jpeg';
import s3 from './s66.jpeg';
import s4 from './s4.jpg';
import bg from './bg.jpg';

const CompanyOverView = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="company-page">

      {/* Hero Banner */}
      <div
        className="about-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(12, 44, 85, 0.85), rgba(12, 44, 85, 0.85)), url(${bg})`
        }}
      >
        <div className="hero-content">
          <div className="badge">
            <Award size={18} /> ISO 9001:2015 & 14001:2015 Certified
          </div>
          <h1>
            DIGITAL STRIKER <br /> <span>PRIVATE LIMITED</span>
          </h1>
          <p>Delivering Dependable Products & Solutions Since 2006</p>
        </div>
      </div>

      <div className="main-wrapper">

        {/* Section 1: Who We Are */}
        <div className="intro-grid">
          <div className="text-content">
            <div className="section-tag">Who We Are</div>
            <h2>Pioneering the <span>Indian Optical Fiber Industry</span></h2>

            <p>
              <strong>DIGITAL STRIKER PRIVATE LIMITED</strong> is an MSME-registered organization
              and an ISO 9001:2015 & ISO 14001:2015 certified company, driven by a team of skilled
              professionals with over 18 years of experience in the Indian manufacturing and
              service industries.
            </p>

            <p>
              We are actively engaged with ISP, Broadband, and Telecom companies, delivering
              dependable products and solutions that meet evolving industry demands.
            </p>

            <div className="icon-features">
              <div className="f-item">
                <ShieldCheck size={20} /> <span>Quality Commitment</span>
              </div>
              <div className="f-item">
                <Users size={20} /> <span>Skilled Professionals</span>
              </div>
              <div className="f-item">
                <Factory size={20} /> <span>MSME Registered</span>
              </div>
            </div>
          </div>

          <div className="image-frame">
            <img src={s1} alt="Facility" className="featured-img" />
            <div className="experience-card">
              <h3>18+</h3>
              <p>Years of Expertise</p>
            </div>
          </div>
        </div>

        {/* Section 2: Manufacturing Strength */}
        <div className="highlight-box">
          <div className="highlight-header">
            <Settings size={45} />
            <h3>Our Manufacturing Strength</h3>
          </div>

          <div className="highlight-content">
            <p>
              Our strength lies in our well-equipped manufacturing facilities supported by
              state-of-the-art technology. We manufacture a comprehensive range of optical
              fiber products including:
            </p>

            <ul className="product-list">
              <li><CheckCircle2 size={16} /> Fiber Management System /LIU And Clipping Wire.</li>
              <li><CheckCircle2 size={16} /> FTTH Boxes & Optical Sleeves</li>
              <li><CheckCircle2 size={16} /> Joint Closure Boxes (Square, Rectangular & Cylindrical)</li>
            </ul>

            <p className="extra-info">
              To support client branding needs, we provide custom logo and product customization
              options, subject to minimum order quantities. Additionally, we operate an
              <strong> in-house Patch Cord Assembly Unit</strong>, enabling customized patch cords
              as per specific technical requirements.
            </p>
          </div>
        </div>

        {/* Section 3: Image Gallery */}
        <div className="image-mosaic">
          <div className="mosaic-item big">
            <img src={s2} alt="Manufacturing" />
            <div className="img-overlay">State-of-the-art Manufacturing</div>
          </div>

          <div className="mosaic-column">
            <div className="mosaic-item small">
              <img src={s3} alt="Tools" />
              <div className="img-overlay">Precision Tools</div>
            </div>
            <div className="mosaic-item small">
              <img src={s4} alt="Testing" />
              <div className="img-overlay">Technical Excellence</div>
            </div>
          </div>
        </div>

        {/* Section 4: Sales, Service & Cables */}
        <div className="services-info-grid">
          <div className="service-info-card">
            <div className="card-head">
              <Workflow size={30} />
              <h4>Sales & Service Support</h4>
            </div>
            <p>
              Beyond manufacturing, we offer sales and service support for optical fiber splicing
              and testing equipment such as Splicing Machines, OTDRs, Cleavers, Power Meters with
              VFL, and related accessories — all backed by warranty and an experienced service team.
            </p>
          </div>

          <div className="cable-banner-new">
            <div className="cable-icon-box">
              <Cpu size={40} />
            </div>
            <div className="cable-text">
              <h4>Optical Fiber Cable Solutions</h4>
              <p>
                We are a reliable supplier of Optical Fiber Cables including
                <strong> 2F FTTH, 2F, 4F, 6F, 12F, 24F, 48F & 96F</strong>,
                available in FRP and Armoured variants at competitive industry rates.
              </p>
            </div>
            <Truck size={100} className="truck-icon-bg" />
          </div>
        </div>

        {/* Section 5: Vision */}
        <div className="vision-section">
          <p>
            At <strong>DIGITAL STRIKER PRIVATE LIMITED</strong>, we are committed to quality,
            innovation, and long-term partnerships, and look forward to growing together with
            our clients as a trusted supply partner.
          </p>
        </div>

      </div>
    </section>
  );
};

export default CompanyOverView;
