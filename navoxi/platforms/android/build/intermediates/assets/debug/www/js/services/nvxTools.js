navoxi.service('nvxTools', function() {
	var nvxTools = this;

	nvxTools.nvxAlert = function(msg) {
		setTimeout(function() {
			alert(msg);
		}, 250);
	}
});