import React from "react";
import logo from "./logo.svg";

const AboutDeveloper = () => {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>About</h1>
      <hr />
      <ul>
        <h2>
          This React Resume application is capable of creating & downloading the
          resume.
        </h2>
      </ul>
    </div>
  );
};

export default AboutDeveloper;
