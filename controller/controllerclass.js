function ListControllerParent() {

    this._model = arguments[0];
    this._view = arguments[1];
	  this.ard = arguments[2] || '{prop:prop}';
}

ListControllerParent.prototype.newState = function () {
	let _this = this;
	let args = arguments;
	let phpScript = arguments[0].phpScript;
	console.log(phpScript);
	let title = arguments[0].title;
	return this._model.ajax(args[0]).then(function( response ) {

		return _this._model.loadData( response, phpScript, title )
	});
}
