import React, { useState } from 'react';
import "../Location/Mumbai.css"
import Footer from '../Footer/Footer';

const Mumbai = ({ showFooter = true }) => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        service: '',
        location: '',
        about: "",
    });

    const [selectedService, setSelectedService] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedAbout, setSelectedAbout] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleServiceChange = (e) => {
        setSelectedService(e.target.value);
    };
    const handleAboutChange = (e) => {
      setSelectedAbout(e.target.value);
    };

    const handleLocationChange = (e) => {
        setSelectedLocation(e.target.value);
    };

    const handleSubmit = () => {
        alert('Form submitted!');
        // You can add form submission logic here
    };

    return (
      <div style={{ position: 'relative', minHeight: '40vh' }}>
      <div style={{ paddingBottom: showFooter ? '571px' : '0' }}>
        <div className='mumbai-container'>
            <div className='mum-group'>
                <span className='baslık'>Our Network</span>
                <span className='baslık-2'> In Mumbai</span>
            </div>
            <div className='mum-secenek'>
                <div className='secenek'>
                    <span className='ofice-1'>Office 1</span>
                </div>
                <div className='secenek-2'>
                    <span className='ofice-2'>Office 2</span>
                </div>
            </div>
            <div className='mum-secenek-2'>
                <div className='mum-group-2'>
                    <div className='tepe' />
                    <div className='kutu'>
                        <span className='amen-text'>Amenities</span>
                        <div className='mum-group-3'>
                            <div className='secenek-3'>
                                <div className='secenek-4'>
                                    <div className='tepe-2' />
                                    <span className='ful-text'>Fully Furnished Offices</span>
                                </div>
                                <div className='secenek-5'>
                                    <div className='house-img' />
                                    <span className='house-text'>House Keeping Services</span>
                                </div>
                                <div className='secenek-6'>
                                    <div className='tepe-3' />
                                    <span className='train-text'>Training Room</span>
                                </div>
                            </div>
                            <div className='mum-group-4'>
                                <div className='secenek-7'>
                                    <div className='power-img' />
                                    <span className='powe-text'>Power Backup Service</span>
                                </div>
                                <div className='secenek-8'>
                                    <div className='secenek-9'>
                                        <div className='tepe-4' />
                                        <span className='ins-text'>Instant Business Presence</span>
                                    </div>
                                    <div className='mum-group-5'>
                                        <div className='priva-img' />
                                        <span className='priva-text'>Private Cabin</span>
                                    </div>
                                </div>
                            </div>
                            <div className='kutu-2'>
                                <div className='secenek-a'>
                                    <div className='air-img' />
                                    <span className='air-text'>Air Conditioned</span>
                                </div>
                                <div className='mum-group-6'>
                                    <div className='secenek-b'>
                                        <div className='tepe-5' />
                                        <span className='ıt-text'>IT Support Executive</span>
                                    </div>
                                    <div className='mum-group-7'>
                                        <div className='tepe-6' />
                                        <span className='meet-text'>Meeting Room</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className='view-text' onClick={() => alert('View More Amenities')}>
                            View More
                        </button>
                    </div>
                    <div className='mum-group-8'>
                        <span className='near'>Near By</span>
                        <div className='mum-group-9'>
                            <div className='mesafe-content'>
                                <div className='tepe-7' />
                                <span className='km-4-text'>4 km</span>
                            </div>
                            <div className='tepe-8' />
                            <div className='mum-group-a'>
                                <div className='km-img' />
                                <span className='km-1-text'>1 km</span>
                            </div>
                            <div className='km-img-2' />
                            <div className='kutu-3'>
                                <div className='km-img-2-img' />
                                <span className='km-text-2'>2 km</span>
                            </div>
                        </div>
                    </div>
                    <div className='kutu-4'>
                        <div className='secenek-c'>
                            <span className='text-14'>Coworking Space in Mumbai</span>
                            <div className='secenek-d'>
                                <span className='text-15'>MyBranch </span>
                                <span className='text-16'>
                                    offers shared office space in Mumbai region. Companies wishing
                                    to develop themselves while saving the cost on infrastructure
                                    should opt for 
                                </span>
                                <span className='text-17'>coworking </span>
                                <span className='text-18'>
                                    or managed office space. A conference room,
                                </span>
                                <span className='text-19'> meeting room </span>
                                <span className='text-1a'>
                                    and private cabin are provided with complete air conditioning
                                    and a customised interior.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='secenek-e'>
                        <span className='text-1b'> </span>
                        <button className='text-1c' onClick={() => alert('View More')}>
                            View More
                        </button>
                    </div>
                    <div className='kutu-5'>
                        <div className='img-8' />
                        <div className='tepe-9' />
                        <div className='img-9' />
                    </div>
                </div>
                <div className='kutu-6'>
                    <div className='img-a' />
                    <div className='kutu-7'>
                        <div className='secenek-f'>
                            <span className='text-1d'>Baljinder Singh</span>
                            <span className='text-1e'>Centre Head</span>
                        </div>
                        <span className='office-text-detay'>Office Details</span>
                        <div className='office-baslık'>
                            <span className='text-20'>Location</span>
                            <span className='text-21'>Mumbai</span>
                        </div>
                        <div className='secenek-10'>
                            <span className='text-22'>Address</span>
                            <span className='text-23'>
                                Kanakia Zillion, Unit No.114, E wing, 1st Floor, BKC Annex, CST
                                Road Junction, Kurla West, Mumbai-400070.
                            </span>
                        </div>
                    </div>
                    <div className='kutu-8'>
                        <div className='img-b' />
                        <div className='tepe-a' />
                        <div className='img-c' />
                    </div>
                </div>
                <div className='kutu-9'>
                    <div className='kutu-a'>
                        <span className='text-24'>Need help to grow your business?</span>
                        <div className='wrapper-5'>
                            <div className='kutu-b'>
                                <div className='wrapper-6'>
                                    <div className='kutu-c'>
                                        <span className='text-25'>Your Name</span>
                                        <input
                                            type='text'
                                            name='name'
                                            placeholder='Enter Your Name'
                                            value={formData.name}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className='secenek-11'>
                                        <span className='text-27'>Your Mobile Number</span>
                                        <input
                                            type='text'
                                            name='mobile'
                                            placeholder='Enter Your Mobile Number'
                                            value={formData.mobile}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className='secenek-12'>
                                        <span className='text-29'>Your Email ID</span>
                                        <input
                                            type='email'
                                            name='email'
                                            placeholder='Enter Your Email ID'
                                            value={formData.email}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className='wrapper-8'>
                                    <div className='wrapper-9'>
                                        <span className='text-2b'>Select Service</span>
                                        <select value={selectedService} onChange={handleServiceChange}>
                                            <option value=''>Choose your service</option>
                                            <option value='service1'>Service 1</option>
                                            <option value='service2'>Service 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                       
                                    </div>
                                    <div className='mum-group-b'>
                                        <span className='text-2d'>Your Location</span>
                                        <input
                                            type='text'
                                            placeholder='Enter your location'
                                            value={selectedLocation}
                                            onChange={handleLocationChange}
                                        />
                                    </div>
                                    <div className='wrapper-9'>
                                    <span className='text-2b'>Where You Heard About Us ?</span>
                                        <select value={selectedAbout} onChange={handleAboutChange}>
                                            <option value=''>Google</option>
                                            <option value='service1'>Social media</option>
                                            <option value='service2'>Customer review sites</option>
                                            {/* Add more options as needed */}
                                        </select>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <button className='kutu-10' onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>
                </div>
            </div> 
            </div>
            {showFooter && <Footer className='mumbai-footer' />}
        </div>
       </div>
    );
};
export default Mumbai