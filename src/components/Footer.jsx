import './Footer.css';

const Footer = () => {
  return (
    <section className="footer">
      <nav>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>|</li>
          <li>
            <a>Terms and Conditions</a>
          </li>
          <li>|</li>
          <li>
            <a>Privacy Policy</a>
          </li>
          <li>|</li>
          <li>
            <a>Collection Statement</a>
          </li>
          <li>|</li>
          <li>
            <a>Help</a>
          </li>
          <li>|</li>
          <li>
            <a>Manage Account</a>
          </li>
        </ul>
      </nav>
      <h5>Copyright © 2016 DEMO Streaming. All rights reserved.</h5>
      <div className="social-download">
        <div className="social">
          <a data-testid="facebook-link" href="https://www.chedoc.com/centros">
            <img
              src="/social/facebook-white.svg"
              alt="facebook icon"
              data-testid="facebook-icon"
            />
          </a>
          <a href="https://www.chedoc.com/centros">
            <img src="/social/twitter-white.svg" alt="twitter icon" />
          </a>
          <a href="https://www.instagram.com/chedoc.latam/">
            <img src="/social/instagram-white.svg" alt="instagram icon" />
          </a>
        </div>
        <div className="download">
          <a href="https://www.chedoc.com/centros">
            <img src="/store/app-store.svg" alt="facebook icon" />
          </a>
          <a href="https://www.chedoc.com/centros">
            <img src="/store/play-store.svg" alt="twitter icon" />
          </a>
          <a href="https://www.instagram.com/chedoc.latam/">
            <img src="/store/windows-store.svg" alt="instagram icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
