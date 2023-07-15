import "./Navbar.css";
import image from "../image";
import { useState } from "react";
import NavDrawer from "../NavDrawer/NavDrawer";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 75) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbar);
  return (
    <header
      className={navbar ? "header-nav active relative" : "header-nav relative"}
    >
      <div>
        <img
          src={image.ControllerLogo}
          // src={ControllerLogo}
          alt="controller logo"
          className="header-icon"
        />
      </div>
      <nav className="listoverallcontainer">
        <ul className="ulcontainer">
          <li className="">
            <div className="">
              <a className="" href="">
                Home
              </a>
              <div className="onhoverhome">
                <a className="" href="">
                  Register
                </a>
                <a className="" href="">
                  Featured Tournaments
                </a>
                <a className="" href="">
                  News and Updates
                </a>
                <a className="" href="">
                  Prizes and Rewards
                </a>
                <a className="" href="">
                  Sponsors and Partners
                </a>
              </div>
            </div>
          </li>

          {/* SECOND NAV ELEMENT  */}
          <li className="">
            <div className="">
              <a className="" href="">
                Schedule & Results
              </a>
              <div className="onhoversnr">
                <a className="" href="">
                  Match Schedule
                </a>
                <a className="" href="">
                  Match Results
                </a>
                <a className="" href="">
                  Standings and Leaderboards
                </a>
                <a className="" href="">
                  Replays or VODs
                </a>
                <a className="" href="">
                  Upcoming Matches
                </a>
              </div>
            </div>
          </li>

          {/* THIRD NAV ELEMENT  */}
          <li className="">
            <div className="">
              <a className="" href="">
                Teams
              </a>
              <div className="onhoverteams">
                <a className="" href="">
                  Team Profiles
                </a>
                <a className="" href="">
                  Team Standings
                </a>
                <a className="" href="">
                  Team Rosters
                </a>
                <a className="" href="">
                  Match History
                </a>
                <a className="" href="">
                  Featured Matches
                </a>
              </div>
            </div>
          </li>

          {/* FOURTH NAV ELEMENT  */}
          <li className="">
            <div className="">
              <a className="" href="">
                Logistics
              </a>
              <div className="onhoverlogs">
                <a className="" href="">
                  Venue Information
                </a>
                <a className="" href="">
                  Prize Distribution
                </a>
                <a className="" href="">
                  Technical Requirements
                </a>
                <a className="" href="">
                  Player Check-In
                </a>
                <a className="" href="">
                  FAQ and Helpdesk
                </a>
              </div>
            </div>
          </li>

          {/* FIFTH NAV ELEMENT  */}
          <li className="">
            <div className="">
              <a className="" href="">
                Rules
              </a>
              <div className="onhoverrule">
                <a className="" href="">
                  General Tournament Rules
                </a>
                <a className="" href="">
                  Gameplay Rules
                </a>
                <a className="" href="">
                  Player Conduct
                </a>
                <a className="" href="">
                  Cheating and Exploits
                </a>
                <a className="" href="">
                  Dispute Resolution
                </a>
              </div>
            </div>
          </li>

          {/* SIXTH NAV ELEMENT  */}
          <li className="">
            <div className="">
              <a className="" href="">
                Contact
              </a>
              <div className="onhovercont">
                <a className="" href="">
                  Contact Information
                </a>
                <a className="" href="">
                  FAQ or Helpdesk
                </a>
                <a className="" href="">
                  Support Ticket System
                </a>
                <a className="" href="">
                  Partnerships and Sponsorships
                </a>
                <a className="" href="">
                  Feedback and Suggestions
                </a>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <div className="login-sign-nav">
        <div>
          <button className="home-login-signup signup-home">Sign up</button>
        </div>
        <div>
          <button className="home-login-signup login-home">Login</button>
        </div>
      </div>
      <NavDrawer />
    </header>
  );
};

export default Navbar;