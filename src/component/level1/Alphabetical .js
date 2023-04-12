import React, { useState } from "react";

function sortArray(strings) {
  let sortedString = strings.sort();
  return sortedString;
}
const Alphabetical = () => {
  const [string, setString] = useState();
  const [sortString, setSortString] = useState();

  const handleValue = (e) => {
    setString(e.target.value);
  };
  const handleSortABC = () => {
    let arr = string.split(","); // Split the input string into an array
    let sortString = sortArray(arr);
    setSortString(sortString.join(", ")); // Convert the sorted array back to a string
  };
  return (
    <div>
      <h2>Bài 1.7</h2>
      <input
        type="text"
        placeholder="nhập vào 1 mảng string ..."
        onChange={handleValue}
      />
      <button onClick={handleSortABC}> Sort theo bảng chữ cái </button>
      <p className="inline-block">
        Sắp xếp mảng theo bảng chữ cái : <span>{sortString}</span>
      </p>
    </div>
  );
};

export default Alphabetical;
