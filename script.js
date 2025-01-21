function stringChop(str,chunkLength) {
  // your code here
 if (!str) {
    return [];
	 
  }

  // Initialize an empty array to store the chunks
  let result = [];

  // Loop through the string in steps of chunkLength
  for (let i = 0; i < str.length; i += chunkLength) {
    // Slice the string from i to i + chunkLength and add it to the result array
    result.push(str.slice(i, i + chunkLength));
  }

  return result;
}

//Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));




