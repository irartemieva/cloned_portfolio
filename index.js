
// // ------------------------------------------------
// function getNavButtons() {
//   let extendButton = document.getElementsByClassName("navigation")[0];
//   extendButton.classList.toggle("extended");
// }
// // ------------------------------------------------
// function push(event) {
//   // Get id attribute of the box or button or link clicked
//   let id = event.target.id;
//   console.log(id);
//   // Visually select the clicked button/tab/box
//   //select_tab(id);
//   // Update Title in Window's Tab
//   document.title = id;
//   // Load content for this tab/page
//   //load_content(id);
//   // Finally push state change to the address bar
//   window.history.pushState({ id }, `${id}`, `/${id}`);
// }

// window.onload = (event) => {
//   let portfolioBtn = document.getElementById("portfolio");
//   portfolioBtn.addEventListener("click", (event) => push(event));
// };
// // ------------------------------------------------
// function findEvenIndex(arr) {
//   let sumLeft, sumRight, findIndex;
//   for (let i = 0; i < arr.length; i++) {
//     sumRight = 0;
//     sumLeft = 0;

//     for (let m = i - 1; m >= 0; m--) {
//       sumLeft = sumLeft + arr[m];
//     }

//     for (let k = i + 1; k < arr.length; k++) {
//       sumRight = sumRight + arr[k];
//     }

//     if (sumLeft === sumRight) {
//       findIndex = i;
//       return findIndex;
//     }
//   }
//   if (findIndex === undefined) {
//     return -1;
//   }
// }

/*
You are going to be given an array of integers. Your job is to take that array and 
find an index N where the sum of the integers to the left of N is equal to the sum 
of the integers to the right of N. If there is no index that would make this happen, 
return -1.
*/

//findEvenIndex([1, 2, 3, 4, 3, 2, 1]);
// ------------------------------------------------
// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let temp;
//     for (let k = 0; k < arr.length - i - 1; k++) {
//       if (arr[k] > arr[k + 1]) {
//         temp = arr[k];
//         arr[k] = arr[k + 1];
//         arr[k + 1] = temp;
//       }
//       console.log(arr);
//     }
//   }
//   console.log(arr);
// }

// //bubbleSort([6, 5, 8, 1, 9, 3]);
// // ------------------------------------------------
// function selectionSort(arr) {
//   let findIndex, min;
//   for (let i = 0; i < arr.length; i++) {
//     min = arr[i];
//     for (let k = i; k < arr.length; k++) {
//       if (arr[k] < min) {
//         min = arr[k];
//         findIndex = k;
//       }
//     }

//     if (min !== arr[i]) {
//       arr[findIndex] = arr[i];
//       arr[i] = min;
//     }
//   }
//   console.log(arr);
// }
//selectionSort([6, 5, 8, 1, 9, 3]);


// ------------------------------------------------
// Tasks
// -------------------------------------------------

// ------------------------------------------------
//
// const str = 'sdfdf';

// console.log(String.prototype === str.__proto__);

