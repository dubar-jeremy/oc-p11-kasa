import "./footer.css";
import logo from "../../../assets/logo_footer.png";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { FooterProps } from "./footer.props";
const Footer = ({ fixed }: FooterProps) => {
  const location = useLocation();

  const isHousingPage = location.pathname.includes("housing");
  // prevent accordion to be hidden by footer
  useEffect(() => {
    if (!isHousingPage) {
      document.querySelector(".footer")?.classList?.remove("footer_fixed");
      console.log("here")
    }

    if (fixed) {
      document.querySelector(".footer")?.classList?.add("footer_fixed");
    }
  }, [location, fixed, isHousingPage]);

  return (
    <div className={`footer`}>
      <div className="footer_content">
        <img src={logo} alt="logo" className="footer_logo" />
        <div className="footer_signature">
          <p>© 2020 Kasa. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
