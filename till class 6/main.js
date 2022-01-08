/* 
children
childNodes
parentNode
parentElement
childElementCount
nextsibling
firstChild
lastChild
lastElementChild
*/

let i = 1;

const countUp = () => {
  counterNumber.innerText = i;
  i = i + 1;
};

const countDown = () => {
  counterNumber.innerText = i;
  i = i - 1;
};

const counter = document.querySelector("#counter");

let plusBtn = counter.firstElementChild;
console.log(plusBtn);
plusBtn.style.backgroundColor = "blue";
plusBtn.style.color = "#fff";
plusBtn.style.margin = "10px";
plusBtn.style.fontSize = "20px";
plusBtn.style.padding = "10px";
plusBtn.style.cursor = "pointer";

let minusBtn = counter.lastElementChild;
console.log(minusBtn);
minusBtn.style.backgroundColor = "red";
minusBtn.style.color = "#fff";
minusBtn.style.margin = "10px";
minusBtn.style.fontSize = "20px";
minusBtn.style.padding = "10px";
minusBtn.style.cursor = "pointer";

const counterNumber = plusBtn.nextElementSibling;

plusBtn.addEventListener("click", countUp);
minusBtn.addEventListener("click", countDown);

// const count = () => {
//   const counterDiv = document.querySelector("#counter");
//   console.log(counterDiv.firstElementChild);
// const getH1 = counterDiv.children;
// const getSpan = getH1[0].children;
// getSpan[0].innerText = i;
// console.log(getSpan);
// getSpan[0].innerText = i;
// i += 1;
// };
