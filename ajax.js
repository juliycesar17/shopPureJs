function ajax(el, datta){
console.log(datta);
return $.ajax({
   type: "POST",
   url: el,
   data: datta,
   cache: false,
   dataType:'json',
   beforeSend: function( xhr ) {
   xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
       }
       })
	   //return $.getJSON(el, datta);
       }