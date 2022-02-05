import React from "react";
import { render } from "react-dom";
import { Parallax, Background } from "react-parallax";

const insideStyles = {
  backgroundColor: "rgb(77, 125, 153, 0.7)",
  boxShadow: "inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #4D7D99",
  fontSize: "1.2rem",
  color: "white",
  fontWeight: 500,

  // opacity: "0.2",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: "90%",
};

const image4 =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";

const ParallaxSection = () => (
  <Parallax bgImage={image4} strength={500}>
    <div style={{ height: "100vh", width: "100%" }}>
      <div style={insideStyles}>
        I’ve been curious about the world of software development since college,
        but my time-intensive jobs as a Chef and Catering Director made a career
        pivot seem unrealistic. When the pandemic hit and the office buildings
        that my catering program serviced vacated, I took the opportunity to
        dive into a new field. Since March 2020, I have diligently taught myself
        the latest web development technologies and had opportunities to work
        with all kinds of clients. I’ve gained a range of skills, from ideation
        to deployment and everything in between. In January 2022, I graduated
        from the software engineering program at the immersive coding bootcamp
        Flatiron School, and I’m looking forward to joining a team of inspiring,
        like-minded engineers.
      </div>
    </div>
  </Parallax>
);

export default ParallaxSection;
