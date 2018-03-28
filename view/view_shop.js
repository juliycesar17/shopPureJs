
function ListViewshop() {

	ListViewParent.apply(this, Array.prototype.slice.call(arguments, 0));
	let _this = this;
	let viewLogin = arguments[2];
	arguments[0].browseShop.attachd(function () {
			var rendering;
				switch (arguments[1].elem) {

					case 'indexx.php':
						var args = {};
						args.title = arguments[1].title;
						rendering = '#index';
						return  _this.rebuildList(rendering, '#title', args, '#auth');

					case 'shop.php':
						var args = {};
						args.title = arguments[1].title;
						rendering = '#shop';
						return  _this.rebuildList(rendering,'#title', args);

					case 'blog_n.php':
						var args = {};
						args.title = arguments[1].title;
						rendering ='#blog_templ';
						return  _this.rebuildList(rendering,'#title', args);

					case 'recipe.php':
						var args = {};
						args.title = arguments[1].title;
						rendering ='#recipes';
						return  _this.rebuildList(rendering,'#title', args);

					case 'select-cat.php':
						var args = {};
						args.title = arguments[1].title;
						rendering ='#flexxxi';
						return  _this.rebuildList(rendering,'#title', args);

					case 'choose-brend.php':
						var args = {};
						args.title = arguments[1].title;
						rendering = '#flexi-for-tov';
						return  _this.rebuildList(rendering,'#title', args);

					case 'your-ice.php':
						var args = {};
						args.title = arguments[1].title;
						rendering = '#flexi-one';
						var id = arguments[1].id;
						return  _this.rebuildList(rendering,'#title'/*, id*/, args);
				}
		});

	window.onpopstate = function (event) {

		var param_for_flexi_vid = localStorage.getItem('param_for_flexi_vid');
		var url_tovari = localStorage.getItem('url_for_flexi_one');
		var brend_brend = localStorage.getItem('arrr');
		var vid_vid_vid = localStorage.getItem('arrrv');
		var ses_ses_ses = localStorage.getItem('arrr_s');
		var id_one_one_one = localStorage.getItem('id_one');

		switch(event.state) {
			case statesWithWWW.main+'index.php' || statesWithoutWWW.main+'index.php':
				_this.generateInitView();
			break;

			case statesWithWWW.main+'shop' ||statesWithoutWWW.main+'shop':
				_this.loadHtmlForShop.notify({phpScript: 'shop.php','title': 'browsershop'}); 
			break;

			case statesWithWWW.main+'recipe.php':
				_this.loadHtmlForShop.notify({phpScript: 'recipe.php'});
			break;

			case statesWithWWW.main+'flexi.php?vid='+param_for_flexi_vid:
				_this.loadHtmlForShop.notify({phpScript: 'select-cat.php',  flex: param_for_flexi_vid});
			break;

			case statesWithWWW.main+'flexi-tovari.php?q='+brend_brend+'&vvv='+ses_ses_ses:
				_this.loadHtmlForShop.notify({phpScript: 'choose-brend.php', brend: brend_brend, vidd: ses_ses_ses,'title':'browse_items'});
			break;

			case statesWithWWW.main+'get_flexi_one.php?q='+id_one_one_one:
				_this.loadHtmlForShop.notify({phpScript: 'your-ice.php', id: id_one_one_one});
			break;

			case statesWithWWW.main+'login.php':
				viewLogin.formForlogin.notify({phpScript: 'login.php'});
			break;

			case statesWithWWW.main+'registr.php':
				_this.loadHtmlForShop.notify({phpScript: 'registr.php'});
			break;
		}
	}
}

ListViewshop.prototype = Object.create(ListViewParent.prototype);
ListViewshop.prototype.constructor = ListViewshop;
