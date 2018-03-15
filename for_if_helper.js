Handlebars.registerHelper('if_eq', function() {

	  var output;
	  var t=0;
	  for (var k in this){
	  if (this.hasOwnProperty(k)) {
		 t++;
	   }
  }
  if (t>0) {
	  output = '<p>Вы выбрали следующие товары:</p>';
    }
	else { 
		output = '<p>Вы не выбрали ни одного товара </p>';
	
	}
	return new Handlebars.SafeString(output);
});