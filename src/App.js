import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Abouts from "./components/Abouts";
import Header from "./components/Header";
import Homes from "./components/Homes";
import Footer from "./components/Footer";
import Portfolios from "./components/Portfolios";
import images from "./images.json";

class Project extends Component {
  state = {
    images
  };
  render() {
    return (
      <div>
        <Router>
          <Header />
          <div>
            <span></span>
            <hr />
            <Switch>
              <Route exact path="/">
                <Homes />
              </Route>
              <Route path="/about">
                <Abouts />
              </Route>
              <Route path="/portfolio">
                {this.state.images.map(image => (
                  <Portfolios
                    image={image.image}
                    key={image.id}
                    alt={image.alt}
                    caption={image.caption}
                  />
                ))}
              </Route>
            </Switch>
          </div>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default Project;
