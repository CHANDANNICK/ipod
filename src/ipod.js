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

// ** Creating Ipod class

class Ipod extends React.Component {
  constructor() {
    super();
    this.state = {
      display: ["Coverflow", "Music", "Games", "Settings"],
    };
  }

  // ** Main Screen

  mainScreen = () => {
    let current = document.getElementsByClassName("newScreen");

    let currentScreen = "";

    for (currentScreen of current) {
      if (currentScreen.style.visibility == "visible") {
        break;
      }
    }
    // console.log(currentScreen);

    currentScreen.style.visibility = "hidden";
    currentScreen.style.height = "0";
    currentScreen.style.width = "0";

    let home = document.getElementById("display");
    // console.log("home b4 ---> ", home);
    home.style.visibility = "visible";
    home.style.height = "45%";
    home.style.width = "85%";
    home.style.borderTopLeftRadius = "3%";
    home.style.borderTopRightRadius = "5%";
    home.style.marginTop = "1%";
    // home.classList.add('homeScreen');
    // console.log("home a4 ---> ", home);
  };

  // ** switch Screen

  switchScreen = (e) => {
    let home = document.getElementById("display");
    home.style.visibility = "hidden";
    home.style.height = "0";
    home.style.width = "0";
    let screen = document.getElementById(e.innerHTML + "-screen");
    // console.log("is img tag --> ", document.getElementById("title"));
    if (document.getElementById("title") != null) {
      document.getElementById("title").remove();
    }
    // console.log("after remove", document.getElementById("title"));
    let img = document.createElement("img");

    if (e.innerHTML === "Music") {
      img.setAttribute("src", Music_img);
    } else if (e.innerHTML === "Games") {
      img.setAttribute("src", Game_img);
      // console.log(img.getAttribute("src"));
    } else if (e.innerHTML === "Settings") {
      img.setAttribute("src", Setting_img);
    } else {
      img.setAttribute("src", Coverflow_img);
    }
    img.id = "title";
    img.style.height = "100%";
    img.style.width = "100%";

    screen.appendChild(img);

    screen.style.alignmentBaseline = "center";
    screen.style.position = "absolute";
    screen.style.visibility = "visible";
    screen.style.height = "45%";
    screen.style.width = "85%";
    screen.style.borderRadius = "3%";
    screen.style.marginLeft = "151px";
  };

  //   ** Click
  Click = () => {
    let elements = document.getElementsByClassName("screen-elements");

    let ele;
    for (ele of elements) {
      if (ele.style.backgroundColor == "blue") {
        // console.log(ele.innerHTML);
        break;
      }
    }
    this.switchScreen(ele);
  };

  // ** Component Colors
  handleColor = () => {
    let div = document.getElementById("Coverflow");
    div.style.backgroundColor = "white";
    div.style.color = "black";
    div = document.getElementById("Music");
    div.style.backgroundColor = "white";
    div.style.color = "black";
    div = document.getElementById("Games");
    div.style.backgroundColor = "white";
    div.style.color = "black";
    div = document.getElementById("Settings");
    div.style.backgroundColor = "white";
    div.style.color = "black";
  };

  // ** Scroll Funtion
  handleScroll = () => {
    let angle = 0;
    const target = document.getElementById("menu");
    const region = new Zingtouch.Region(target);
    region.bind(target, "rotate", (e) => {
      // console.log(angle);

      angle = angle + e.detail.distanceFromLast;
      if (Math.abs(angle) > 0 && Math.abs(angle) < 20) {
        this.handleColor();
        let curEle = document.getElementById("Coverflow");
        curEle.style.backgroundColor = "blue";
        curEle.style.color = "white";
      }
      if (Math.abs(angle) > 15 && Math.abs(angle) < 35) {
        this.handleColor();
        let curEle = document.getElementById("Music");
        curEle.style.backgroundColor = "blue";
        curEle.style.color = "white";
      }

      if (Math.abs(angle) > 30 && Math.abs(angle) < 50) {
        this.handleColor();
        let curEle = document.getElementById("Games");
        curEle.style.backgroundColor = "blue";
        curEle.style.color = "white";
      }
      if (Math.abs(angle) >= 45 && Math.abs(angle) < 65) {
        this.handleColor();
        let curEle = document.getElementById("Settings");
        curEle.style.backgroundColor = "blue";
        curEle.style.color = "white";
      }

      if (Math.abs(angle) > 65) {
        angle = 0;
      }
    });
  };

  // ** Rendering the Display

  render() {
    return (
      <div className="Ipod">
        <img
          src={Ipod_img}
          style={
            ({
              height: 600,
            },
            {
              width: 600,
            })
          }
        />{" "}
        {/* Rendering Screen Component */}{" "}
        <Screen dispItems={this.state.display} />{" "}
        {/* Rendering Pads Component */}{" "}
        <Pads
          scroll={this.handleScroll}
          mainScr={this.mainScreen}
          optn={this.Click}
        />{" "}
      </div>
    );
  }
}

//Exporting Ipod
export default Ipod;
