import React from 'react'
import Event from './Event'

function FutureEvents() {
  return (
    <div id="events" className="container container-fluid">
       
       

        <div className="row event-item-container">
          {/* <div className="col-md-3">
            <Event
              imageurl="data:image/jpeg;base64,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"
              title="Event 3"
              desc="Lorem, ipsodi culpa cumque iure suscipit porro esse!"
              schedule="26 March 2022"
              linktojoin="https://www.instagram.com/androidclub.vitb/"
            />
          </div> */}

          <div className="col-md-4">
            <Event
              imageurl={require("../assets/event/handson-workshop.png")}
              title="Android Masterclass"
              desc={"Rachit Goyal \n - Senior Android Lead at Walmart Labs"}
              schedule_date="April 15, 2022"
              schedule_time="5PM - 8:30PM"
              venue="Online"
              linktojoin="https://docs.google.com/forms/d/e/1FAIpQLSeEJjAor60CNVFeR6CccS5vxPC9JLLfR_DQi8vuiqI5UXSXSQ/viewform"
            />
          </div>
          
        </div>
      </div>
  )
}

export default FutureEvents