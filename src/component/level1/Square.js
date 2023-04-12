import React, { useState } from "react";

const Square = () => {
  const [num, setNum] = useState(0);
  const [result, setResult] = useState();
  const handleValue = (e) => {
    setNum(e.target.value);
  };
  const handleSquare = () => {
    setResult(num ** 2);
  };
  return (
    <div>
      <h2>Bài 1.3</h2>
      <input
        type="number"
        placeholder="nhập số bất kì ..."
        onChange={handleValue}
      />
      <button onClick={handleSquare}>Square</button>
      <p className="inline-block">
        Hình vuông của {num} là : {result}
      </p>
    </div>
  );
};

export default Square;
