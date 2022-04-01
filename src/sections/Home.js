/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "react-scroll";
import { Button } from "theme-ui";

export default function Home() {
  return (
    <section sx={styles.banner} className="page sc" id="home">
      <header id="welcome-section">
        <div className="container">
          <h1>
            <span className="line">Software</span>
            <span className="line">
              <span className="color">Engineer</span>
            </span>
          </h1>
          <div className="buttons">
            <a
              href="/files/Dan_Hyman.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="contact__btn" aria-label="Contact Me">
                Resume
              </Button>
            </a>
            <a
              style={{ marginRight: "1rem" }}
              href="https://github.com/dahyman91"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="contact__btn" aria-label="Contact Me">
                Github
              </Button>
            </a>
            <Link
              className="contact__btn"
              activeClass="active"
              to={"links"}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={"footer"}
            >
              <Button
                className="contact__btn"
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
