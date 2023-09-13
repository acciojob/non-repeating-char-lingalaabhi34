function firstNonRepeatedChar(str) {
 // Write your code here
	 let obj={};
        for(let i=0;i<arr.length;i++){
            if(obj[arr[i]]!= undefined){
                obj[arr[i]] +=1;
            }
            else{
                obj[arr[i]]=1;
            }
        }
        for(let i=0;i<arr.length;i++){
            if(obj[arr[i]]==1){
                return arr[i];
            }
        }
      return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
