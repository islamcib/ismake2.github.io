
let randomColor = "#";
 
makeRandomColor = () => {

  const colorValues = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
    for (let x = 0; x < 6; x++) {
    let index = Math.floor(Math.random() * 16);
    let randomValue = colorValues[index];
    randomColor += randomValue;
       }

  return randomColor;
};

makeColorCard = () => {
  makeRandomColor();
  let hexNum = (document.getElementById("hexNum").innerHTML = randomColor);
  let displayColor = document.getElementById("displayColor");
  displayColor.style.backgroundColor = randomColor;
};

makeColorCard();


changeColor = () => {
  randomColor = "#";
  makeColorCard();
};

document.addEventListener("keyup", (event) => {
  if (event.code === "Space") {
    randomColor = "#";
    makeColorCard();
  }
});


copyCode = () => { navigator.clipboard.writeText(randomColor);
};
