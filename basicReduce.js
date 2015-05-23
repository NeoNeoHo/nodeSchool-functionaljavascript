function countWords(inputWords) {
	var result = inputWords.reduce(function(result, inputWord){
		result[inputWord] = ++result[inputWord] || 1;
		return result;
	}, {});
	return result;
}

module.exports = countWords;