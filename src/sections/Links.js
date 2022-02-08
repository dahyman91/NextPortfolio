/** @jsx jsx */
import { jsx, Container } from "theme-ui";
import SectionHeader from "components/section-header";

import {
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
  FaMediumM,
} from "react-icons/fa";

export default function Links() {
  return (
    <section sx={{ height: "60vh" }} id="links">
      <Container sx={styles.headingContainer}>
        <SectionHeader slogan="Where to find me" title="Reach Out" />
      </Container>
      <Container sx={styles.linksContainer}>
        <a href="https://www.linkedin.com/in/dan-hyman-dev/" target="blank">
          <FaLinkedin sx={styles.link} color="#2366C2" />
        </a>
        <a href="https://github.com/dahyman91" target="blank">
          <FaGithub sx={styles.link} color="#24292F" />
        </a>
        <a href="https://www.instagram.com/_danhyman/" target="blank">
          <FaInstagramSquare sx={styles.link} color="#F79E4C" />
        </a>
        <a href="https://medium.com/@dahyman91" target="blank">
          <FaMediumM sx={styles.link} color="292929" />
        </a>
      </Container>
    </section>
  );
}

const styles = {
  headingContainer: {
    paddingTop: "50px",
  },
  linksContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    margin: "20vh auto",
    height: "20vh",
    fontSize: "100px",
    "@media screen and (max-width: 670px)": {
      flexDirection: "column",
      marginTop: "35vh",
    },
  },
  // link: {
  //   cursor: "pointer",
  // },
};
