import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../Location/Location.css";
import Munbai from "../../assets/numbai.png";
import Nakpur from "../../assets/nakpur.png";
import Nasik from "../../assets/nashik.png";
import Navi from "../../assets/navi.png";
import Panaji from "../../assets/panaji.png";
import Footer from '../Footer/Footer';

const Locations = ({ showFooter = true, showSearchOption = true }) => {
  const [selectedRegion, setSelectedRegion] = useState('All');

  const locations = [
    { name: "Mumbai", region: "West", imgSrc: Munbai },
    { name: "Nagpur", region: "West", imgSrc: Nakpur },
    { name: "Nashik", region: "West", imgSrc: Nasik },
    { name: "Navi Mumbai", region: "West", imgSrc: Navi },
    { name: "Panaji", region: "West", imgSrc: Panaji },
  ];

  const filteredLocations = selectedRegion === "All"
    ? locations
    : locations.filter(location => location.region === selectedRegion);

  return (
    <div style={{ position: 'relative', minHeight: '80vh' }}>
      <div style={{ paddingBottom: showFooter ? '571px' : '0' }}>
        <div className='loca-container'>
          <div className='location'>
            <span className='our-text-2'>Our Network</span>
            <span className='our-text'> Near You</span>
          </div>
          <div className='secenek-group-2'>
            <div className='kt-kutu' onClick={() => setSelectedRegion("All")}>
              <span className='all-text'>All</span>
            </div>
            <div className='kt-kutu-2' onClick={() => setSelectedRegion("West")}>
              <span className='west-text'>West</span>
            </div>
            <div className='secenek-group-3' onClick={() => setSelectedRegion("East")}>
              <span className='esat-text'>East</span>
            </div>
            <div className='south' onClick={() => setSelectedRegion("South")}>
              <span className='text-6'>South</span>
            </div>
            <div className='kt-kutu-3' onClick={() => setSelectedRegion("North")}>
              <span className='text-7'>North</span>
            </div>
            {showSearchOption && (
              <div className='secenek-group-4'>
                <div className='kt-kutu_5' onClick={() => setSelectedRegion("Search")}>
                  <span className='search-text'>Search</span>
                </div>
              </div>
            )}
          </div>
          
          <div className='kt-kutu-4'>
            {filteredLocations.map((location, index) => (
              <NavLink 
                key={index} 
                to={`/location/${location.name}`} 
                className={`pic pic-${index}`} 
                style={{ backgroundImage: `url(${location.imgSrc})` }}
              >
                {/* <span className='location-name'>{location.name}</span> */}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      {showFooter && <Footer className='location-footer-container' />}
    </div>
  );
};

export default Locations;
