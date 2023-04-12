import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LengthString, Square, Sum } from "./component/level1";
import NotFoundPage from "./pages/NotFoundPage";
import TheLargest from "./component/level1/TheLargest";
import TheShortest from "./component/level1/TheShortest";
import Sort from "./component/level1/Sort";
import Alphabetical from "./component/level1/Alphabetical ";
import Median from "./component/level1/Median";
import Words from "./component/level1/Words";
import Contain from "./component/level1/contain";
import Second from "./component/level2/Second";
import Longest from "./component/level2/Longest";
import Common from "./component/level2/Common";
import Divisible from "./component/level2/Divisible";
import Maxium from "./component/level2/Maxium";

// const router = createBrowserRouter([
//   { path: "/", element: <App /> },
//   {
//     path: "/level-1",
//     element: <Level1></Level1>,
//     children: [
//       { path: "/sum", element: <Sum></Sum> },
//       { path: "/lengthString", element: <LengthString></LengthString> },
//     ],
//   },
// ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/sum" element={<Sum />}></Route>
          <Route path="/length" element={<LengthString />} />
          <Route path="/square" element={<Square />} />
          <Route path="/largest-number" element={<TheLargest />} />
          <Route path="/shortest" element={<TheShortest />} />
          <Route path="/sort" element={<Sort />} />
          <Route path="/alphabetical" element={<Alphabetical />} />
          <Route path="/median" element={<Median />} />
          <Route path="/word" element={<Words />} />
          <Route path="/contain" element={<Contain />} />
          <Route path="/second" element={<Second />} />
          <Route path="/longest" element={<Longest />} />
          <Route path="/common" element={<Common />} />
          <Route path="/divisible" element={<Divisible />} />
          <Route path="/maxium" element={<Maxium />} />
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
