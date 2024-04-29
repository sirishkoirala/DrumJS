const buttons = document.querySelectorAll(".btn");
const textarea = document.querySelector("textarea");
const capslock_btn = document.querySelector(".capslock");
const delete_btn = document.querySelector(".backspace");
const shift_btn = document.querySelectorAll(".shift");
// console.log(shift_btn);


const space_btn = document.querySelector(".space");
window.addEventListener("keydown", fn);
function fn(ele) {
   // const keys = ele.keyCode;
   // console.log(keys);
   const key = document.querySelector(`button[keyCode="${ele.keyCode}"]`);
   key.classList.add("clickedRed");
}

window.addEventListener("keyup", fn2);
function fn2(ele) {
   const key = document.querySelector(`button[keyCode="${ele.keyCode}"]`);
   key.classList.remove("clickedRed");
}

window.addEventListener("keydown", forShiftDown);
function forShiftDown(ele) {
   if (ele.keyCode === 16) {
      buttons.forEach((btn) => {
         btn.classList.add("upper");
      });
      shift_btn.forEach((shift) => {
         shift.classList.add("clickedRed");
      });
   }
}
window.addEventListener("keyup", forShiftUp);
function forShiftUp(ele) {
   if (ele.keyCode === 16) {
      // shift_btn.classList.remove("clickedRed");
      buttons.forEach((btn) => {
         btn.classList.remove("upper");
      });
      shift_btn.forEach((shift) => {
         shift.classList.remove("clickedRed");
      });
   }
}

let chars = [];

buttons.forEach((btn) => {
   btn.addEventListener("click", () => {
      textarea.value += btn.innerText;
      chars = textarea.value.split("");
   });
});

delete_btn.addEventListener("click", () => {
   chars.pop();
   textarea.value = chars.join("");
});

space_btn.addEventListener("click", () => {
   chars.push(" ");
   textarea.value = chars.join("");
});

// shift_btn.addEventListener("click", () => {
//    buttons.forEach((btn) => {
//       btn.classList.toggle("upper");
//    });
// });

window.addEventListener("keydown", forCaps);
function forCaps(ele) {
   if (ele.keyCode === 20) {
      buttons.forEach((btn) => {
         btn.classList.toggle("upper");
      });
   }
}