import React, { useState } from 'react'
import './contact.css'
import axios from 'axios'
import toast from 'react-hot-toast'
import { MapPin, Phone, Mail, Send } from 'lucide-react'

function ContactHome() {
    const [formdata, setformdata] = useState({
        Name: '',
        Email: '',
        PhoneNumber: '',
        Message: ''
    })

    const handlechange = (e) => {
        const { name, value } = e.target;
        setformdata((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const formdatafetch = async (e) => {
        e.preventDefault()
        try {
            await axios.post(`${import.meta.env.VITE_API_BASE || ''}/api/createcontact`, formdata);
            toast.success('Message Sent Successfully!')
            setformdata({ Name: '', Email: '', PhoneNumber: '', Message: '' }) 
        } catch (error) {
            toast.error("Error Occured")
        }
    }

    return (
        /* Unique Parent Wrapper */
        <div className='ds-contact-wrapper'>
            <div className="ds-contact-container">
                <div className="ds-contact-content">
                    
                    {/* Left Info Side */}
                    <div className="ds-contact-info-panel">
                        <div className="ds-info-item">
                            <div className="ds-icon-box">
                                <MapPin size={24} />
                            </div>
                            <div className="ds-info-text">
                                <h4>Address</h4>
                                <p>E-148, Mangolpuri Industrial Area Phase 2 Pocket E</p>
                                <p>New Delhi 110034 (INDIA)</p>
                            </div>
                        </div>

                        <div className="ds-info-item">
                            <div className="ds-icon-box">
                                <Phone size={24} />
                            </div>
                            <div className="ds-info-text">
                                <h4>Phone</h4>
                                <p>8882494615</p>
                                <p>8447168967</p>
                            </div>
                        </div>

                        <div className="ds-info-item">
                            <div className="ds-icon-box">
                                <Mail size={24} />
                            </div>
                            <div className="ds-info-text">
                                <h4>Email</h4>
                                <p>priyanka@digitalstriker.in</p>
                                <p>baijnath@digitalstriker.in</p>
                                <p>info@digitalstriker.in</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Form Side */}
                    <div className="ds-contact-form-panel">
                        <div className="ds-form-header">
                            <h3>Send us a message</h3>
                            <p>It's my pleasure to help you with any queries related to our products.</p>
                        </div>
                        
                        <form onSubmit={formdatafetch} className="ds-form">
                            <div className="ds-input-group">
                                <input type="text" value={formdata.Name} placeholder='Full Name' name='Name' onChange={handlechange} required />
                            </div>
                            <div className="ds-input-group">
                                <input type="email" placeholder='Email Address' value={formdata.Email} name='Email' onChange={handlechange} required />
                            </div>
                            <div className="ds-input-group">
                                <input type="text" placeholder='Phone No.' value={formdata.PhoneNumber} name='PhoneNumber' onChange={handlechange} required />
                            </div>
                            <div className="ds-input-group">
                                <textarea placeholder='Your Message' value={formdata.Message} name='Message' onChange={handlechange} required></textarea>
                            </div>
                            <button className='ds-submit-btn' type='submit'>
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactHome