import React from 'react'
import './Footer.css'
import logo from '../Assets/logo.png'
const Footer = () => {
  return (
    <div className='footer'>
        
            
            <div className="footer-info">
            
                <div className="footer-logo">
                    <img src={logo} alt='' />
                    <p>SabkiDukan</p>
                </div>
                <ul>
                    <p>Know Us</p>
                    <hr />
                    <li>About Us</li>
                    <li>Our Services</li>
                    <li>Privacy Policy</li>
                    <li>Contact Us</li>
                </ul>
                <ul>
                    <p>Get Help</p>
                    <hr />
                    <li>FAQ</li>
                    <li>Shipping</li>
                    <li>Returns</li>
                    <li>Payment</li>
                </ul>
                {/* <ul>
                    <li>About</li>
                    <li>Products</li>
                    <li>Offices</li>
                    <li>Contact Us</li>
                </ul> */}
                <div className="footer-social-icons">
                    <p>Follow Us</p>
                    <hr />
                    <i class="fab fa-facebook"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-linkedin"></i>
                </div>
            </div>
        
        <div className="copyright">
            <hr/>
            &copy; Sabki Dukan | All Rights Reserved
        </div>
    </div>
  )
}

export default Footer