import React, { useEffect } from 'react'
import { Target, Users, TrendingUp, Award, Lightbulb, Globe, Heart, Handshake, CheckCircle2 } from 'lucide-react'
import './MissionPage.css'

const missionImages = {
  hero: '/mission/mission-hero.png',
  corePrinciples: '/mission/core-principles.png',
  professionalWork: '/mission/professional-work.png',
  teamCollaboration: '/mission/team-collaboration.png',
  innovationGrowth: '/mission/innovation-growth.png',
}

function MissionPage() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    
    return (
        <section className='missionpage-section'>
            <div className="container">
                
                {/* Hero Section */}
                <div className="mission-hero">
                    <div className="hero-content">
                        <div className="heading">
                            <Target className="heading-icon" size={48} />
                            <h1>Our Mission</h1>
                        </div>
                        <p
  className="hero-subtitle"
  style={{ color: "#000" }}
>
  Driving excellence through integrity, innovation, and commitment to our clients
</p>

                    </div>
                    <div className="hero-image">
                        <img src={missionImages.hero} alt="Our Mission" />
                        <div className="hero-badge">
                            <Award size={28} />
                            <span>Excellence Driven</span>
                        </div>
                    </div>
                </div>

                {/* Main Mission Content */}
                <div className="mission-main-container">
                    
                    {/* Introduction Cards */}
                    <div className="mission-intro-grid">
                        <div className="intro-card">
                            <div className="card-icon">
                                <Users size={32} />
                            </div>
                            <h3>Expert Team</h3>
                            <p>
                                Our strength is in providing expert, professional and dedicated people who perform 
                                in any environment with integrity and distinction. As a mission-driven company, we 
                                strive to find team members who align themselves with the company mission.
                            </p>
                        </div>

                        <div className="intro-card">
                            <div className="card-icon">
                                <TrendingUp size={32} />
                            </div>
                            <h3>Our Vision</h3>
                            <p>
                            To Be Recognised First And Biggest Manufacturer of Optical Fiber Tool and Related Products In India. Who have their own R&D team to fix all such problems and take india to a new high in Optical Fiber Industry.
                            </p>
                        </div>

                        <div className="intro-card featured">
                            <div className="card-icon">
                                <Globe size={32} />
                            </div>
                            <h3>Leadership Goals</h3>
                            <p>
                                Through this way, the aim is to become one of the most perfect & capable manufacturing 
                                company and a leading provider of comprehensive telecommunication solutions, engineering 
                                & support services.
                            </p>
                        </div>
                    </div>

                    {/* Core Values Section */}
                    <div className="core-values-section">
                        <div className="values-image">
                            <img src={missionImages.corePrinciples} alt="Our Core Principles" />
                            <div className="values-overlay">
                                <Heart size={40} />
                                <span>Integrity First</span>
                            </div>
                        </div>
                        <div className="values-content">
                            <h2>Our Core Principles</h2>
                            <p className="values-description">
                                To accomplish this, we must maintain the highest level of integrity, 
                                honesty and communication with our clients.
                            </p>
                        </div>
                    </div>

                    {/* Visual Divider with Images */}
                    <div className="mission-gallery">
                        <div className="gallery-item">
                            <img src={missionImages.professionalWork} alt="Professional Work" />
                            <div className="gallery-overlay">
                                <h4>Professional Excellence</h4>
                            </div>
                        </div>
                        <div className="gallery-item">
                            <img src={missionImages.teamCollaboration} alt="Team Collaboration" />
                            <div className="gallery-overlay">
                                <h4>Team Collaboration</h4>
                            </div>
                        </div>
                        <div className="gallery-item">
                            <img src={missionImages.innovationGrowth} alt="Innovation" />
                            <div className="gallery-overlay">
                                <h4>Innovation & Growth</h4>
                            </div>
                        </div>
                    </div>

                    {/* Commitments Section */}
                    <div className="commitments-section">
                        <div className="commitment-header">
                            <Handshake size={40} />
                            <h2>We Are Committed</h2>
                            <p>Our promises to deliver excellence in every aspect</p>
                        </div>

                        <div className="commitments-grid">
                            <div className="commitment-item">
                                <div className="commitment-icon">
                                    <CheckCircle2 size={24} />
                                </div>
                                <div className="commitment-content">
                                    <h4>Customer Excellence</h4>
                                    <p>
                                        To serve our customers with quick response, time delivery, long-term 
                                        productive relationship, ethics & transparency.
                                    </p>
                                </div>
                            </div>

                            <div className="commitment-item">
                                <div className="commitment-icon">
                                    <CheckCircle2 size={24} />
                                </div>
                                <div className="commitment-content">
                                    <h4>Customized Solutions</h4>
                                    <p>
                                        To become customer-driven company by providing customized solutions 
                                        and services to meet customer requirements.
                                    </p>
                                </div>
                            </div>

                            <div className="commitment-item">
                                <div className="commitment-icon">
                                    <CheckCircle2 size={24} />
                                </div>
                                <div className="commitment-content">
                                    <h4>Complete Value Chain</h4>
                                    <p>
                                        To deliver solutions covering the entire value chain of telecom 
                                        infrastructure industry.
                                    </p>
                                </div>
                            </div>

                            <div className="commitment-item">
                                <div className="commitment-icon">
                                    <CheckCircle2 size={24} />
                                </div>
                                <div className="commitment-content">
                                    <h4>Industry Growth</h4>
                                    <p>
                                        To add the growth of industry by providing world-class services 
                                        with state of the technology.
                                    </p>
                                </div>
                            </div>

                            <div className="commitment-item">
                                <div className="commitment-icon">
                                    <CheckCircle2 size={24} />
                                </div>
                                <div className="commitment-content">
                                    <h4>Talent Development</h4>
                                    <p>
                                        To hire, develop, retain best talent to offer utmost satisfaction 
                                        to our valued customers.
                                    </p>
                                </div>
                            </div>

                            <div className="commitment-item">
                                <div className="commitment-icon">
                                    <CheckCircle2 size={24} />
                                </div>
                                <div className="commitment-content">
                                    <h4>Cost-Effective Solutions</h4>
                                    <p>
                                        To use in-depth knowledge to streamline process & deliver cost-effective, 
                                        valued and real world solution.
                                    </p>
                                </div>
                            </div>

                            <div className="commitment-item">
                                <div className="commitment-icon">
                                    <CheckCircle2 size={24} />
                                </div>
                                <div className="commitment-content">
                                    <h4>Professional Team</h4>
                                    <p>
                                        To maintain strong team of qualified & skilled professionals.
                                    </p>
                                </div>
                            </div>

                            <div className="commitment-item">
                                <div className="commitment-icon">
                                    <CheckCircle2 size={24} />
                                </div>
                                <div className="commitment-content">
                                    <h4>Customer Relationships</h4>
                                    <p>
                                        To maintain strengthen professional relationship with customers.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Success Stats Section */}
                    <div className="success-stats">
                        <div className="stats-image">
                            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Success Metrics" />
                        </div>
                        <div className="stats-content">
                            <h3>Driving Results Through Commitment</h3>
                            <p>
                                Our mission-driven approach has enabled us to build lasting relationships and deliver 
                                exceptional value across the telecommunications industry.
                            </p>
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="mission-cta">
                        <Lightbulb size={48} />
                        <h3>Ready to Experience Excellence?</h3>
                        <p>Join us in building the future of telecommunications</p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default MissionPage