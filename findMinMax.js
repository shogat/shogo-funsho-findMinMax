const findMinMax=(myArray)=>{
  let min=myArray[0];
  let max=myArray[0];
  for (let counter=0;counter<myArray.length;counter++){
    if(myArray[counter]<min){
      min=myArray[counter];
    }
    else if(myArray[counter]>max){
     max=myArray[counter];
    }
    }
	let newArray=[min,max];
	if(newArray[0]===newArray[1]){
		newArray=[newArray[0]];
		return newArray;
	}else{
     return newArray;
	 }
  };
  //findMinMax([1, 2, 3, 4]);