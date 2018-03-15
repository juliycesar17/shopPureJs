function ListViewcart() {
  	ListViewParent.apply(this, Array.prototype.slice.call(arguments, 0));
    var _this = this;
    arguments[0].browseShop.attachd(function () {

		var rendering;
		switch (arguments[1].elem) {

		case 'add_tocart_n.php':
		rendering ='#addtocart';
		return  _this.rebuildList(rendering);

		case 'cart.php':
		rendering ='#carttt';
		return  _this.rebuildview(rendering);
	  }
 });

	arguments[0].cart.attachd(function () {

    var args = {};
		args.title = arguments[1].title;
		return  _this.rebuildList('#carttt', '#title', args);
});

	arguments[0].addqty_model.attachd(function () {

		var args = {};
		args.title = arguments[1].title;
		return  _this.rebuildList('#carttt','#title', args);
});

	arguments[0].removeqty_model.attachd(function () {

		var args = {};
		args.title = arguments[1].title;
		return  _this.rebuildList('#carttt','#title', args);
	});
}

ListViewcart.prototype = Object.create(ListViewParent.prototype);
ListViewcart.prototype.constructor = ListViewcart;
ListViewcart.prototype.rebuildview = function (id) { 

		check ();
		var list, items, key;
		list = this._elements.list;
		var source = $(id).html();
		var template = Handlebars.compile(source);
		items = this._model.cartt();
		var htmll = template(items);
		$(htmll).insertAfter(list);
}
