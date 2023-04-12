import React, { useState } from "react";

const Words = () => {
  const [length, setLength] = useState();
  const [str, setStr] = useState();
  const handleValue = (e) => {
    setStr(e.target.value);
  };
  const handleWords = () => {
    let num = str.split(" ");
    setLength(num.length);
  };
  return (
    <div>
      <h2>Bài 1.9</h2>
      <input
        type="text"
        placeholder="nhập vào 1 chuỗi "
        onChange={handleValue}
      />
      <button onClick={handleWords}>Words</button>
      <p className="inline-block">
        Số từ trong chuỗi là :
        <span className="text-lg font-semibold">{length}</span>
      </p>
    </div>
  );
};

export default Words;
