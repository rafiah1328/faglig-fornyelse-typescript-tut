"use strict";
const heading = document.querySelector("#heading");
const changeBtn = document.querySelector("#changeBtn");
console.log("TypeScript is connected!");
if (heading && changeBtn) {
    changeBtn.addEventListener("click", () => {
        heading.textContent = "Welcome to Typescript!";
    });
}
