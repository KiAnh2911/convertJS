import React, { useState } from "react";

const TheLargest = () => {
  const [num, setNum] = useState(0);
  const [maxNumber, setMaxNumber] = useState(0);
  const handleOnchangeValue = (e) => {
    const number = e.target.value.split(",").map((number) => {
      return parseInt(number);
    });
    setNum(Math.max(...number));
  };
  const handleTheLargestNumber = () => {
    setMaxNumber(num);
  };
  return (
    <div>
      <h2>Bài 1.4</h2>
      <input
        type="text"
        placeholder="nhập vào 1 mảng number ..."
        onChange={handleOnchangeValue}
      />
      <button onClick={handleTheLargestNumber}>The Largest Number</button>
      <p>
        Số lớn nhất trong mảng là : <span>{maxNumber}</span>
      </p>
    </div>
  );
};

export default TheLargest;
