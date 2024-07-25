import { Link } from "react-router-dom";
import "../components/componentCss/header.css";
import LinkButton from "./LinkButton";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="links">
          <div className="links-left">
            <div className="links-left-up">
              <button id="propbutton"></button>
            </div>
            <div className="links-left-down">
              <LinkButton text="Boka" adress="/booking" />
              <LinkButton text="Se bokningar" adress="/review-bookings" />
              <LinkButton text="Rum" adress="/rooms" />
            </div>
          </div>
        </div>
        <div className="logo-container">
          <Link to="/">
            <img src="/images/bergstuganLogga.png" alt="header-logo" />
          </Link>
        </div>
        <div className="links">
          <div className=" links-right">
            <div className="links-right-up">
              <LinkButton text="Logga in" adress="/login" />
            </div>
            <div className="links-right-down">
              <LinkButton text="Visor" adress="/songs" />
              <LinkButton text="Regler" adress="/rules" />
              <LinkButton text="Historia" adress="/history" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
