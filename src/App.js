// src/App.js
import React, { Component } from "react";

import "./App.css";
import Characters from "./Characters";
import Quote from "./Quote";
import Quotes from "./Quotes";
import Lamp from "./Lamp";
import Work from "./Work";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Work />
        <Characters/>


          <h1 className="App-title">Simpsons Quotes</h1>

        </header>
         <Lamp />
        <Quote
             quote="I believe the children are the future... Unless we stop them now!"
             character="Homer Simpson"
             image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
                />
                <Quote
             quote="Me fail English? That's unpossible"
             character="Ralph Wiggum"
                  image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
                />
        <Quotes />

      </div>
    );
  }
}

export default App;