function duckCount() {
	var duck_array = Array.prototype.slice.call(arguments).filter(function(item) {
		return Object.prototype.hasOwnProperty.call(item, 'quack');
	});
	return duck_array.length
}
module.exports = duckCount;