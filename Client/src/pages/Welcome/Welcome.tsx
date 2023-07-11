import { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import image from "../../Components/image";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import SearchBox from "../../Components/SearchBox/SearchBox";
import Button from "../../Components/Button/Button";
import "./Welcome.css";

const Welcome = () => {
  // TILT ANIMATION OFFICIAL
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".card"), {
      max: 12,
      speed: 9,
      glare: false,
      "max-glare": 0.3,
    });
  });
  return (
    <>
      <main>
        <Navbar />

        {/* Start of body/Content of Home page */}

        <div className="page-content">
          <div className="firstdiv1">
            <div className="left-contentpg1">
              <p className="ultimategaming">
                Welcome to the ultimate
                <br />
                gaming showdown!
                <br />
              </p>
              <p className="rest1 upr1">
                Put your skills to the test against some of the best gamers
                around the world.
              </p>
              <p className="rest1 dr1">
                Get ready to battle it out in heart-pumping, adrenaline-fueled
                <br />
                matches where every second counts.
              </p>
              <Button disabled={false} className="getstarted">
                Get Started
              </Button>
            </div>
            <div className="cardfirstpage">
              <img className="cardfpimg" src={image.Homepage2imgkini} alt="" />
              {/*  add chatbox logo  */}
            </div>
          </div>
          <section className="s2ndpage">
            {/* popular games page */}
            <p className="populargames">Popular Games</p>
            <div className="populargames-icons">
              <div className="card">
                <a>
                  <img className="codmpg" src={image.Codm} alt="CODM" />
                </a>
              </div>
              <div className="card">
                <a>
                  <img className="chesspg" src={image.Chess} alt="Chess.com" />
                </a>
              </div>
              <div className="card">
                <a>
                  <img className="pubgpg" src={image.Pubg} alt="PUBG" />
                </a>
              </div>
              <div className="card">
                <a>
                  <img className="fifapg" src={image.Fifa23} alt="FIFA23" />
                </a>
              </div>
            </div>
            <div>
              {/* searchbar */}
              <p className="queryfrsmallerdevices">
                Looking for a Tournament? Search
              </p>
              <SearchBox />
              <div className="cantfindyourgame">
                <p className="pcantgame">Can't find your Tournament?</p>
                <button className="createbtn">Create</button>
              </div>
            </div>
          </section>
          <section className="featuredgp">
            {/* featured games page */}
            <p className="featuredtext">Featured Games</p>
            <div className="gameimagesdiv">
              <a>
                <img src={image.MWCoD} alt="mw2" />
              </a>
              <a>
                <img src={image.WZCoD} alt="warzone" />
              </a>
              <a>
                <img src={image.Valorant} alt="valorant" />
              </a>
              <a>
                <img src={image.CSGO} alt="cs:go" />
              </a>
              <a>
                <img src={image.PES} alt="pes23" />
              </a>
              <a>
                <img src={image.Loli} alt="lol" />
              </a>
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
};
export default Welcome;
