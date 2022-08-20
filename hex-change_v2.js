//TASK: Changing background colours everytime click button  - dont pick specific colour but randomly generated
//hexcolour digits in one array
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let btn = document.getElementById("btn");
let totalSurprise =
  document.getElementById("colorSurprise").style.backgroundColor;
let colorMe = document.getElementById("colorMe").innerHTML;

function colorChanger() {
  btn.addEventListener("click", () => {
    let prefixHash = "#";

    //Loop through array 6 times hex length. Add hash symbol + 6 digits together
    for (let i = 0; i < 6; i++) {
      prefixHash += hex[Math.floor(Math.random() * hex.length)];
    }

    totalSurprise = prefixHash;
    colorMe = prefixHash;
  });

  colorChanger();

  // let mixer = Math.floor(Math.random() * hex.length);
  // return mixer;
}
