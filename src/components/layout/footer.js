import styled from "styled-components";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Sfooter>
      <div className="footer_icons">
        <a href="https://www.facebook.com">
          {" "}
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com">
          {" "}
          <FaInstagram />
        </a>
        <a href="https://www.twitter.com">
          {" "}
          <FaTwitter />
        </a>
      </div>
    </Sfooter>
  );
};

export default Footer;

const Sfooter = styled.footer`
  position: fixed;
  width: 80px;
  height: 100%;
  left: 0%;
  top: 0%;
  background-color: #42145f;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  color: #fff;

  a {
    font-size: 40px;
    padding-bottom: 40px;
    color: #fff;
  }
  @media (max-width: 929px) {
    width: 100%;
    height: 60px;
    position: relative;
    top: 3%;
    justify-content: center;
    a {
      font-size: 30px;
      padding: 0px 10px;
    }
  }
`;
