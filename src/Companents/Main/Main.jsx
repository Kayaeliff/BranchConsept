import React, { useState } from 'react';
import '../Main/Main.css';
import ManagedOfficeImage from '../../assets/Rectangle_41.png';
import Locasyon from "../../assets/locasyon.png";
import Amazing from "../../assets/amazing.png";
import video2 from "../../assets/video2.mp4";

export default function Main() {
  const [selectedBox, setSelectedBox] = useState(null);

  const handleBoxClick = (boxIndex) => {
    setSelectedBox(boxIndex);
  };

  const boxes = [
    {
      title: 'Managed Office Space',
      description: 'MyBranch is an office space solution provider in India, founded in 2016 by Mr. Narayan Bhargava. It is one of the major players in delivering highly sophisticated co-working spaces that suit enterprises of all types.',
      image: ManagedOfficeImage
    },
    {
      title: 'Shared Office Space',
      description: 'MyBranch is an office space solution provider in India, founded in 2016 by Mr. Narayan Bhargava. It is one of the major players in delivering highly sophisticated co-working spaces that suit enterprises of all types.',
      image: ManagedOfficeImage
    },
    {
      title: 'Lite Office Space',
      description: 'MyBranch is an office space solution provider in India, founded in 2016 by Mr. Narayan Bhargava. It is one of the major players in delivering highly sophisticated co-working spaces that suit enterprises of all types.',
      image: ManagedOfficeImage
    },
    {
      title: 'Virtual Office Space',
      description: 'MyBranch is an office space solution provider in India, founded in 2016 by Mr. Narayan Bhargava. It is one of the major players in delivering highly sophisticated co-working spaces that suit enterprises of all types.',
      image: ManagedOfficeImage
    },
    {
      title: 'Partnership Model',
      description: 'MyBranch is an office space solution provider in India, founded in 2016 by Mr. Narayan Bhargava. It is one of the major players in delivering highly sophisticated co-working spaces that suit enterprises of all types.',
      image: ManagedOfficeImage
    },
    {
      title: 'Meeting Room',
      description: 'MyBranch is an office space solution provider in India, founded in 2016 by Mr. Narayan Bhargava. It is one of the major players in delivering highly sophisticated co-working spaces that suit enterprises of all types.',
      image: ManagedOfficeImage
    }
  ];

  return (
    <div className="main-container">
      <div className="group">
        <span className="text">WORKSPACES THAT FIT</span>
        <span className="text-2">YOUR BUSINESS NEEDS</span>
      </div>
      <div className="wrapper">
        <div className="box-list">
          {boxes.map((box, index) => (
            <div
              key={index}
              className={`box ${selectedBox === index ? 'selected' : ''}`}
              onClick={() => handleBoxClick(index)}
            >
              <div className="box-title">{box.title}</div>
            </div>
          ))}
        </div>
        <div className="content-area">
          {selectedBox !== null && (
            <div className="content">
              <div className="content-title">{boxes[selectedBox].title}</div>
              <div className="description">{boxes[selectedBox].description}</div>
              {boxes[selectedBox].image && (
                <div
                  className="image"
                  style={{ backgroundImage: `url(${boxes[selectedBox].image})` }}
                />
              )}
              <div
                className="main-button"
                onClick={() => alert("Explore More button clicked!")}
              >
                <span className="text-4">Explore More</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="sayı-conten">
        <div className="say1">
          <span className="paragraf">200+</span>
          <span className="paragraf-2">Clients</span>
        </div>
        <div className="say2">
          <span className="paragraf-3">25+</span>
          <span className="paragraf-4">States</span>
        </div>
        <div className="say3">
          <span className="paragraf-5">70+</span>
          <span className="paragraf-6">Cities</span>
        </div>
        <div className="say4">
          <span className="paragraf-7">80+</span>
          <span className="paragraf-8">Locations</span>
        </div>
      </div>

      <div className="office-container">
        <div className="main-image" />
        <div className="additional-image" />
        <div className="title-wrapper">
          <span className="main-title">
            ONE OF INDIA’S LEADING <br />
          </span>
          <span className="subtitle">
            CO-WORKING & SHARED <br />
            OFFICE NETWORK
          </span>
        </div>
        <span className="description3">
          MyBranch is an office space solution provider in India, founded in
          2016 by Mr. Narayan Bhargava. It is one of the major players in
          delivering highly sophisticated co-working spaces that suit
          enterprises of all types. MyBranch has developed from a co-working
          office space network to a workspace solutions platform, that provides
          office space to wide business setups - from sole proprietors to
          start-ups, SMEs to large corporates, and MNCs. ...
        </span>
        <div className="button-container">
          <button
            className="cta-button"
            onClick={() => alert('Talk to an expert button clicked!')}
          >
            Talk to an expert
          </button>
        </div>
        <div className="button-icon" />

        <video id="myVideo" width="990" height="520" controls >
          <source src={video2} type="video/mp4" />
          Tarayıcınız bu videoyu desteklemiyor.
        </video>
      </div>
      <img className="locasyon" src={Locasyon} alt="" />
      <img className="amazing" src={Amazing} alt="" />
      <div className='header'>
                <span className='header-text'>Some Words From </span>
                <span className='header-subtext'>Our Clients </span>
            </div>
            <div className='testimonial'>
                <div className='testimonial-item'>
                    <div className='testimonial-image' />
                    <div className='testimonial-details'>
                        <div className='testimonial-text'>
                            <span className='testimonial-title'>Proper guidance </span>
                            <span className='testimonial-description'>
                                MyBranch is an office space solution provider in India, founded
                                in 2016 by Mr. Narayan Bhargava.
                            </span>
                        </div>
                        <div className='testimonial-author'>
                            <span className='author-name'>Steve Smith</span>
                            <span className='author-title'>Manager</span>
                        </div>
                        <div className='author-image' />
                    </div>
                </div>
                <div className='testimonial-item'>
                    <div className='testimonial-image2' />
                    <div className='testimonial-details'>
                        <div className='testimonial-text'>
                            <span className='testimonial-title'>Wonderful Service</span>
                            <span className='testimonial-description'>
                                MyBranch is an office space solution provider in India, founded
                                in 2016 by Mr. Narayan Bhargava.
                            </span>
                        </div>
                        <div className='testimonial-author'>
                            <span className='author-name'>Will Johnson</span>
                            <span className='author-title'>Designer</span>
                        </div>
                        <div className='author-image2' />

                    </div>
                </div>
                </div>
                <div className='header-image' />
            <div className='custom'>
                <span className='custom-text'>Our </span>
                <span className='highlighted-title-text'>Premium Clients</span>
            </div>
            <span className='description-text'>
                We are proudly partnered with several organisations, hailing from
                different industries, who have not only trusted our services, but have
                invested their faith in!
            </span>
            <div className='clients-section'>
                <div className='client-image-1' />
                <div className='client-image-2' />
                <div className='client-logo-1' />
                <div className='client-logo-2' />
                <div className='client-logo-3' />
            </div>
            <div className='additional-clients-wrapper'>
                <div className='client-logo-4' />
                <div className='client-image-3' />
                <div className='client-image-4' />
                <div className='client-image-5' />
            </div>
    </div>
  );
}
