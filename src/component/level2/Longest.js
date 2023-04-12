import React, { useState } from "react";
function TheLongest(arr) {
  let maxLength = 0;
  let longestString = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > maxLength) {
      maxLength = arr[i].length;
      longestString = arr[i];
    }
  }
  return longestString;
}
const Longest = () => {
  const [array, setArray] = useState();
  const [num, setNum] = useState();
  const handleValue = (e) => {
    setArray(e.target.value);
  };
  const handleLongest = () => {
    let arr = array.split(",");
    let num = TheLongest(arr);
    setNum(num);
  };
  return (
    <div>
      <h2>Bài 2.2</h2>
      <input
        type="text"
        placeholder="Nhập vào 1 danh sách số"
        onChange={handleValue}
      />
      <button onClick={handleLongest}>The Longest String</button>
      <p className="inline-block">
        Chuỗi dài nhất trong mảng là :
        <span className="text-lg font-medium"> {num}</span>
      </p>
    </div>
  );
};

export default Longest;
