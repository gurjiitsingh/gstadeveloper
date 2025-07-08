import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoTwitter,
} from 'react-icons/io5';

export default function Footer() {
  return (
    <footer className="footer p1 bg-amber-300" id="footer">
      <div className="max-w-[1280px] px-4 md:px-10 mx-auto grid--footer">
        <div className="logo-col">
          <div className="footer-logo">
            <img
              className="footer-logo1"
              style={{ height: '40px' }}
              alt="Gsta developer"
              src="/logo.png"
            />
          </div>

          <ul className="social-links">
            <li>
              <span className="footer-link">
                <IoLogoInstagram className="social-icon" />
              </span>
            </li>
            <li>
              <span className="footer-link">
                <IoLogoFacebook className="social-icon" />
              </span>
            </li>
            <li>
              <span className="footer-link">
                <IoLogoTwitter className="social-icon" />
              </span>
            </li>
          </ul>

          <p className="copyright footer-color">
            Copyright © <span className="year">2022</span> it10x.com <br />
            Developer,<br />
            Inc. All rights reserved.
          </p>
        </div>

        <div className="address-col">
          <p className="footer-heading footer-color">Contact us</p>
          <address className="contacts">
            <p className="address footer-color">It10xr</p>
            {/* Phone <span className="footer-link">(91)94647-94776</span> */}
            <br />
            <br />
            <span className="footer-link"></span>
          </address>
        </div>

        <div className="nav-col">
          <p className="footer-heading footer-color">Account</p>
          <ul className="footer-nav">
            <li>
              <span className="footer-link">Create account</span>
            </li>
            <li>
              <span className="footer-link">Sign in</span>
            </li>
            <li>
              <span className="footer-link">iOS app</span>
            </li>
            <li>
              <span className="footer-link">Android app</span>
            </li>
          </ul>
        </div>

        <div className="bottom-link">
          <p className="footer-heading footer-color">Explore</p>
          <ul className="footer-nav">
            <li>
              <span className="footer-link">Home</span>
            </li>
            <li>
              <span className="footer-link">React</span>
            </li>
            <li>
              <span className="footer-link">React native</span>
            </li>
            <li>
              <span className="footer-link">Java Script</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
