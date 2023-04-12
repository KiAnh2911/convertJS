import React, { useState } from "react";

function sortMedian(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  const mid = Math.floor(arr.length / 2);

  if (arr.length % 2 === 0) {
    return (parseInt(arr[mid]) + parseInt(arr[mid - 1])) / 2;
  } else {
    return arr[mid];
  }
}

const Median = () => {
  const [num, setNum] = useState();
  const [median, setMedian] = useState();

  const handleMedian = () => {
    let arr = median.split(",");
    let medianN = sortMedian(arr);
    console.log("handleMedian ~ medianN:", medianN);
    setNum(medianN);
  };

  const handleValue = (e) => {
    setMedian(e.target.value);
  };
  return (
    <div>
      <h2>Bài 1.8</h2>
      <input
        type="text"
        placeholder="nhập vào 1 mảng number ..."
        onChange={handleValue}
      />
      <button onClick={handleMedian}> Median </button>
      <p className="inline-block">
        Trung vị của mảng là : <span>{num}</span>
      </p>
    </div>
  );
};

export default Median;
