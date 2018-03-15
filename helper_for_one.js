Handlebars.registerHelper('help', function() {

   if(this.hasOwnProperty('added')) {
	   this.resppp[0].add = 'в корзине';
	} else { 
		this.resppp[0].add = 'добавить в корзину';
	}
});