/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "react-scroll";

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
            <a href="#projects">Resume</a>
            <a href="/contact" className="cta">
              get in touch
            </a>
          </div>
        </div>
      </header>
    </section>
  );
}

const styles = {
  banner: {},
};
