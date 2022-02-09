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
              Engineer <span className="color">&</span>
            </span>

            <span className="line">Overqualified Home Cook.</span>
          </h1>
          <div className="buttons">
            <a
              href="/files/Dan_Hyman.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="donate__btn" aria-label="Contact Me">
                Download Resume
              </Button>
            </a>
            <Link
              activeClass="active"
              to={"links"}
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
