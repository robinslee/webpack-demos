"use strict";

/*
function getComponent() {
    return import("lodash").then(_ => {
        let container = document.createElement("div");
        container.innerHTML = _.join(["Hello", "World"], " ");
        return container;
    }).catch(e => "An error occured while loading the component");
}

getComponent().then(container => {
    document.body.appendChild(container);
});
*/

async function getComponent() {
    let container = document.createElement("div");
    const _ = await import(/* webpackChunkName: "lodash" */ "lodash");
    container.innerHTML = _.join(["Hello", "World"], " ");

    let button = document.createElement("button");
    button.innerHTML = "Click me";
    button.onclick = e => import(/* webpackChunkName: "print" */ "./print").then(module => {
        var fnPrint = module.default;
        fnPrint();
    });
    container.appendChild(button);
    return container;
}

(async function() {
    let div = await getComponent();
    document.body.appendChild(div);
})();
