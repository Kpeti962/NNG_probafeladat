import React, { useState } from "react";

const Chair = ({ chair, index, lineIndex }) => {
  const { name, reserved, price, id } = chair;

  const setColor = () => {
    let color;
    switch (price) {
      case 5000:
        color = "price5000";
        break;
      case 4000:
        color = "price4000";
        break;
      case 3000:
        color = "price3000";
        break;
      case 2000:
        color = "price2000";
        break;
      default: color = "";
        break;
    };
    return color;
  };

  return <li style={{ backgroundColor: reserved ? 'gray' : '' }} className={`chair ${setColor()}`}>{index + 1}</li>;
};

export default Chair;
