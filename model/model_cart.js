 function ListModelcart() {
    ListModelParent.apply(this, Array.prototype.slice.call(arguments, 0));
    this.itemAddCart = new Event(this);
    this.addqty_model = new Event(this);
	this.removeqty_model = new Event(this);
    this.ittems = {};
 }
 
ListModelcart.prototype = Object.create(ListModelParent.prototype);
ListModelcart.prototype.constructor = ListModelcart;

ListModelcart.prototype.addtocartt = function( ) {
  	
	this.ittems[arguments[0]] = {
		'idq':arguments[0], 
		'vid':arguments[1],
		'price':arguments[2],
		'img':arguments[3], 
		'bre':arguments[5]
	}
	this.ittems[arguments[0]].qty = 1;
	this.itemAddCart.notify({
		not:arguments
	});
}

ListModelcart.prototype.cartt = function( ){
	
	this._items=arguments[0];
	this.cart.notify({
		elem: arguments[1],
		id:   arguments[0],
		title:arguments[2]
	})
}

ListModelcart.prototype.add_qnty=function( ){
		this._items = arguments[0].aa;
		var title = arguments[0].title;;
		for (var key in this._items){
			if (key==arguments[0].bb) {
				this._items[key].qty++;
			}
		}
		var tovari = this._items;
		this.addqty_model.notify({
			for_add:tovari,
        	title:title
		});
 }
 
 ListModelcart.prototype.remove_qnty = function( ){
	    this._items = arguments[0].aa;
			for (var key in this._items){ 
				if (key==arguments[0].bb) {
					this._items[key].qty--;
				}
			}
			var tovari = this._items;
			this.removeqty_model.notify({
				for_remov:tovari
			});
 }
ListModelcart.prototype.delfromcart = function ( ) {
		console.log($.parseJSON(JSON.stringify(this.ittems)));
};
