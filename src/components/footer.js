import React from "react";
import "./footer.css";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaYoutubeSquare,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-body">
      <footer>
        <ul className="social-media-icons">
          <li>
            <a href="https://www.linkedin.com/in/vamshi-krishna-57074520a/">
              <FaLinkedin className="facebook" />
            </a>
          </li>
          <li>
            <a href="https://github.com/VamshiKrishna-jillela/Crop-Prediction-UI">
              <FaGithubSquare />
            </a>
          </li>
        </ul>
        <ul>
          <div>
            <h2>Copyright &copy; 2023 Team_MakaraRasi</h2>
          </div>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
