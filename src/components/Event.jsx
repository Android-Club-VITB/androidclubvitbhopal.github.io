import React from "react";

function Event(props) {
  const max_desc_length = 120;

  return (
    <div className="card-container">
      <div className="card event">
        <img src={props.imageurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <p
            className="card-title"
            style={{ fontSize: "20px", fontWeight: "470" }}
          >
            {props.title}
          </p>
          <p className="card-text">
            {props.desc.length > max_desc_length
              ? props.desc.substr(0, max_desc_length) + "..."
              : props.desc}
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item ">
            <div className="event-register-container">
             <div className="event-schedule"> 
                  <div className="event-schedule-date">
                      <img src="https://img.icons8.com/material-outlined/344/454545/calendar--v1.png" alt="" width={17} style={{marginRight:"7px"}}/>
                      {props.schedule_date}
                  </div>
                  
                 <div className="event-schedule-time">
                     <img src="https://img.icons8.com/windows/344/454545/clock.png" alt="" width={17} style={{marginRight:"7px"}} />
                      {props.schedule_time}
                  </div>

                  <div className="event-venue">
                     <img src="https://img.icons8.com/color/344/marker.png" alt="" width={17} style={{marginRight:"7px"}} />
                      {props.venue}
                  </div>

                  
              </div>
              <div className={`event-register-btn`}>
                <a
                  href={props.linktojoin}
                  target="_"
                  className={`btn btn-primary ${props.disabled}`}
                  
                >
                  Register
                </a>
              </div>
            </div>
            
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Event;
