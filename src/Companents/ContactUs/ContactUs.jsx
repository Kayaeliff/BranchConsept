import React, { useState } from 'react';
import "../ContactUs/ContactUs.css";
import { FaPhone, FaEnvelope } from 'react-icons/fa'; // react-icons kütüphanesini kullanarak simgeler ekliyoruz
import Footer from '../Footer/Footer';

function ContactUs() {
    const handlePhoneClick = () => {
        window.location.href = 'tel:+918451999506';
    };

    const handleEmailClick = () => {
        window.location.href = 'mailto:info@mybranch.co.in';
    };

   // Form state
   const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    service: '',
    location: ''
});

// Handle input change
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
};
const handleAboutChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
};

// Handle form submit
const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission (e.g., send data to an API)
    alert('Form data submitted:', formData);
};

  return (
    <div className='contact'>
        <div className='contact-container'>
        <span className='need-contact-text'>need to</span>
        <span className='grow-contact-text'> grow your business</span>
        </div>
        <span className='contact-acıklama'>Contact us to get more details about growing your business</span>

    <div className="iletisim-contact">
        <span className='iletişim-text'>Contact Details</span>
                <div className='contact-wrapper'>
                    <div className='contact-wrapper-2'>
                        <div className='contact-wrapper-3'>
                            <div className='contact-kutu' onClick={handlePhoneClick}>
                                <FaPhone className='yukarı-contact' onClick={handlePhoneClick} />
                                <span className='telefon-text-contect'>Mobil Number</span>
                                <span className='tel-mobil'>+91 84519 99506</span>
                            </div>
                            
                        </div>
                    </div>
                    <div className='contact-group'>
                        <div className='contact-kutu-2' onClick={handleEmailClick}>
                            <div className='secenek-contact'>
                                <FaEnvelope className='yukarı-contact-2' />
                                <span className='mail-text-contact'>Email ID</span>
                                <span className='mail-adress-contect'>info@mybranch.co.in</span>
                            </div>
                           
                        </div>
                    </div>
                </div>
    </div>
    <div className='form-container-contact'>
            <form className='submit-contact' onSubmit={handleSubmit}>
                <span className='fill-text-contact'>Fill The Contact Form</span>
                <div className='form-contact-wrapper'>
                    <div className='contact-form-kutu'>
                        <div className='contact-form-kutu-2'>
                            <div className='contact-form-kutu-3'>
                                <label className='name-form-text' htmlFor='name'>Your Name</label>
                                <input
                                    id='name'
                                    name='name'
                                    type='text'
                                    className='contact-form-kutu-4'
                                    placeholder='Enter Your Name'
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='contact-form-group-2'>
                                <label className='mob-contact_text' htmlFor='mobile'>Your Mobile Number</label>
                                <input
                                    id='mobile'
                                    name='mobile'
                                    type='text'
                                    className='contact-form_group-mobile'
                                    placeholder='Enter Your Mobile Number'
                                    value={formData.mobile}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='contact-form_group-mail'>
                                <label className='contaxt-mail-text-form' htmlFor='email'>Your Email ID</label>
                                <input
                                    id='email'
                                    name='email'
                                    type='email'
                                    className='conatact-form_-wrapper-2'
                                    placeholder='Enter Your Email ID'
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className='contact-form-kutu-5'>
                            <div className='contact-form-secenek'>
                                <label className='select-contact-text' htmlFor='service'>Select Service</label>
                                <select
                                    id='service'
                                    name='service'
                                    className='contact-form-kutu-6'
                                    value={formData.service}
                                    onChange={handleChange}
                                >
                                    <option value=''>Choose your service</option>
                                    <option value='service1'>Service 1</option>
                                    <option value='service2'>Service 2</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>
                            <div className='conatact-form_wrapper-3'>
                                <label className='locas-contact-form-text' htmlFor='location'>Your Location</label>
                                <select
                                    id='location'
                                    name='location'
                                    className='contact-wrapper-4'
                                    value={formData.location}
                                    onChange={handleChange}
                                    >
                                    <option value=''>Enter your locatio</option>
                                    <option value='service1'>Service 1</option>
                                    <option value='service2'>Service 2</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>
                            <div className='contact-form-secenek'>
                                <label className='select-contact-text' htmlFor='secim'>Where You Heard About Us ?</label>
                                <select
                                    id='secim'
                                    name='secim'
                                    className='contact-form-kutu-6'
                                    value={formData.secim}
                                    onChange={handleAboutChange}
                                >
                                    <option value=''>Google</option>
                                    <option value='service1'>Service 1</option>
                                    <option value='service2'>Service 2</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>
                            
                        </div>
                    </div>
                    <div className='conatct-form-group-5'>
                        <span type='submit' onClick={handleSubmit} className='submit-contact-form-text'>Submit</span>
                    </div>
                </div>
            </form>
        </div>
        <Footer className='contact-footer'/>
    </div>
    
  )
}

export default ContactUs
