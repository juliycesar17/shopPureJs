function ListModelParent() {

	this._dataObj = {};
	var _this = this;
	this.browseShop = new Event(this);
	this.cart = new Event(this);
	this.loginEvent = new Event(this);
}

ListModelParent.prototype.ajax = function() {

	var _this = this;
	var title = arguments[0].title;

	if (arguments[0].urrrl && arguments[0].urrrl.url == 'change_qty.php') {
		var addone = arguments[0].wwww[0][0]._model.ittems;
		var addoneid = arguments[0].wwww[0][1].id;
		return Promise.resolve({'aa': addone, 'bb': addoneid, 'title': title});
	}


    let data;
	  let phpScript = arguments[0].phpScript;

    if ( arguments[0].flex ) {var flex = arguments[0].flex;}
    if ( arguments[0].brend ) {var brend = arguments[0].brend;}
    if ( arguments[0].vidd ) {var vidd = arguments[0].vidd;}
    if ( arguments[0].id ) {var idd = arguments[0].id;}
    if ( arguments[0][1] && arguments[0][1] == 'cart.php' ) {

		var myobj = arguments[0][0];
		var array_of_items = {};

		for (var item in myobj ) {
			array_of_items[item] = myobj[item];
		}

		return Promise.resolve(array_of_items);
	}

	if ( arguments[0] && arguments[0].url == 'login.php' ) {
		return Promise.resolve('priv');
  	}

	if ( arguments[0] && arguments[0].url == 'for_registr.php' ) {
   		return Promise.resolve('priv');
  	}

	if ( phpScript in this._dataObj || phpScript+'-'+flex in this._dataObj || phpScript+'-'+vidd +'-'+brend in this._dataObj || phpScript+'-'+ idd in this._dataObj ) {
		// alert("tyu");
		if(flex) {
			return Promise.resolve(_this._dataObj[phpScript.toString() + '-' + flex.toString()]);
		} else if(brend) {
			return Promise.resolve(_this._dataObj[phpScript.toString() +'-'+ vidd.toString() +'-'+ brend.toString()]);
		} else if(idd) {
			return Promise.resolve(_this._dataObj[phpScript.toString() +'-'+ idd.toString()]);
		}

		return Promise.resolve(_this._dataObj[phpScript.toString()]);
	} else {

		switch (phpScript) {

		case  'indexx.php':
				data = {'indexx': '9'};
		break;

		case  'shop.php':
				data = {'text': '6'};
		break;

		case  'recipe.php':
				data = {'text': 'recipe'};
		break;

		case  'blog_n.php':
				data = {'text': 'recipe'};
		break;

		case  'select-cat.php' :
				var param_for_flexi_vid = localStorage.getItem('param_for_flexi_vid');
				data = {"vid": param_for_flexi_vid};
		break;

		case 'choose-brend.php':
				var url_tovari  = localStorage.getItem('url_for_flexi_one');
				var brend_brend = localStorage.getItem('arrr');
				var vid_vid_vid = localStorage.getItem('arrrv');
				var ses_ses_ses = localStorage.getItem('arrr_s');
				data = {"q": brend_brend, "vvv": vid_vid_vid};
		break;

		case 'your-ice.php':
				var id_one_one = localStorage.getItem('id_one');
				data = {"q": id_one_one};
		break;

		case 'add_user.php':
				var send_one = localStorage.getItem('url_send_registr');
				var em_one = localStorage.getItem('email_send_registr');
				var passw_one = localStorage.getItem('passw_send_registr');
				datta = {"q": send_one, "email": em_one, "passw": passw_one};
		break;

		case 'add_tocart_n.php' :

				var iddd_iddd_iddd = localStorage.getItem('iddd_iddd');
				var imagey_y = localStorage.getItem('image_image');
				var price_price_price = localStorage.getItem('price_price');
				var name_name_name = localStorage.getItem('name_item');
				data = {"q": iddd_iddd_iddd, "price1": price_price_price,"titl1": name_name_name,"img": imagey_y};
		break;
		}

        return $.ajax({
					type: "POST",
					url: phpScript,
					data: data,
					dataType: 'json',
					beforeSend: function( xhr ) {
						xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				}
		});
  }
}

ListModelParent.prototype.loadData = function ( ) {

	this._elem  = arguments[1];
	this._items = arguments[0];

	if(arguments[0].category_of_ice) {
		this.category_of_ice = arguments[0].category_of_ice;
		this._dataObj[this._elem.toString()+'-'+this.category_of_ice.sess_vid] = this._items;
	} else if (arguments[0].resp_array_of_sessions) {
		this.resp_array_of_sessions = arguments[0].resp_array_of_sessions;
		this._dataObj[this._elem.toString()+'-'+this.resp_array_of_sessions.sess_vid+'-'+this.resp_array_of_sessions.sess_qqq] = this._items;
	} else if (arguments[0].id) {
		this.id = arguments[0].id;
		this._dataObj[this._elem.toString()+'-'+this.id.sess_one] = this._items;
	} else {
		this._dataObj[this._elem.toString()] = this._items;
	}

	this.browseShop.notify({
		elem: arguments[1],
		id:   arguments[0],
		title: arguments[2]
	});
}

ListModelParent.prototype.getItems = function ( ) {
	return this._items;
};
