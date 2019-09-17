// Write a function that merges two sorted arrays
// O(n) time O(n) space

function mergeArrays(myArray, yourArray) {
  // Combine the sorted arrays into one large sorted array
  // compare both arrays at index
  let myHead = 0;
  let yourHead = 0;
  // push smaller one into the array first
  const mergedArray = [];

  for (let i = 0; i < myArray.length + yourArray.length; i++) {
    const myArrayEmpty = myHead >= myArray.length;
    const yourArrayEmpty = yourHead >= yourArray.length;

    if (
      !myArrayEmpty &&
      (yourArrayEmpty || myArray[myHead] <= yourArray[yourHead])
    ) {
      mergedArray.push(myArray[myHead]);
      myHead++;
    } else {
      mergedArray.push(yourArray[yourHead]);
      yourHead++;
    }
  }

  return mergedArray;
}
module.exports = mergeArrays;
