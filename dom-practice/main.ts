const heading = document.querySelector<HTMLHeadingElement>("#heading");

const changeBtn = document.querySelector<HTMLButtonElement>("#changeBtn");

console.log("TypeScript is connected!");

if (heading && changeBtn) {
    changeBtn.addEventListener("click", () => {
        heading.textContent = "Welcome to Typescript!";
    });

}
