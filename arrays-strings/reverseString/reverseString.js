// reverse the characters of a string in place

function reverse(arrayOfChars) {
  // Reverse the input array of characters in place
  let ptr = 0;
  let ptr2 = arrayOfChars.length - 1;

  while (ptr < ptr2) {
    // swap characters starting at first and last
    [arrayOfChars[ptr], arrayOfChars[ptr2]] = [
      arrayOfChars[ptr2],
      arrayOfChars[ptr],
    ];
    ptr++;
    ptr2--;
  }

  return arrayOfChars;
}

module.exports = reverse;
