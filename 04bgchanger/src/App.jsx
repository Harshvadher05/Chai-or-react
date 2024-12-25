import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");
  const [tColor, setTColor] = useState("white");

  return (
    <div
      className="w-full flex items-center justify-center h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <h1 style={{ fontSize: "3rem", color: tColor, fontWeight: "600" }}>
        Chai pio or biscuit khao
      </h1>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => {
              setColor("red");
              if (tColor == "black") setTColor("white");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => {
              setColor("green");
              if (tColor == "black") setTColor("white");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => {
              setColor("blue");
              if (tColor == "black") setTColor("white");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => {
              setColor("yellow");
              if (tColor == "white") setTColor("black");
            }}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => {
              setColor("orange");
              if (tColor == "black") setTColor("white");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
          <button
            onClick={() => {
              setColor("white");
              if (tColor == "white") setTColor("black");
            }}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "white" }}
          >
            White
          </button>
          <button
            onClick={() => {
              setColor("gray");
              if (tColor == "white") setTColor("black");
            }}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>
          <button
            onClick={() => {
              setColor("pink");
              if (tColor == "white") setTColor("black");
            }}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => {
              setColor("purple");
              if (tColor == "black") setTColor("white");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
          <button
            onClick={() => {
              setColor("black");
              if (tColor == "black") setTColor("white");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
