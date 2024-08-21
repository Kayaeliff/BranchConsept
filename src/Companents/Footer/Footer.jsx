import React from 'react'
import "../Footer/Footer.css";
import { NavLink } from 'react-router-dom';

const Footer = ({className = ""}) => {
  return (
    <footer className={`footer ${className}`}>
    <div className="footer-container">
       <div className="fotoğraf">
        <span className="Kurumsal-Ofis">Corporate Office :</span>
        <span className="text_2">
          ITC Park, 6. Kat, Kule 8, CBD Belapur, Sektör 11, Navi Mumbai,
          Maharashtra, Hindistan - 400614
        </span>
        <span className="Kayıtlı-Ofis">Registered Office :</span>
        <span className="text_4">
          Kanakia Zillion, No.114 Birimi, E kanadı, 1. Kat, BKC Ek, CSTM Yolu
          Kavşağı, Kurla Batı, Mumbai, Maharashtra, Hindistan – 400070
        </span>
      </div>
      <span className="Varoluşumuz">Our Presence</span>
      <span className="markalar">
        Agartala | Agra | Ahmedabad | Aizawl | Ajmer | Akola | Amritsar | Anand |
        Ankleshwar | Balasinor | Bengaluru | Bhagalpur | Bhopal | Bhubaneswar |
        Chandigarh | Chennai | Coimbatore | Deesa | Dehradun | Delhi | Dhanbad |
        Dhule | Dimapur | Gangtok | Gorakhpur | Guntur | Gurgaon | Guwahati |
        Gwalior | Hanumakonda | Haydarabad | Imphal | Indore | Itanagar |
        Jabalpur | Jaipur | Jalandhar | Jamshedpur | Jodhpur | Kanpur |
        Lucknow | Ludhiana | Madurai | Mangaluru | Meerut | Mumbai | Mysore |
        Nagpur | Nandurbar | Nashik | Navi Mumbai | Noida | Panaji | Patna |
        Pondicherry | Prayagraj | Pune | Raipur | Rajahmundry | Ranchi |
        Ratlam | Salem | Shillong | Shimla | Sikar | Siliguril | Tiruchirappalli |
        Tirupati | Udaipur | Varanasi | Vellore | Vishakhapatnam
      </span> 
      <span className="Faydalı-Linkler">Useful Links</span>
      <ul className='class'>
             <li className='footer-link-link'>
              <NavLink to="/Brokerage-Aggregator">Brokerage / Aggregator!</NavLink>
            </li> <br />
            <li className='footer-link-link'>
              <NavLink to="/Landlord">Landlord</NavLink>
            </li> <br />
            <li className='footer-link-link'>
              <NavLink to="/Privacy-Policy">Privacy Policy</NavLink>
            </li> <br />
            <li className='footer-link-link'>
              <NavLink to="/Privacy-Policy-App">Privacy Policy App</NavLink>
            </li> <br />
            <li className='footer-link-link'>
              <NavLink to="/Terms-Condition">Terms And Condition</NavLink>
            </li> <br />
      </ul>
     <ul className='sepet'>
            <li className='footer-link'>
              <NavLink to="/About-Us">About Us</NavLink>
            </li> <br />
            <li className='footer-link'>
              <NavLink to="/Careers ">Careers</NavLink>
            </li> <br />
            <li className='footer-link'>
              <NavLink to="/Contact-Us">Contact Us</NavLink>
            </li> <br />
            <li className='footer-link'>
              <NavLink to="/News-Media">News & Media</NavLink>
            </li> <br />
            <li className='footer-link'>
              <NavLink to="/Awards"> Awards</NavLink>
            </li> <br />
            <li className='footer-link'>
              <NavLink to="/Blog">Blog</NavLink>
            </li> <br />
            
     </ul> 
       <div className="face">
        <div className="facebook">
          <div className="face-img" />
        </div>
      </div>
      <div className="intagram">
        <div className="intagram-img" />
      </div>
      <div className="twitter">
        <div className="twitter-2">
          <div className="twitter-img" />
        </div>
      </div>
      <div className="youtube">
        <div className="youtube-img" />
      </div>
      <div className="linkedin">
        <div className="linkedin-2">
          <div className="linkedin-img" />
        </div>
      </div>
      <span className="dowload">Download MyBranch SpaceOnDemand App</span>
      <div className="google" />
      <div className="uygulama" />
      <div className="apple" />
       <p className='footer-copyright'>
       Copyright  - 2024. MyBranch Services Private Limited | All rights
       reserved.
      </p>
    </div>
    </footer>
    
  );
};

  

export default Footer
