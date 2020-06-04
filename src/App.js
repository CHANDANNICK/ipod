import React from "react";
import "./App.css";
import Ipod from "./ipod.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/*rendering ipod */}
        <Ipod />
      </div>
    );
  }
}

// ** Exporting App

export default App;
