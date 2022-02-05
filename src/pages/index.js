import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "../contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Home from "../sections/home";
import About from "../sections/About";
import Blog from "../sections/Blog";
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
          <Blog />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
