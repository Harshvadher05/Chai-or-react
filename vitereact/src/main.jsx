import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>my chai ?</h1>
    </div>
  );
}

//syntex of an object for custom render
const ReactElement = {
  //tree structure
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click me to visit google",
};

const anotherUser = " hello chai"

//syntex for react to render element
//injected by babel
const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click me to visit google",
  anotherUser
);

createRoot(document.getElementById("root")).render(
  // <App />
  // MyApp()
  // <ReactElement />
  reactElement
);
