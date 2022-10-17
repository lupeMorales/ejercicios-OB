import React, { useState } from "react";
let intervalColor;

const Square = () => {
  const [backGround, setBackGround] = useState("black");

  const styleSquare = {
    width: "255px",
    height: "255px",
    backgroundColor: backGround,
  };
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
  const getRandomNumber = () => {
    return Math.floor(Math.random() * hex.length);
  };
  const getRandomColor = () => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[getRandomNumber()];
    }
    console.log(hexColor);
    return setBackGround(hexColor);
  };

  const showRandomColor = () => {
    intervalColor = setInterval(getRandomColor, 1000);
  };
  const showInitialColor = () => {
    setBackGround("black");
    clearInterval(intervalColor);
  };
  const stopRandonize = () => {
    clearInterval(intervalColor);
  };
  return (
    <div
      style={styleSquare}
      onMouseEnter={showRandomColor}
      onMouseLeave={stopRandonize}
      onDoubleClick={showInitialColor}
    ></div>
  );
};

export default Square;
