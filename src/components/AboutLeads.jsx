import React from "react";
import Member from "./Member";

function AboutLead() {
  return (
    // <div className="about-content-container">
    //   {/* //<div className="row"> */}
    //     <div id="lead-tech" className="col-md-2" >
    //       <Member
    //         profileimg={require("../assets/profileimg/rohan.jpg")}
    //         title="Rohan Sarkar"
    //         pos="Secretary"
    //         linkedin_link="https://www.linkedin.com/in/rohan-sarkarr"
    //         github_link="https://github.com/rohan-sarkarr"
    //         insta_link="https://www.instagram.com/rohan_sarkarr/"
    //       />
    //     </div>
    
    //     <div id="lead-nontech" className="col-md-2" >
    //     <Member
    //         profileimg={require("../assets/profileimg/tamanna.jpeg")}
    //         title="Tamanna Kapoor"
    //         pos="Secretary"
    //         linkedin_link="https://www.linkedin.com/in/tamannakapoor/"
    //         github_link="https://github.com/tamununaaa"
    //         insta_link="https://www.instagram.com/tamununaaa/"
    //       />
    //     </div>      

    //   {/* </div> */}
    // </div>

    <>
      
      
      {/* <p  style={{marginTop:"150px", textAlign:"center"}} className="faculty-title">Developed by</p> */}
            <div className="about-content-container" > 
                {/* <p className="faculty-title" style={{textAlign:"center"}}>Developed by</p> */}
                <div id="lead-tech" className="col-md-2" >
                <Member
                    profileimg={require("../assets/profileimg/rohan.jpg")}
                    title="Rohan Sarkar"
                    pos="Secretary"
                    linkedin_link="https://www.linkedin.com/in/rohan-sarkarr"
                    github_link="https://github.com/rohan-sarkarr"
                    insta_link="https://www.instagram.com/rohan_sarkarr/"
                />
                </div>
                
                <div id="lead-nontech" className="col-md-2" >
                <Member
                    profileimg={require("../assets/profileimg/tamanna.jpeg")}
                    title="Tamanna Kapoor"
                    pos="Secretary"
                    linkedin_link="https://www.linkedin.com/in/tamannakapoor/"
                    github_link="https://github.com/tamununaaa"
                    insta_link="https://www.instagram.com/tamununaaa/"
                />
                </div>
                

            </div>
      </>
  );
}

export default AboutLead;
