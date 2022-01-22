import React from "react";
import { loadableP5 as P5Wrapper } from "./loadable";
import Sketch from "../Sketch";

const P5 = () => {
  return <P5Wrapper sketch={Sketch} />;
};

export default P5;
