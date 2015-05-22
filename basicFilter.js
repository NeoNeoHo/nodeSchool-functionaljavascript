function getShortMessages(messages) {
	var result = messages.filter(function(obj) {
		return obj.message.length < 50;
	}).map(function(obj) {
		return obj.message;
	});

	return result;
}

module.exports = getShortMessages;