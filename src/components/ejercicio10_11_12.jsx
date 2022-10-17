import React, { useState } from "react";

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
    return hexColor;
  };

  const showRandomColor = () => {
    setBackGround(getRandomColor);
  };
  const showInitialColor = () => {
    setBackGround("black");
  };
  const stopRandonize = () => {
    console.log("stop randonize");
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
