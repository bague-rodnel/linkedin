import React from "react";
import AdBanner from "./AdBanner";

const Footer = () => {
  return (
    <footer className="footer">
      <AdBanner />
      <ul className="footer__list">
        <li className="footer__item">
          <a href="#">About</a>
        </li>
        <li className="footer__item">
          <a href="#">Accessibility</a>
        </li>
        <li className="footer__item">
          <a href="#">Help Center</a>
        </li>
        <li className="footer__item">
          <a href="#">Privacy & Terms</a>
        </li>
        <li className="footer__item">
          <a href="#">Ad Choices</a>
        </li>
        <li className="footer__item">
          <a href="#">Advertising</a>
        </li>
        <li className="footer__item">
          <a href="#">Business Services</a>
        </li>
        <li className="footer__item">
          <a href="#">Get the Linkedin app</a>
        </li>
        <li className="footer__item">
          <a href="#">More</a>
        </li>
      </ul>
      <div className="footer__copyright flex--row--middle">
        <div className="footer__logo">
          <img
            src="https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2019.png"
            alt="logo"
          />
        </div>
        LinkedIn Corporation &copy; 2021
      </div>
      <style jsx>{`
        .footer {
          position: sticky;
          top: 72px;
        }
        .footer__list {
          max-width: 80%;
          margin: 0 auto 20px;

          display: flex;
          justify-content: center;
          flex-wrap: wrap;
        }

        .footer__item {
          margin: 4px 8px;
        }
        .footer__item a {
          color: inherit;
        }

        .footer__item a:hover {
          color: var(--blue);
          text-decoration: underline;
        }

        .footer__copyright {
          gap: 4px;
          justify-content: center;
        }
        .footer__logo img {
          height: 16px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
