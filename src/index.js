"use strict";

import "./style.css";
import _ from "lodash";
// import Icon from "./mmgdg.jpg";
import Data from "./data.xml";
import fnPrint from "./print.js";
import { cube } from "./math.js";

function component() {
    let container = document.createElement("div");
    let button = document.createElement("button");

    let result = cube(10);
    container.innerHTML = _.join(["Hello", "World", "!", `Cube(10) is ${result}`], " ");
    container.classList.add("hello-world");

    button.innerHTML = "Click me";
    button.onclick = fnPrint;
    
    container.appendChild(button);

    return container;
}

console.log(Data);

let div = component();
document.body.appendChild(div);

if (module.hot) {
    module.hot.accept("./print.js", function() {
        console.log("Accepting the updated print module!");
        document.body.removeChild(div);
        document.body.appendChild(component());
    });
}