import React, { useState } from "react";

const LengthString = () => {
  const [str, setStr] = useState("");
  const [length, setLength] = useState(0);
  function handleValue(e) {
    setStr(e.target.value);
  }
  function handleLengthString(e) {
    setLength(str.length);
    console.log("handleLengthString ~ setLength:", setLength);
  }
  return (
    <div>
      <h2>Bài 1.2</h2>
      <input type="text" placeholder="chuỗi string" onChange={handleValue} />
      <button onClick={handleLengthString}>LengthString</button>
      <p className="inline-block">
        Độ dài của chuỗi là :
        <span className="text-lg font-semibold">{length}</span>
      </p>
    </div>
  );
};

export default LengthString;
