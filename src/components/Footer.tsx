import {
    IoLogoInstagram,
    IoLogoFacebook,
    IoLogoTwitter,
  } from 'react-icons/io5';
  
  export default function Footer() {
    return (
      <footer className="footer p1 bg-amber-300 " id="footer">
        <div className="max-w-[1280px] px-4 md:px-10 mx-auto grid--footer">
          <div className="logo-col">
            <a href="#" className="footer-logo">
              <img
                className="footer-logo1"
                style={{ height: '40px' }}
                alt="Gsta developer"
                src="/logo.png"
              />
            </a>
  
            <ul className="social-links">
              <li>
                <a className="footer-link" href="#">
                  <IoLogoInstagram className="social-icon" />
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  <IoLogoFacebook className="social-icon" />
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  <IoLogoTwitter className="social-icon" />
                </a>
              </li>
            </ul>
  
            <p className="copyright footer-color">
              Copyright © <span className="year">2022</span> Gsta <br />
              Developer,<br />
              Inc. All rights reserved.
            </p>
          </div>
  
          <div className="address-col">
            <p className="footer-heading footer-color">Contact us</p>
            <address className="contacts">
              <p className="address footer-color">Gsta Developer</p>
              Phone{' '}
              <a className="footer-link" href="tel:(91) 9876-768701">
                (91)94647-94776
              </a>
              <br />
              <br />
              <a className="footer-link" href="mailto:gstadeveloper@gmail.com">
                gstadeveloper@gmail.com
              </a>
            </address>
          </div>
  
          <div className="nav-col">
            <p className="footer-heading footer-color">Account</p>
            <ul className="footer-nav">
              <li>
                <a className="footer-link" href="https://gstadeveloper.com/">
                  Create account
                </a>
              </li>
              <li>
                <a className="footer-link" href="https://gstadeveloper.com/">
                  Sign in
                </a>
              </li>
              <li>
                <a className="footer-link" href="https://gstadeveloper.com/">
                  iOS app
                </a>
              </li>
              <li>
                <a className="footer-link" href="https://gstadeveloper.com/">
                  Android app
                </a>
              </li>
            </ul>
          </div>
  
          <div className="bottom-link">
            <p className="footer-heading footer-color">Explore</p>
            <ul className="footer-nav">
              <li>
                <a className="footer-link" href="https://gstadeveloper.com/">
                  Home
                </a>
              </li>
              <li>
                <a className="footer-link" href="https://gstadeveloper.com/">
                  React
                </a>
              </li>
              <li>
                <a className="footer-link" href="https://gstadeveloper.com/">
                  React native
                </a>
              </li>
              <li>
                <a className="footer-link" href="https://gstadeveloper.com/">
                  Java Script
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
  