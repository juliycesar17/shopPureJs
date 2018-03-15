
 function ListModelshop() {

	ListModelParent.apply(this, Array.prototype.slice.call(arguments, 0));
	this.answerToAdd = new Event(this);
	this.modelcarttt = arguments[1];
	
   	let _this = this;

	arguments[1].itemAddCart.attachd(function () {
		var argus = arguments[1].not[0];
	    var title = arguments[1].not[4];
		_this._dataObj['your-ice.php-'+argus].added ='true';
		return _this.ajax({url:'your-ice.php', id:argus}).then(function(msg) {
			return _this.addItem(msg, 'your-ice.php',title)
		});	;
	});
  
	arguments[2].loginEvent.attachd(function () {	
		if(arguments[0]._ittttems['add_user.php']) {
			 var authvar = arguments[0]._ittttems['add_user.php'].ppp.scs;
		}
		_this._dataObj['auth'] = authvar;
	});
}

ListModelshop.prototype = Object.create(ListModelParent.prototype);
ListModelshop.prototype.constructor = ListModelshop;
ListModelshop.prototype.getown= function ( ) {
	return this.own;
};
