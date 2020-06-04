import React from "react";
import "./ipod.css";
import Zingtouch from "zingtouch";
import Pads from "./pads";
import Screen from "./screen";
import Game_img from "./games.jpg";
import Setting_img from "./settings.png";
import Music_img from "./music.jpg";
import Coverflow_img from "./coverflow.jpg";
import Ipod_img from "./ipod.jpg";

// * Creating Ipod class

class Ipod extends React.Component {
  constructor() {
    super();
    this.state = {
      display: ["Coverflow", "Music", "Games", "Settings"],
    };
  }
}

