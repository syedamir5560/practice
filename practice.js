let arr = [1,3,4,5,12,1,2,3]; 

function removeDuplicates(arr) { 
	let unique = []; 
	for (i = 0; i < arr.length; i++) { 
		if (unique.indexOf(arr[i]) === -1) { 
			unique.push(arr[i]); 
		} 
	} 
	return unique; 
} 
console.log(removeDuplicates(arr));
