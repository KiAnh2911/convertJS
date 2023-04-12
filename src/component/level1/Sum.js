import React, { useState } from "react";

const Sum = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [sum, setSum] = useState(0);

  function handleValueNum1(e) {
    setNum1(e.target.value);
  }

  function handleValueNum2(e) {
    setNum2(e.target.value);
  }

  function handleSum() {
    setSum(parseInt(num1) + parseInt(num2));
  }

  return (
    <div>
      <h2>Bài 1.1</h2>
      <input type="text" placeholder="số thứ 1" onChange={handleValueNum1} />
      <input type="text" placeholder="số thứ 2" onChange={handleValueNum2} />
      <button onClick={handleSum}>Sum</button>
      <p className="inline-block">
        Tổng 2 số là :<span className="font-medium text-lg"> {sum}</span>
      </p>
    </div>
  );
};

export default Sum;
