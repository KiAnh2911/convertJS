import React, { useState } from "react";

const Divisible = () => {
  const [divisible, setDivisible] = useState();
  const [num, setNUm] = useState();
  const handleOnchange = (e) => {
    setNUm(e.target.value);
  };
  const handleDivisible = () => {
    let sum = 0;
    let number = num.split(",");
    for (let i = 0; i < number.length; i++) {
      if (parseInt(number[i]) % 3 === 0 && parseInt(number[i]) % 5 === 0) {
        sum += parseInt(number[i]);
      }
    }
    setDivisible(sum);
  };
  return (
    <div>
      <h2>Bài 2.4</h2>
      <input
        type="text"
        placeholder="nhập vào 1 mảng number ..."
        onChange={handleOnchange}
      />
      <button onClick={handleDivisible}>Divisible</button>
      <p className="inline-block">
        Chuỗi có độ dài ngắn nhất là : <span>{divisible}</span>
      </p>
    </div>
  );
};

export default Divisible;
