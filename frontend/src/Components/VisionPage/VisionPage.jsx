import React, { useEffect } from 'react';
import { Eye, Target, Zap, Award, Users, Shield, Heart, Handshake, TrendingUp, Sparkles, CheckCircle2, Rocket, Star } from 'lucide-react';
import './VisionPage.css';

function VisionPage() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const visionData = [
        {
            id: '01',
            title: 'Industry Leadership',
            desc: 'To be recognized as a leading manufacturing and services company, enabling our customers to gain and sustain their competitive edge by leveraging emerging technologies and skills that support new business paradigms.',
            icon: <Rocket size={28} />,
            badge: 'Excellence Driven'
        },
        {
            id: '02',
            title: 'Exceptional Quality',
            desc: 'To be the acknowledge provider of exceptional quality, reliability & risk mitigation services that set industry standards and exceed customer expectations.',
            icon: <Shield size={28} />,
            badge: 'Quality Assured'
        },
        {
            id: '03',
            title: 'Agile Innovation',
            desc: 'To be an organization that is nimble and quick to market with new solutions, creating flexible technology platforms that increase access across our user network.',
            icon: <Zap size={28} />,
            badge: 'Fast & Flexible'
        },
        {
            id: '04',
            title: 'Empowered Workplace',
            desc: 'To be a highly rated place to work, where employees are empowered, encouraged, inspired and rewarded within a meritocracy that values talent and dedication.',
            icon: <Users size={28} />,
            badge: 'People First'
        }
    ];

    const valuesData = [
        {
            title: 'Customer Service',
            desc: 'All our team focuses on delivering the highest level of service to our customers.',
            icon: <Handshake size={30} />
        },
        {
            title: 'Environment Safety',
            desc: 'We develop environmentally friendly technologies. Our solutions protect the environment and promote the well-being of individuals.',
            icon: <Shield size={30} />
        },
        {
            title: 'Integrity',
            desc: 'We are open, honest and trustworthy in dealing with customers, suppliers, and the communities where we have an impact.',
            icon: <CheckCircle2 size={30} />
        },
        {
            title: 'Caring About People',
            desc: 'We show respect for all partners and are committed to creating a healthy working environment.',
            icon: <Users size={30} />
        },
        {
            title: "Caring Customer's Trust",
            desc: 'Our honesty, loyalty, and fairness make us a trustworthy long-term partner for our customers.',
            icon: <Heart size={30} />
        },
        {
            title: 'Caring Excellence',
            desc: 'We relentlessly pursue excellence in everything we do, every day.',
            icon: <Award size={30} />
        }
    ];

    return (
        <section className='vision-page-wrapper'>
            <div className="container">
                
                {/* Hero Section */}
                <div className="vision-hero">
                    <div className="hero-content">
                        <div className="heading-tag">
                            <Eye size={24} /> <span>Our Vision & Values</span>
                        </div>
                        <h1>Shaping the Future Through <span>Excellence</span></h1>
                        <p
  className="hero-desc"
  style={{ color: "#000" }}
>
  Innovation, integrity, and unwavering commitment defining our path forward.
</p>
                    </div>
                    <div className="hero-img-box">
                        <div className="floating-badge">
                            <Sparkles size={20} /> <span>Innovation Driven</span>
                        </div>
                        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80" alt="Vision Banner" />
                    </div>
                </div>

                {/* Vision Section */}
                <div className="section-title-box">
                    <Target size={40} className="title-icon" />
                    <h2>Digital Striker's <span>Vision</span></h2>
                    <p>Our roadmap to industry leadership and innovation</p>
                </div>

                <div className="vision-grid">
                    {visionData.map((item, index) => (
                        <div className="vision-card" key={index}>
                            <div className="card-num">{item.id}</div>
                            <div className="card-icon-box">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                            <div className="card-badge">{item.badge}</div>
                        </div>
                    ))}
                </div>

                {/* Values Divider */}
                <div className="values-banner">
                    <TrendingUp size={48} />
                    <h3>Driving Excellence Together</h3>
                    <p>Our values guide every decision we make</p>
                </div>

                {/* Values Section */}
                <div className="section-title-box">
                    <Star size={40} className="title-icon" />
                    <h2>The Principles <span>Defining Us</span></h2>
                    <p>Digital Striker's core values and culture</p>
                </div>

                <div className="values-grid">
                    {valuesData.map((val, idx) => (
                        <div className="value-item" key={idx}>
                            <div className="value-icon">{val.icon}</div>
                            <div className="value-text">
                                <h4>{val.title}</h4>
                                <p>{val.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="vision-cta">
                    <div className="cta-inner">
                        <h2>Join Us in Shaping the Future</h2>
                        <p>Together, we create innovative solutions that transform industries</p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default VisionPage;