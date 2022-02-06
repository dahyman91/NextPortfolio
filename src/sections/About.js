/** @jsx jsx */
import { jsx } from "theme-ui";
import ParallaxSection from "components/parallax";

export default function About() {
  return (
    <section id="about" sx={styles.about}>
      <ParallaxSection />
    </section>
  );
}

const styles = {
  about: {
    back: "fff",
    height: "103vh",
    zIndex: "10",
  },
};
