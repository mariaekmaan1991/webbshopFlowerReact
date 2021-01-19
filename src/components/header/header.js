import { React, useState, useEffect, useContext } from "react";

export function Header() {
  // const cardBackground = {
  //   backgroundImage: `url(${require("../../image/pngfind.com-flower-graphic-png-5486160.png")})`,
  // };

  return (
    <header className="Main-Header">
      <section className="Header-Line-Container">
        <div className="Header-Line-Container-Text">
          <h3> Välkommen till Flower Power!</h3>
        </div>
        <div className="Header-Line-Container-Image">
          <img src={"/annie-spratt-01Wa3tPoQQ8-unsplash.jpg"} alt="profile" />
        </div>
      </section>
    </header>
  );
}
//https://codesandbox.io/s/react-router-nesting-forked-3b6h7?file=/example.js
//https://www.freecodecamp.org/news/react-background-image-tutorial-how-to-set-backgroundimage-with-inline-css-style/
