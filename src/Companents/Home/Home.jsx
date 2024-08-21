import React from 'react';
import "../Home/Home.css";
import Hero from '../Hero/Hero';
import Main from '../Main/Main';
import Locations from '../Location/Locations';
import Footer from '../Footer/Footer';

function Home() {
  return (
    <div>
      <Hero className="home-hero">
        <form className='form-container'>
          <p className='title'>Meet India’s number one workspace provider</p>
          <input type='text' id='fname' placeholder='Enter Your Name' />
          <input type="tel" id="phone" placeholder="Enter Your Mobile Number" />
          <input type='e-mail' id='e-mail' placeholder='Enter Your Email ID' />
          <select name="city" id="city" aria-placeholder='city'>
            <option value="city">City</option>
            <option value="istanbul">İstanbul</option>
            <option value="istanbul">Ankara</option>
            <option value="istanbul">İzmir</option>
            <option value="istanbul">Edirne</option>
          </select>
          <button className='button'>Request For Call Back</button>
        </form>
      </Hero>
      <Main />
      <div className="locations-wrapper">
        <Locations showFooter={false} showSearchOption={false}/>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
