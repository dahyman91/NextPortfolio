/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import ParallaxSection from "components/parallax";

export default function About() {
  return (
    <section sx={styles.about} className="page sc" id="about">
      <Container>
        <ParallaxSection />
      </Container>
    </section>
  );
}

const styles = {
  about: {
    backgroundColor: "fff",
    height: "100vh",
    zIndex: "10",
  },
  grid: {
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridGap: [
      "35px 0",
      null,
      "40px 40px",
      "50px 60px",
      "30px",
      "50px 40px",
      "55px 90px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
  },
};
