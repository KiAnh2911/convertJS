import React, { useState } from "react";

function containStr(arr) {
  let a = arr.filter((str) => {
    return str.indexOf("a") !== -1;
  });
  return a.length;
}
const Contain = () => {
  const [length, setLength] = useState();
  const [str, setStr] = useState();
  const handleValue = (e) => {
    setStr(e.target.value);
  };
  const handleContain = () => {
    let arr = str.split(",");
    const containNum = containStr(arr);
    setLength(containNum);
  };
  return (
    <div>
      <h2>Bài 1.10</h2>
      <input
        type="text"
        placeholder="nhập vào 1 chuỗi "
        onChange={handleValue}
      />
      <button onClick={handleContain}>Contain</button>
      <p className="inline-block">
        Số chuỗi có kí tự 'a' trong danh sách là :
        <span className="text-lg font-semibold">{length}</span>
      </p>
    </div>
  );
};

export default Contain;
