import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Left from "./Left";
import Right from "./Right";
function App() {
  let [cardlist, setCardlist] = useState([]);
  return (
    <div className="App">
      <Header />
      <h1 id="heading">FEEDBACK FORM</h1>
      <div id="main">
        <Left setCardlist={setCardlist} />
        <Right cardlist={cardlist} />
      </div>
    </div>
  );
}

export default App;
