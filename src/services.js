const backendUrl = "http://localhost:8080/api";

export function sendButtonClick(buttonId) {
  fetch(`${backendUrl}/button-click`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ buttonId }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Обработка ответа от сервера
      console.log("Response from server:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
