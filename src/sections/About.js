/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import ParallaxSection from "components/parallax";

export default function About() {
  return (
    <section id="about" sx={styles.about} className="page sc">
      <ParallaxSection />
    </section>
  );
}

const styles = {
  about: {
    back: "fff",
    height: "100vh",
    zIndex: "10",
  },
};
