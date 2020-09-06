import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "./theme";
import { Parallax } from "react-spring/renderprops-addons";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Parallax pages={5}>
        <Hero offset={0} factor={1} />
        <Projects offset={1} factor={2.5} />
        <About offset={3} factor={2.1} />
        <Contact offset={4} factor={1} />
      </Parallax>
    </Layout>
  </ThemeProvider>
);

export default App;
