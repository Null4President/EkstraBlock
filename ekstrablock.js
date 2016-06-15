var _jquery = jQuery.noConflict();
var _ekstraBlockDebug = false;
var _ekstraBlockChildSelector = ".p-absolute.p-absolute--fill";

function ekstraBlock(options) {
	options.forEach(function(entry) {
		if(entry['debug'] == true) {
			_ekstraBlockDebug = true;
			_ekstraBlockLog("Debug mode enabled");
		}

		if(typeof entry['childSelector'] !== 'undefined') {
			_ekstraBlockChildSelector = entry['previewElement'];
		}
	});

	_ekstraBlockDoBlock();
}

function _ekstraBlockLog(message) {
	if(_ekstraBlockDebug) {
		console.log("[EkstraBlock] " + message);
	}
}

function _ekstraBlockDoBlock() {
	_ekstraBlockLog("GTFO");

	_jquery(_ekstraBlockChildSelector).parent().remove();
}

// Run script
ekstraBlock([{debug: false}]);