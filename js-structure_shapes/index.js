console.clear();

import Circle from "./components/Circle/circle.js";
import Square from "./components/Square/square.js";
import pentagon from "./components/Pentagon/pentagon.js";

const root = document.getElementById("root");

const circleElement = Circle();

root.append(circleElement);

const squareElement = Square();

root.append(squareElement);

const pentagonElement = pentagon();

root.append(pentagonElement);
