// create the albhabet letters

for (let j = 97; j < 123; j++) {
  let str = String.fromCharCode(j);
  console.log(str);
}


document.body.style.background = `#${Math.floor(
  Math.random() * 0xffffff
).toString(16)}`;


document.designMode = "on"

//

const button = document.querySelector("button");


button.addEventListener("click", () => {
  copy("My name is mohan");
  alert("coopied cliboard");
});
const copy = (text) => navigator.clipboard.(text);