import React, { useState } from "react";

const TheShortest = () => {
  const [str, setStr] = useState("");
  const [minString, setMinString] = useState(0);
  const handleOnchangeValue = (e) => {
    setStr(e.target.value.split(","));
  };
  const handleTheLargestNumber = () => {
    setMinString(
      str.reduce((pre, cur) =>
        pre.length > cur.length ? pre.length : cur.length
      )
    );
  };
  return (
    <div>
      <h2>Bài 1.5</h2>
      <input
        type="text"
        placeholder="nhập vào 1 mảng chuỗi  ..."
        onChange={handleOnchangeValue}
      />
      <button onClick={handleTheLargestNumber}>The Shortest String</button>
      <p>
        Chuỗi có độ dài ngắn nhất là : <span>{minString}</span>
      </p>
    </div>
  );
};

export default TheShortest;
