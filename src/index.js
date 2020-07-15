window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const text = [];
recognition.interimResults = true;
const leftPage = document.querySelector(".page.left-page");
const rightPage = document.querySelector(".page.right-page");
recognition.addEventListener("result", (event) => {
  text.push(event.results[0][0].transcript);
  //console.log(event.results[0][0].transcript);
});

// recognition.addEventListener("end", recognition.start);
recognition.addEventListener("end", (event) => {
  const message = document.createElement("p");
  message.innerText = text.join("");
  leftPage.appendChild(message);
  text.length = 0;
  recognition.start();
});
recognition.start();
