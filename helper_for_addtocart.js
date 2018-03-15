Handlebars.registerHelper('foradd', function() {
	var arr=Object.keys(this);
	console.log(arr);
	console.log(arr[0]);
	console.log(this[arr[0]]);
	console.log(this[arr[0]].id);
console.log(this[arr[arr.length-1]].id);
	
	var output= '<div class="w3-row-padding aaa">';
output+='<div class="w3-third w3-container w3-margin-bottom">';
 output+='<a  class="">';
   output+=' <img src="image/items/'+this[arr[0]].img +'"alt='+this[arr[0]].id+'style="width:100%" class="w3-hover-opacity">'
	output+='</a>';
    output+=' <div class="w3-container w3-white">';
     output+=' <p><b>'+this[arr[0]].tt+'</b></p>';
		 output+=' <button data-id='+this[arr[0]].id+' data-price='+this[arr[0]].pr+' data-name='+this[arr[0]].tt+' data-image='+this[arr[0]].img+' class="w3-btn w3-black w3-padding-large w3-hover-red add">в корзине </button>  </div></div> </div>';
 return new Handlebars.SafeString(output);
	
});