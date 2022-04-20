import React, { useState } from "react";
import AboutLeads from "./AboutLeads";
import Faculty from "./Faculty";
import Footer from "./Footer";
import Contact from "./Contact";
import Developer from "./Developer";


function About() {
  const [selected, setSelected] = useState({component:<AboutLeads/>,id:"lead"});
  return (
    <div id="about" className="container container-fluid my-5 about-container">
      <div className="about-body-container">
        <p className="display-5 my-5" style={{textAlign:"center", fontWeight:"normal"}}>Meet the Team</p>
        <div>
          <Faculty
            title="Dr. Sandip Mal"
            desc="loreoajsufihuisdhufhusdhgyu ufdhsau hauds"
            pos="Faculty"
          />
        </div>

        <div className="about-nav">
          <div 
            // className={`about-nav-items ${selected.id==="lead" ? "active" : ""}`}
            // onClick={()=>{setSelected({component:<AboutLeads/>,id:"lead"})}}
          >
            <p className="faculty-title">Lead</p>
          </div>

          {/* <div 
            className={`about-nav-items ${selected.id==="android" ? "active" : ""}`}
            onClick={()=>{setSelected({component:<Android/>,id:"android"})}}
          >
            Android team
          </div>
          
          <div 
            className={`about-nav-items ${selected.id==="web" ? "active" : ""}`}
            onClick={()=>{setSelected({component:<Web/>,id:"web"})}}
          >
            Web team
          </div>
          
          <div 
            className={`about-nav-items ${selected.id==="members" ? "active" : ""}`}
            onClick={()=>{setSelected({component:<AboutMembers/>,id:"members"})}}
          >
            Members
          </div> */}

        </div>

        

        <div>
          {/* {selected.component} */}
          <AboutLeads/>
          <Developer/>
          
        </div>
        <Contact/>
        <Footer/>
      </div>

    </div>
  );
}


export default About;
