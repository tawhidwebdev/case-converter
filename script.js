let input = document.querySelector(".inputbox");
let btn1  = document.querySelector(".btn1");
let btn2  = document.querySelector(".btn2");
let btn3  = document.querySelector(".btn3");
let emty = document.querySelector(".emty")

btn1.addEventListener("click",function () {
  emty.innerHTML = input.value.toUpperCase()
})
btn2.addEventListener("click",function () {
  emty.innerHTML = input.value.toLowerCase()
})
btn3.addEventListener("click",function () {
  emty.innerHTML = "";
  input.value = "";
})

