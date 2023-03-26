import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Text from "./components/Text";
import NotFound from "./components/404page";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  let [mode, SetMode] = useState("light");
  let toggleMode = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "#000000cf";
      document.body.style.color = "white";
      document.getElementById("MyNavBar").style.backgroundColor = "black";

      document.getElementById("TitleNavBar").style.color = "white";

      SetMode("dark");
    } else {
      SetMode("light");
      document.body.style.backgroundColor = "#CDEEFF";
      document.body.style.color = "black";
      document.getElementById("MyNavBar").style.backgroundColor =
        "rgb(0 170 255)";
      document.getElementById("TitleNavBar").style.color = "blue";
    }
  };
  return (
    <>
      <BrowserRouter>
        <NavBar mode={mode} logo="TextAbhi" toggleMode={toggleMode} />

        <Routes>
          <Route path="/" element={<Text mode={mode}></Text>}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
