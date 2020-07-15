window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = true;
const leftPage = document.querySelector(".page.left-page");
const rightPage = document.querySelector(".page.right-page");
recognition.addEventListener("result", (event) => {
  const message = document.createElement("p");
  message.innerText = event.results[0][0].transcript;
  leftPage.appendChild(message);
  //   console.log(event.results[0][0].transcript);
});

recognition.addEventListener("end", recognition.start);
recognition.start();
