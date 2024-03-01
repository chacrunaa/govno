import React, { useState }  from "react"; 

export function Shitting() {
  const [govnoData, setGovnoData] = useState([]);

  const getGovno = () => {
    setGovnoData((prev) => [...(prev + 1)]);
  };

  return (
    <div style={{ display: "flex" }}>
      <span>Получить говно -</span>

      <button te onClick={getGovno} />

      <div>
        {govnoData.map(() => (
          <>
            <img
              style={{ height: "50px", width: "50px" }}
              src="https://images.izi.ua/50539607"
            />
          </>
        ))}
      </div>
    </div>
  );
}
