"use strict";

export default function fnPrint(text = "This is printed from module print.js.") {
    console.log(`${text}${Date.now()}`);
    // consl.log("This is a error to test source-map!");
};