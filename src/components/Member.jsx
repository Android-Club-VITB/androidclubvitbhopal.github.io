import React from "react";

function Member(props) {
  return (
    <div class="card member-container">
      <img
        src={props.profileimg}
        className="card-img-top"
        alt="..."
      />
      <div class="member-body">
        <div class="faculty-title" style={{textAlign:"center"}}>{props.title}</div>

        <div className="member-desc-wrapper">
          <div className="faculty-pos" style={{textAlign:"center"}}>{props.pos}</div>
         
          <div className="member-social-link">
              {/* instagram */}
              {props.linkedin_link && <a href={props.linkedin_link} target="_">
                <img
                  src="https://img.icons8.com/fluency/344/linkedin.png"
                  alt="linkedin icon"
                  width={24}
                />
              </a>
              }
              
              {props.github_link && <a href={props.github_link} target="_">
                <img
                  src="https://img.icons8.com/ios-glyphs/344/github.png"
                  alt="github icon"
                  width={24}
                />
              </a>
              }
              
              {props.insta_link && <a href={props.insta_link} target="_">
                <img
                  src="https://img.icons8.com/fluency/344/instagram-new.png"
                  alt="instagram icon"
                  width={24}
                />
              </a>
              }

          </div>

        </div>
      </div>
    </div>
  );
}

export default Member;
