const backendUrl = "https://interview-test.ru/api";

export function sendButtonClick(buttonId) {
  console.log(backendUrl, "backendUrl");
  fetch(`${backendUrl}/button-click`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ buttonId }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Response from server:", data);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
}
