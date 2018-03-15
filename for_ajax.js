function ajax (el) {
	
  var datta;

    switch (el) {
		   case  'dog_main.php':
			   datta = {'text':'6'};
			break;
		   
		   case  'flexi.php' :
			   datta = {
				   "vid":param_for_flexi_vid
				};
			break;
		   
		   case 'flexi-tovari.php':
			   datta = {
				   "q":arrr,
					"vvv":arrrv
				};
			break;
		   
		   case 'get_flexi_one.php':
			   datta = {
				   "q":id_for_fl_one
				};
			 break;
		   
		   case 'add_tocart_n.php' :
			   datta = {
				   "q": iddd,
				   "price1": pr,
				   "titl1": tl,
				   "img": im
				};
		   break;
		   
		   case 'cart.php' :
			   datta = {
				   "ii":for_post_cart
				};
			   break;
	}
		
	return $.ajax({
					 type: "POST",
					 url: el,
					 data: datta,
					 dataType:'json',
					 beforeSend: function( xhr ) {
						xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
					 }
				})
   }