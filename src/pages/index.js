import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "../contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Home from "../sections/Home";
import About from "../sections/About";
import Links from "../sections/Links";
import Projects from "../sections/Projects";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Dan Hyman" />
          <Home />
          <About />
          <Projects />
          <Links />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
