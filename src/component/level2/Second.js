import React, { useState } from "react";
function secondNumber(arr) {
  let a = arr.sort(function (a, b) {
    return b - a;
  });
  return a[1];
}
const Second = () => {
  const [array, setArray] = useState();
  const [secondNum, setSecondNum] = useState();
  const handleValue = (e) => {
    setArray(e.target.value);
  };
  const handleSecond = () => {
    let arr = array.split(",");
    let num = secondNumber(arr);
    setSecondNum(num);
  };
  return (
    <div>
      <h2>Bài 2.1</h2>
      <input
        type="text"
        placeholder="Nhập vào 1 danh sách số"
        onChange={handleValue}
      />
      <button onClick={handleSecond}>Second</button>
      <p className="inline-block">
        Số lớn thứ 2 trong mảng là :
        <span className="text-lg font-medium"> {secondNum}</span>
      </p>
    </div>
  );
};

export default Second;
