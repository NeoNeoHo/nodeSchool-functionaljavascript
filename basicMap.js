function doubleAll(numbers) {
	var results = numbers.map(function(number) {
		return number * 2;
	})
	return results;
}

module.exports = doubleAll;