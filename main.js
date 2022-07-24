let like = document.getElementById("ratingLike");
let unLike = document.getElementById("ratingUnLike");
const handleRating = (rate) => {
  if (rate == "like") {
    like.innerText = Number(like.innerText) + 1;
  }
  if (rate == "unLike") {
    unLike.innerText = Number(unLike.innerText) + 1;
  }
};
addEventListener("click", handleRating());

const handleTable = () => {
  let txtRows = document.getElementById("txtRows").value;
  let txtColumns = document.getElementById("txtColumns").value;
  let table = document.getElementById("table");
  let temp = "<table>";
  for (let i = 1; i <= txtColumns; i++) {
    temp += `<tr>`;
    for (let j = 1; j <= txtRows; j++) {
      temp += `<td>${ txtColumns}</td>`;
    }
    temp += `</tr>`;
  }
  temp += "</table>";
  table.innerHTML = temp;
};
const handleTableMulti = () => {
  let txtRowsMulti = document.getElementById("txtRowsMulti").value;
  let txtColumnsMulti = document.getElementById("txtColumnsMulti").value;
  let tableMulti = document.getElementById("tableMulti");
  let temp = "<table>";
  for (let i = 1; i <= txtColumnsMulti; i++) {
    temp += `<tr>`;
    for (let j = 1; j <= txtRowsMulti; j++) {
      temp += `<td>${ i*j}</td>`;
    }
    temp += `</tr>`;
  }
  temp += "</table>";
  tableMulti.innerHTML = temp;
};
let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
const face = () => {
  context.fillStyle = "yellow";
  context.strokeStyle = "black";
  context.lineWidth = 5;
  context.beginPath();
  context.arc(320, 240, 200, 0, 2 * Math.PI);
  context.fill();
  context.stroke();
  context.closePath();

  context.fillStyle = "black";
  context.beginPath();
  context.arc(270, 175, 30, 0, 2 * Math.PI);
  context.fill();
  context.stroke();
  context.closePath();

  context.beginPath();
  context.arc(370, 175, 30, 0, 2 * Math.PI);
  context.fill();
  context.stroke();
  context.closePath();
};
face();


const handleHappyFace = () => {
  btn1.style.backgroundColor="red";
  btn2.style.backgroundColor="white";
  context.clearRect(0, 0, canvas.width, canvas.height);
  face();
  context.closePath();
  context.strokeStyle = "red";
  context.lineWidth = 5;
  context.beginPath();
  context.arc(320, 250, 120, 0, -1 * Math.PI);
  context.stroke();
  context.closePath();
};
const handleSadFace = () => {
  btn1.style.backgroundColor="white";
  btn2.style.backgroundColor="red";
  context.clearRect(0, 0, canvas.width, canvas.height);
  face();
  context.closePath();
  context.strokeStyle = "red";
  context.lineWidth = 5;
  context.beginPath();
  context.arc(320, 350, 120, 0, -1 * Math.PI, true);
  context.stroke();
  context.closePath();
};
addEventListener("click", handleTable());