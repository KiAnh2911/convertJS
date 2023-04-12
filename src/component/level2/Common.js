import React, { useState } from "react";

const Common = () => {
  const [str, setStr] = useState();
  const [str1, setStr1] = useState();
  const [arr, setArr] = useState();
  const handleValue1 = (e) => {
    setStr(e.target.value);
  };
  const handleValue2 = (e) => {
    setStr1(e.target.value);
  };
  const handleCommon = () => {
    let maxLength = 0;
    let endIndex = 0;

    // Tạo ma trận với kích thước bằng độ dài hai chuỗi cộng thêm 1
    const matrix = Array(str.length + 1)
      .fill(null)
      .map(() => Array(str1.length + 1).fill(null));

    // Điền giá trị cho hàng và cột đầu tiên bằng 0
    for (let i = 0; i <= str.length; i++) {
      matrix[i][0] = 0;
    }
    for (let j = 0; j <= str1.length; j++) {
      matrix[0][j] = 0;
    }

    // Xác định độ dài chuỗi con chung và vị trí cuối cùng của nó
    for (let i = 1; i <= str.length; i++) {
      for (let j = 1; j <= str1.length; j++) {
        if (str[i - 1] === str1[j - 1]) {
          matrix[i][j] = matrix[i - 1][j - 1] + 1;
          if (matrix[i][j] > maxLength) {
            maxLength = matrix[i][j];
            endIndex = i;
          }
        } else {
          matrix[i][j] = 0;
        }
      }
    }

    // Lấy chuỗi con chung dài nhất từ hai chuỗi nhập vào
    setArr(str.slice(endIndex - maxLength, endIndex));
  };

  return (
    <div>
      <h2>Bài 2.3</h2>
      <input
        type="text"
        placeholder="Nhập chuỗi thứ 1"
        onChange={handleValue1}
      />
      <input
        type="text"
        placeholder="Nhập chuỗi thứ 2"
        onChange={handleValue2}
      />
      <button onClick={handleCommon}>Common</button>
      <p className="inline-block">
        Dãy con chung dài nhất trong mảng là :
        <span className="text-lg font-medium"> {arr}</span>
      </p>
    </div>
  );
};

export default Common;
