import React, { useState } from "react";

import "./App.css";
import { Shitting } from "./Shitting";
import { sendButtonClick } from "./services";

function App() {
  const [data, setData] = useState();

  const handleClick = async (id) => {
    try {
      const response = await sendButtonClick(id);
      console.log(response, "responsee");

      setData(response);
    } catch (e) {
      console.log(e, "error");
    }
  };

  return (
    <div className="app">
      <div className="wrapper">
        <span className="title"> тут мое приложение и оно работает.</span>
        <div className="hueta">
          <input
            className="btn"
            type="button"
            onClick={() => handleClick(1)}
            value="нажимаешь"
          />
          <input
            className="btn"
            type="button"
            onClick={() => handleClick(2)}
            value="НАЖИМАЕШЬ НАХУЙ"
          />
        </div>
        {data !== undefined && (
          <>
            {data.flag ? (
              <>
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: "blue",
                  }}
                >
                  ТЫ ПОЛУЧИЛ TRUE
                </div>
              </>
            ) : (
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  backgroundColor: "gray",
                }}
              >
                ТЫ ПОЛУЧИЛ FALSE
              </div>
            )}
          </>
        )}
      </div>
      <Shitting />
    </div>
  );
}

export default App;
