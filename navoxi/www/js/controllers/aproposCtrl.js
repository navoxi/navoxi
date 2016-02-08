navoxi.controller('aproposCtrl', ['$scope', 'nvxTools', function($scope, nvxTools) {
	$scope.goTo = function(id, path, isBack) {
		nvxTools.goTo(id, path, isBack);
	};
	var index = 0;
	var dbSize = 5 * 1024 * 1024;

	var db = openDatabase("navoxi.db", "0.1", "SQLite database for Navoxi", 5000 * 1024 * 1024);

	db.transaction(function(tx) {
		tx.executeSql("select * from stops where stop_name like '%Villeneuve%';", [], function(t, data) {
			var i = 0;
			while (i < data.rows.length)
			{
				nvxTools.nvxAlert(data.rows.item(i)['stop_name']);
				i++;
			}
		}, function() {
			nvxTools.nvxAlert('ERROR SELECT');
		});
	});
}])