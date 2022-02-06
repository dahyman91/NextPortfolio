import React from "react";
import { Parallax, Background } from "react-parallax";

const bgImage =
  "https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

const ParallaxSection = () => (
  <Parallax
    style={{ width: "100%", margin: "auto" }}
    bgImage={bgImage}
    strength={500}
  >
    <div style={{ height: "93vh", width: "100%" }}>
      <div className="parralaxTextArea" style={styles.insideStyles}>
        <p className="parralaxText" style={styles.text}>
          I’ve been curious about the world of software development since
          college, but my time-intensive jobs as a Chef and Catering Director
          made a career pivot seem unrealistic. When the pandemic hit and the
          office buildings that my catering program serviced vacated, I took the
          opportunity to dive into a new field. Since March 2020, I have
          diligently taught myself the latest web development technologies and
          had opportunities to work with all kinds of clients. I’ve gained a
          range of skills, from ideation to deployment and everything in
          between. In January 2022, I graduated from the software engineering
          program at the immersive coding bootcamp Flatiron School, and I’m
          looking forward to joining a team of inspiring, like-minded engineers.
        </p>
      </div>
    </div>
  </Parallax>
);

const styles = {
  insideStyles: {
    backgroundColor: "rgb(77, 125, 153, 0.8)",
    boxShadow: "inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #4D7D99",
    display: "flex",
    color: "white",
    fontWeight: 500,
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    // width: "90%",
  },
};

export default ParallaxSection;
