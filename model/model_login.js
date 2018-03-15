function ListModellogin() { 

	ListModelParent.apply(this, Array.prototype.slice.call(arguments, 0));
	this._ittttems = {};
	this.loginEvent = new Event(this);
}

ListModellogin.prototype = Object.create(ListModelParent.prototype); 
ListModellogin.prototype.constructor = ListModellogin;
	  
ListModelParent.prototype.addItemlogin= function ( ) {
	this._elem = arguments[1];              
	this._items = arguments[0];			
	this._ittttems[this._elem.toString() ] = this._items;
	this.loginEvent.notify({				
		elem: arguments[1],
		id:arguments[0]
	});
}

ListModelParent.prototype.addItemregistr= function ( ) {
	this._elem = arguments[1];              
	this._items = arguments[0];
	this._ittttems[this._elem.toString()] = this._items;				
	this.loginEvent.notify({				
		elem: arguments[1],
		id: arguments[0]
	});
}