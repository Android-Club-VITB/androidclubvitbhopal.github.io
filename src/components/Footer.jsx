import React from "react";

function Footer() {
  const instagram_link = "https://www.instagram.com/androidclub.vitb/";

  return (
    // <div className="footer-container">
    //   <div  className="container">
    //     <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    //       <div className="col-md-4 d-flex align-items-center">
    //       <a
    //           href="#"
    //           target="_"
    //           className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
    //         >
    //           <img
    //             src={require("../assets/images/android_black.png")}
    //             alt="android logo "
    //             width={35}
    //           />
    //         </a>
    //         <a
    //           href="https://vitbhopal.ac.in/"
    //           target="_"
    //           className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
    //         >
    //           <img
    //             src="https://www.mpnvva.in/Image/UniversityLogo?instituteID=35"
    //             alt="VIT Bhopal"
    //             width={85}
    //           />
    //         </a>
    //         <span className="text-muted">© 2022 Android Club</span>
    //       </div>

    //       <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
    //         <li className="ms-3">
    //           <a className="text-muted" href={instagram_link} target="_">
    //             <img
    //               src="https://img.icons8.com/ios/2x/000000/instagram-new.png"
    //               alt=""
    //               width={24}
    //               height={24}
    //             />
    //           </a>
    //           <a className="text-muted mx-2" href="https://www.linkedin.com/company/android-club-vit-bhopal/mycompany/" target="_">
    //             <img
    //               src="https://img.icons8.com/ios/344/linkedin.png"
    //               alt=""
    //               width={24}
    //               height={24}
    //             />
    //           </a>
    //         </li>
    //       </ul>
    //     </footer>
    //   </div>
    // </div>

    <div className="container">
      <footer className="py-5 my-5 border-top container-mobile">
        <div className="col footer-logos">
          <a
            href="#"
            target="_"
            className="d-flex align-items-center mb-3 link-dark text-decoration-none"
          >
            <img
              src={require("../assets/images/android_black.png")}
              alt="android logo "
              width={52}
            />
          </a>

          <a
            href="https://vitbhopal.ac.in/"
            target="_"
            className="d-flex align-items-center mb-3 link-dark text-decoration-none"
          >
            <img
              src="https://www.mpnvva.in/Image/UniversityLogo?instituteID=35"
              alt="VIT Bhopal"
              width={110}
            />
          </a>

        </div>

        <div className="col">
          <h5>Explore</h5>
          <ul className="nav flex-column">
            {/* <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Home
              </a>
            </li> */}
            <li className=" mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#events" className="nav-link p-0 text-muted">
                Events
              </a>
            </li>
            <li className="mb-2">
              <a href="#about" className="nav-link p-0 text-muted">
                Team
              </a>
            </li>
            <li className="mb-2">
              <a href="#contact" className="nav-link p-0 text-muted">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="col">
          <h5>Visit</h5>
          <ul className="nav flex-column">
            <li className="mb-2 p-0 text-muted">
              VIT Bhopal University <br />
              Bhopal-Indore Highway <br />
              Kothri Kalan, Sehore <br />
              Madhya Pradesh - 466114 <br/>
              <a
                href='mailto:androidclub@vitbhopal.ac.in?subject=Query'
                className="nav-link p-0 text-muted"
              >
                <p style={{color:"darkblue"}}>androidclub@vitbhopal.ac.in</p>
              </a>
            </li>          
            
          </ul>
        </div>

        <div className="col">
          <h5 >Follow</h5>
          <ul className="nav flex-column">
            <li className="mb-2">
              <a
                href="https://www.instagram.com/androidclub.vitb/"
                target="_"
                className="nav-link p-0 text-muted"
              >
                <img
                  src="https://img.icons8.com/fluency/344/instagram-new.png"
                  alt=""
                  width={18}
                  height={18}
                  style={{marginBottom:"3px"}}
                />{" "}
                Instagram
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://www.linkedin.com/company/android-club-vit-bhopal/mycompany/"
                target="_"
                className="nav-link p-0 text-muted"
              >
                <img
                  src="https://img.icons8.com/fluency/344/linkedin.png"
                  alt=""
                  width={18}
                  height={18}
                  style={{marginBottom:"4px"}}
                />{" "}
                LinkedIn
              </a>
            </li>

            <li className="mb-2">
              <a
                href="https://github.com/androidclubvitbhopal"
                target="_"
                className="nav-link p-0 text-muted"
              >
                <img
                  src="https://img.icons8.com/ios-glyphs/344/github.png"
                  alt=""
                  width={18}
                  height={18}
                  style={{marginBottom:"4px"}}
                />{" "}
                Github
              </a>
            </li>
            
          </ul>
        </div>
      </footer>
      <p className="text-muted" style={{textAlign:"center",fontSize:"14px"}}>© 2022 Android Club VIT Bhopal. All Rights reserved.</p>
    </div>
  );
}

export default Footer;
