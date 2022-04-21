import React from 'react'
import Member from './Member'

function Web() {
  return (
    <div>
    <div className="row">
      <div className="col-md-2">
        <Member
          profile_img_link=""
          title="Amit Kumar Verma"
          pos="Frontend"
          insta_link="https://www.instagram.com/meamitverma/"
        />
      </div>

      <div className="col-md-2">
      <Member
          profile_img_link=""
          title="Noraiz Amaan"
          pos="Frontend"
          insta_link="https://www.instagram.com/androidclub.vitb/"
        />
      </div>


    </div>
  </div>
  )
}

export default Web