import React, { useState, useEffect } from "react";

function Navbar() {
  const [show, handleShow] = useState(true);
  let navItemsVisible = false;
  const navitemsContent = "";
  
  const checkDeviceDimension = () =>{
    if(window.innerWidth < 700){
      return;
    }
  };

  checkDeviceDimension();
  
  useEffect(() => {
    
    window.addEventListener("scroll", () => {
      if ( window.scrollY > 50) {
        handleShow(true);
      }
      else{
        handleShow(false);
      }
    });
    
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  
  
  
  const handleNavOnclick = () => {
    document.getElementById('navbarSupportedContent').classList.toggle("active");
  }
  



  return (
    <React.Fragment>
      <nav
        className={`navbar fixed-top navbar-expand-lg navbar-light ${
          show && "bg-light"
        }`}
      >
        <div className="container container-fluid navbar-mobile">
            <a className="navbar-brand" href="#">
              <img
                src={require("../assets/images/android_club_logo.png")}
                alt=""
                width="54"
                height="50"
              />{" "}
              Android club
            </a>
            <button
              className="navbar-toggler"
              type="button"
              onClick={handleNavOnclick}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          
          
           <div className="nav-items active" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" onClick={handleNavOnclick}>
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#events"
                  onClick={handleNavOnclick}
                >
                  Events
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#about"
                  onClick={handleNavOnclick}
                >
                  Team
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#contact"
                  onClick={handleNavOnclick}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
