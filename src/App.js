import React, { useEffect, useState } from "react";
import DGXLogo from "./components/DGXLogo/DGXLogo";
import DGXDropdown from "./components/DGXDropdown/DGXDropdown";
import DGXContainer from "./components/DGXContainer/DGXContainer";
import "./App.css";
import "./fonts/font.css";
import ListCars from "./mock/drop-items.json";

function App() {
  const [result, setResult] = useState("هیچ!");
  const [data, setData] = useState({ key: -1, name: "" });

  useEffect(() => {
    if (ListCars.length > 0) {
      setData(ListCars[0]);
    }
  }, []);

  let list = [
    {
      key: 1,
      name: "کامارو",
    },
    {
      key: 2,
      name: "پاترول",
    },
  ];

  return (
    <div
      id="app"
      className="flex"
      style={{ backgroundImage: 'url("/assets/pixel-arts/pixel-wall.png")' }}
    >
      <DGXContainer className="top">
        <DGXLogo className="flex" />
        <div className="mt">
          {/* <DGXDropdown list={list} setResult={setResult} data={data}/> */}
          <hr />
          <hr />
          <DGXDropdown list={ListCars} setData={setData} data={data} setResult={setResult}/>
        </div>
        <div className="result">{result}</div>
      </DGXContainer>
    </div>
  );
}

export default App;
