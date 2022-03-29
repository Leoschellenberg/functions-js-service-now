function groupRiscos(arr, max){
	var novoArray = []
	
	for (var i = 0; i < arr.length; i = i + max) {
		novoArray.push(arr.slice(i, i + max));
	}
	return novoArray;
}
