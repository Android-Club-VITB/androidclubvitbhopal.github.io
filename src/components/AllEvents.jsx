import React from "react";
import Event from "./Event";

function PastEvents() {
  return (
    <div id="events" className="container container-fluid">
      <div className="row event-item-container"> 
        
          <div className="col-md-4">
            <Event
              imageurl={require("../assets/event/code-roid.png")}
              title="Code-Roid"
              desc={"And Online Coding Competition"}
              schedule_date="April 22, 2022"
              schedule_time="10:00AM - 12:00PM"
              venue="Online"
              linktojoin="https://docs.google.com/forms/d/e/1FAIpQLSeEJjAor60CNVFeR6CccS5vxPC9JLLfR_DQi8vuiqI5UXSXSQ/viewform"
              disabled="disabled"
            />
          </div>

          <div className="col-md-4">
            <Event
              imageurl={require("../assets/event/handson-workshop.png")}
              title="Android Masterclass"
              desc={"Rachit Goyal \n - Senior Android Lead at Walmart Labs"}
              schedule_date="April 15, 2022"
              schedule_time="5PM - 8:30PM"
              venue="Online"
              linktojoin="https://docs.google.com/forms/d/e/1FAIpQLSeEJjAor60CNVFeR6CccS5vxPC9JLLfR_DQi8vuiqI5UXSXSQ/viewform"
              disabled="disabled"
            />
          </div>

         <div className="col-md-4">
          <Event
            imageurl={require("../assets/event/v-code.png")}
            title="V-Code"
            desc="Android App Developing Competition, Coding Studio 2"
            schedule_date="29/03/2019"
            schedule_time="11:00 AM - 2:00 PM"
            venue="Coding Studio 2"
            linktojoin="https://www.instagram.com/androidclub.vitb/"
            disabled="disabled"
          />
        </div> 

        <div className="col-md-4">
          <Event
            imageurl={require("../assets/event/blind-coding.png")}
            title="Blind Coding V2.0"
            desc="Blind coding competition"
            schedule_date="06/12/2019"
            schedule_time="1:30 PM - 4:30 PM"
            venue="Coding Studio 1 & 2"
            linktojoin="https://www.instagram.com/androidclub.vitb/"
            disabled="disabled"
          />
        </div> 

        <div className="col-md-4">
          <Event
            imageurl={require("../assets/event/national-workshop-banner.jpg")}
            title="Workshop on Android Application Development"
            desc="3 days National Workshop on Android Application Development"
            schedule_date="16/03/2018 - 18/03/2018"
            schedule_time="Whole Day"
            venue="Computer Studio 2"
            linktojoin="https://www.instagram.com/androidclub.vitb/"
            disabled="disabled"
          />
        </div> 

        
        

      </div>
    </div>
  );
}

export default PastEvents;
