function stringChop(str, chunkLength) {
  if (str === null || chunkLength <= 0) return [];

  let result = [];
  for (let i = 0; i < str.length; i += chunkLength) {
    result.push(str.substring(i, i + chunkLength));
  }
  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."));
alert(stringChop(str, size));
