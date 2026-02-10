import React, { useEffect } from 'react'
import {
  ArrowRight,
  Briefcase,
  Users,
  Target,
  Gift
} from 'lucide-react'
import './WhyJoin.css'

function WhyJoin() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])

  return (
    <section className='whyJoin-section'>
      <div className="container">
        <div className="bg"></div>

        <div className="whyJoin-main-container">
          <div className="heading">
            <span>Why Join Us</span>
          </div>

          <div className="main-container">
            <p className='color-light-white'>
              Working in this company means being a part of an organization that offers constant support, both professionally and personally.
            </p>

            <div className="box-1 same-box">
              <span>
                <Target size={20} /> Why we ?
              </span>
              <p className='color-light-white'>
                Digital Striker is a company with wide operations, a strong vision and a focused business model to sustain its growth.
              </p>
            </div>

            <div className="box-2 same-box">
              <span>
                <Users size={20} /> Work culture ?
              </span>
              <p className='color-light-white'>
                At Digital Striker, the work environment consists of strong coordination and spirited teamwork.
              </p>
              <p className='color-light-white'>
                We build every relationship with trust and integrity.
              </p>
            </div>

            <div className="box-3 same-box">
              <span>
                <Gift size={20} /> What we offer ?
              </span>
              <p className='color-light-white'>
                Digital Striker offers you one of the best environments for career development and progression.
              </p>
              <p className='color-light-white'>
                Career development activities are aligned with organizational objectives.
              </p>
            </div>

            <div className="box-4 same-box">
              <span>
                <Briefcase size={20} /> How to Build a Digital Striker Career?
              </span>

              <h5>If You</h5>

              <div className="list">
                <p className='color-light-white'>
                  <ArrowRight size={18} /> Translate business objectives into technical solutions.
                </p>
                <p className='color-light-white'>
                  <ArrowRight size={18} /> Are committed to delivering excellence to clients.
                </p>
                <p className='color-light-white'>
                  <ArrowRight size={18} /> Have strong communication skills.
                </p>
                <p className='color-light-white'>
                  <ArrowRight size={18} /> Have a strong team spirit.
                </p>
                <p className='color-light-white'>
                  <ArrowRight size={18} /> Have relevant degree or telecom experience.
                </p>
              </div>

              <p className='color-light-white'>
                We are committed to being a highly respected company in the field.
              </p>

              <h3>We have started hiring for various positions across our organization.</h3>

              <p className='color-light-white'>Your new career is just a few steps away.</p>

              <p className='color-light-white'>
                Send your CV at{' '}
                <a href="mailto:Baijnath@digitalstriker.in">
                  Baijnath@digitalstriker.in
                </a>
              </p>

              <p className='color-light-white'>
                You can also contact us via the Contact Us page.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyJoin
