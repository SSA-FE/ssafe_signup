import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Home from "./Home";
import Header from "./Components/HomePage/Header";

// 새로고침 없이 사용 -> Link
// https://www.daleseo.com/react-router-basic/
// 이거 참고해서 다시 해보쟈

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
