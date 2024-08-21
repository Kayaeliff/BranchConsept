// src/AboutUs.jsx
import React from 'react';
import "../AboutUs/AboutUs.css"
import Footer from '../Footer/Footer';

export default function AboutUs() {
    return (
        <div className='About-container'>
            <div className='about-img'/>
            <div className='context'>
            <span className='our-text-about'>OUR GENESIS</span>
                <span className='acıklama-about'>
                The thought on which MyBranch functions specifically tells that it is a
                company established to bring businesses and people together
                </span>
                <div className='üst-ellips-img' />
                <div className='about-group'>
                <div className='beyaz-masa-img' />
                <div className='gri-koltuk-img' />
                <div className='yeşil-koltuk-img' />
                </div>
                <div className='alt-ellips-img' />
            </div>
            <span className='mybranch-fonksiyon'>
            The thought on which MyBranch functions specifically tells that it is a company established to bring businesses and people together, with provided convenience and comfort. MyBranch is a brainchild of visionary business magnate Mr.Nayaran Bhargava, who is often credited as the founder of successful companies including - Calibehr, MyBranch, N.S. Bhargava & Co. & Narayan Bhargava Foundation.
            </span>
            <div className='misyon-vizyon-img'>
                <div className='ok1'/>
                <div className='ok2'/>
                <div className='ok3'/>
            </div>
            <div className='box-misyon'>
            <div className='misyon-img'/>
           <span className="misyon-text">MISSION</span>
           <span className='misyon-text-açılama'>
            To establish footsteps in around 100 cities in India by 2024, thus
            making ourselves a top choice business partner, for businesses to
            provide sustainable growth and expansion.
          </span>
            </div>
            <div className='box-vizyon'>
            <div className="vizyon-img"/>
            <span className="vizyon-text">VISION</span>
          <span className='vizyon-text-acıklama'>
            To bring into action a culture where businesses build their expansion by
            working with each other, through the way of sharing spaces and ideas.
          </span>
            </div>
        <div className='metin'>
             <span className='metin-text'>
            It is this man who in the early 2016s realised the need of businesses to
            contract expenses on ownership of workspace but have one, which is
            reliable and cost-effective. With his experience and knowledge of the
            market, he knew that businesses could work efficiently on their business
            expansion plans when the workspace management is handled independently
            by the space owner. And this thought to raise a helping hand for
            business led to the foundation of MyBranch.
            </span>
            <span className='metin-text-2'>
            MyBranch is thus credited as a Mall of Services, that caters businesses
            right from finding a location to providing documentation to handling
            daily administration and essentialities! MyBranch works as a one-stop
            solution for all requirements of the business in terms of managing and
            maintaining workspace. A major difference that MyBranch delivers, is
            that it provides your business with space for itself so that it does not
            co-exist with its competitors! With workspaces that are expanded in more
            than 70 cities in India, you just need to tell us where you need your
            office!
            </span>
         </div>
         <div className="what-img"/>
         <div className='marka-about'>
         <div className='custom-about'>
                <span className='custom-text-about'>Our </span>
                <span className='highlighted-title-text-about'>Premium Clients</span>
            </div>
            <span className='description-text-about'>
                We are proudly partnered with several organisations, hailing from
                different industries, who have not only trusted our services, but have
                invested their faith in!
            </span>
            <div className='clients-sectio-about'>
                <div className='client-image-1-about' />
                <div className='client-image-2-about' />
                <div className='client-logo-1-about' />
                <div className='client-logo-2-about' />
                <div className='client-logo-3-about' />
            </div>
            <div className='additional-clients-wrapper-about'>
                <div className='client-logo-4-about' />
                <div className='client-image-3-about' />
                <div className='client-image-4-about' />
                <div className='client-image-5-about' />
            </div>
         </div>
        
           <Footer className='about-footer'/>


        </div>
    );
}
