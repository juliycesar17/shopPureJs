function ListControllerParent() {
	
    this._model = arguments[0];
    this._view = arguments[1];
	this.ard = arguments[2] || '{prop:prop}';
}

ListControllerParent.prototype.newState = function () {
	let _this = this;
	let argos = arguments;
	let el = arguments[0].url;
	let title = arguments[0].title;
	return this._model.ajax(argos[0]).then(function( msg ) {
		return _this._model.addItem( msg, el, title )
	});
}
