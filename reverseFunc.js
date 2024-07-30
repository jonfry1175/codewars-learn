function spinWords(string) {
    // Split the string into an array of words
    const words = string.split(' ');

    // Loop through each word in the array
    const result = words.map((word) => {
      // If the length of the word is greater than 4, reverse it
      if (word.length > 4) {
        return word.split('').reverse().join('');
      } else {
        // Otherwise, return the original word
        return word;
      }
    })

    // Join the array back into a string and return it
    return result.join(' ');
  }
  
  // Test cases
  console.log(spinWords("Hey fellow warriors"));  // Output: "Hey wollef sroirraw"
  console.log(spinWords("This is a test"));       // Output: "This is a test"
  console.log(spinWords("This is another test")); // Output: "This is rehtona test"
  