import React, { useState } from "react";

function sortArray(numbers) {
  let sortedNumbers = numbers.sort((a, b) => a - b);
  return sortedNumbers;
}
const Sort = () => {
  const [num, setNum] = useState();
  const [sortNum, setSortNum] = useState();

  const handleValue = (e) => {
    setNum(e.target.value.split(",").map((number) => number));
  };
  const handleSort = () => {
    console.log(num);
    let sortNumbers = sortArray(num);
    setSortNum(sortNumbers.join("-"));
  };
  return (
    <div>
      <h2>Bài 1.6</h2>
      <input
        type="text"
        placeholder="nhập vào 1 mảng number ..."
        onChange={handleValue}
      />
      <button onClick={handleSort}> Sort</button>
      <p>
        Sắp xếp mảng theo tăng dần : <span>{sortNum}</span>
      </p>
    </div>
  );
};

export default Sort;
