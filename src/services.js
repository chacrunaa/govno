const backendUrl = "https://interview-test.ru/api";

export async function sendButtonClick(buttonId) {
  const res = await fetch(`${backendUrl}/button-click`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ buttonId }),
  });

  return res.json();

  // .catch((error) => {
  //   console.error("Error:", error.message);
  // });
}
