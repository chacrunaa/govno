import React, { useState } from "react";

import "./App.css";
import { Shitting } from "./Shitting";

function App() {
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(!isClick);
  };

  return (
    <div className="app">
      <span className="title"> тут мое приложение и оно работает.</span>
      <button className="btn" onClick={handleClick}/>
      <aside className="aside"></aside>
      <Shitting />
      <div>
        <>
          {isClick ? (
            <div className="zopa">Привет!</div>
          ) : (
            <div className="zopaa">Иди нахуй</div>
          )}
        </>
      </div>
    </div>
  );
}

export default App;
