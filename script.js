function firstNonRepeatedChar(str) {
 // Write your code here
	let obj={};
	for(let i=0;i<str.length;i++){
		if(obj[str[i]] !== undefined){
			obj[str[i]] +=1;
		}
		else{
			obj[str[i]]=1;
		}
	}
	for(let i=0;i<str.length;i++){
		if(obj[str[i]] == 1){
			return str[i];
		}
	}
	return null;
}
let str=prompt("enter the string");
let result=firstNonRepeatedChar(str);
if(result !== null){
    alert(`'${result}'`);
}
else{
    alert("null");
}