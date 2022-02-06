/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "react-scroll";
import { Button } from "theme-ui";

export default function Home() {
  return (
    <section sx={styles.banner} className="" id="home">
      <header id="welcome-section">
        <div className="forest" />
        <div className="silhouette" />
        <div className="moon" />
        <div className="container">
          <h1>
            <span className="line">I love</span>
            <span className="line">web design</span>
            <span className="line">
              <span className="color">&</span> code.
            </span>
          </h1>
          <div className="buttons">
            <Link
              activeClass="active"
              to={"footer"}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={"footer"}
            >
              <Button
                className="donate__btn"
                // variant="textBtn"
                aria-label="Contact Me"
              >
                Download Resume
              </Button>
            </Link>
            <Link
              activeClass="active"
              to={"footer"}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={"footer"}
            >
              <Button
                className="donate__btn"
                variant="secondary"
                aria-label="Contact Me"
              >
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </header>
    </section>
  );
}

const styles = {
  banner: {},
};
