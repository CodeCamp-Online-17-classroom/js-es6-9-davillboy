// write code here
function cloneArray(arr) {
  return arr.slice();
}

const originalArray = [1, 2, 3, 4, 5];
const clonedArray = cloneArray(originalArray);

console.log(originalArray); 
console.log(clonedArray); 
