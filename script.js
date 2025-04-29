function stringChop(str, size) {
  // your code here
	let counter = 0;
	let arr;
	let str2 = "";
	for(let i =0 ; i<str.length; i++){
		str2.append(str[i])
		if(str[i] == " "){
			arr[counter] = str2;
			counter++;
			str2 = ""
		}
	}
}

// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
// alert(stringChop(str, size));
