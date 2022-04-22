import React from 'react'
import Member from './Member'

function Developer() {
  return (
      <>
      
      
      <p  style={{marginTop:"150px", textAlign:"center"}} className="faculty-title">Developed by</p>
            <div className="about-content-container" > 
                {/* <p className="faculty-title" style={{textAlign:"center"}}>Developed by</p> */}
                <div id="web-developer" className="col-md-2" >
                <Member
                    profileimg={require("../assets/profileimg/amit.jpg")}
                    title="Amit Verma"
                    pos="Web team"
                    linkedin_link="https://www.linkedin.com/in/meamitverma"
                    github_link="https://github.com/meamitverma"
                    insta_link="https://www.linkedin.com/in/meamitverma/"
                />
                </div>
            </div>
      </>
  )
}

export default Developer