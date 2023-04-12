import React, { useState } from "react";

const Maxium = () => {
  const [num, setNum] = useState();
  const [arr, setArr] = useState();
  const handleValue = (e) => {
    setArr(e.target.value);
  };
  const handleMaxium = () => {
    let arrMaxium = arr.split(",");
    let maxSoFar = parseInt(arrMaxium[0]);
    let maxEndingHere = parseInt(arrMaxium[0]);
    for (let i = 0; i < arrMaxium.length; i++) {
      maxEndingHere = Math.max(
        parseInt(arrMaxium[i]),
        maxEndingHere + parseInt(arrMaxium[i])
      );
      maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    setNum(maxSoFar);
  };
  return (
    <div>
      <h2>Bài 2.5</h2>
      <input
        type="text"
        placeholder="Nhập vào 1 danh sách số"
        onChange={handleValue}
      />
      <button onClick={handleMaxium}>Maxium</button>
      <p className="inline-block">
        Tổng lớn nhất của bất kỳ mảng con nào trong danh sáchlà :
        <span className="text-lg font-medium"> {num}</span>
      </p>
    </div>
  );
};

export default Maxium;
