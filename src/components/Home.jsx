import React from "react";

function Home() {
  return (
    <div id="home" className="container">
      <div className="home-content">
        <h2>Welcome To</h2>
        <h1>Android Club VIT Bhopal</h1>
        <br></br>
        <p className="home-description">
          We at Android Club are driven to achieve excellence and solve problems
          while at it. Dedicated to educating and creating awareness about
          modern Mobile App development, we host workshops, hackathons,
          webinars, and all possible events under the sun, that help us build an
          inclusive community of like-minded people who explore and learn
          together. So, wear your thinking caps, put on some creativity, and
          let's develop some amazing apps!
        </p>
        <img
          className="img-fluid"
          src={require("../assets/images/home_illustratation.png")}
          alt=""
          style={{ width: "100vh" }}
        />
      </div>
    </div>
  );
}

export default Home;
