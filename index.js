const subitBtn = document.querySelector("#submitBtn");
const question = document.querySelector("#question");
const bob = document.querySelector("#bob-ross");

let magicBallResponse = () => {
  let randomNumber = Math.floor(Math.random() * 8);
  switch (randomNumber) {
    case 0:
      eightBall = "It is certain";
      break;
    case 1:
      eightBall = "It is decidedly so";
      break;
    case 2:
      eightBall = "Reply hazy try again";
      break;
    case 3:
      eightBall = "Cannot predict now";
      break;
    case 4:
      eightBall = "Do not count on it";
      break;
    case 5:
      eightBall = "My sources say no";
      break;
    case 6:
      eightBall = "Outlook not so good";
      break;
    case 7:
      eightBall = "Signs point to yes";
      break;
  }
  return eightBall;
};

let getResponse = (e) => {
  e.preventDefault();

  let response = document.createElement("h1");
  response.className = "align-response";
  response.textContent = `Magic Eight Ball Says: ${magicBallResponse()}`;
  document.body.appendChild(response);
  setTimeout(() => {
    question.value = "";
    response.remove();
  }, 3000);
};
subitBtn.addEventListener("click", getResponse);

let getBobb = () => {
  let bobResponse = document.createElement("h1");
  bobResponse.className = "align-response";
  bobResponse.textContent = "Bob says YOU matter";
  document.body.appendChild(bobResponse);
  setTimeout(() => {
    question.value = "";
    bobResponse.remove();
  }, 3000);
};
bob.addEventListener("click", getBobb);
