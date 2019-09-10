import React, { Component } from "react";
import Menu from "./Components/Menu/Menu";
import Nav from "./Components/Nav/Nav";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";

class App extends Component {
  state = {
    menuState: false
  };

  toggleMenu = () => {
    this.setState(state => ({
      menuState: !state.menuState
        ? "active"
        : state.menuState === "deactive"
        ? "active"
        : "deactive"
    }));
  };
  render() {
    return (
      <>
        <Menu toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
        <Nav toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
        <Header />
        <About />
        <Footer />
        <Projects />
        <Contact />
      </>
    );
  }
  // TODO: make parallax webflow effect
  componentDidMount() {

  }
}

export default App;
