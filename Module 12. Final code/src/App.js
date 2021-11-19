/* eslint-disable no-unused-vars */
import React, { useState, useCallback, useMemo } from "react";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";
import DemoList from "./components/Demo/DemoList";

// function App() {
//   const [showParagraph, setShowParagraph] = useState(false);
//   const [allowToggle, setAllowToggle] = useState(false);

//   console.log("App running");
//   const toggleParagraphHandler = useCallback(() => {
//     if (allowToggle) {
//       setShowParagraph((prevShowParagraph) => !prevShowParagraph);
//     }
//   }, [allowToggle]);

//   const allowToggleHandler = () => {
//     setAllowToggle(true);
//   };

//   return (
//     <div className="app">
//       <h1>Hi there!</h1>
//       <DemoOutput show={showParagraph} />
//       <Button onClick={allowToggleHandler}>Allow Toggling</Button>
//       <Button onClick={toggleParagraphHandler}>Show paragraph</Button>
//     </div>
//   );
// }
function App() {
  const [listTitle, setListTitle] = useState("My List");

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change list Title</Button>
    </div>
  );
}

export default App;
