function ListViewLogin() {

	ListViewParent.apply(this, Array.prototype.slice.call(arguments, 0));   
		let _this = this;
	
		arguments[0].loginEvent.attachd(function () {

			var rendering;
			switch (arguments[1].elem) {

				case 'login.php':
				rendering = '#for_login';
				return  _this.rebuildview(rendering); 
				
				case 'for_registr.php':
				rendering ='#for_registr';
				return  _this.rebuildview(rendering); 
				
				case 'add_user.php':
				rendering ='#success_registr';
				return  _this.rebuildview(rendering); 		
			}
		});

}
ListViewLogin.prototype = Object.create(ListViewParent.prototype); 
ListViewLogin.prototype.constructor = ListViewLogin;
ListViewLogin.prototype.rebuildview= function (id) { //сюда handlebars js
  
	check ();
	let list, items, key;
	list = this._elements.list; 
	let source = $(id).html();	   
	var template = Handlebars.compile(source);
	items = this._model.getItems();
	let htmll = template(items);
	$(htmll).insertAfter(list);	
}