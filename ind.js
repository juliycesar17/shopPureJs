(function(){ history.pushState('http://www.joyforchild.com/ice/index.php', document.title, 'http://www.joyforchild.com/ice/index.php');})();
	 
	 index();
	 
	 function index() {
		 
	   if($("#fff").length > 0) {
	   $('#fff').remove();
	 }
	 
	   if($("#ggg").length > 0) {
	   $('#ggg').remove();
	 }
	 
	 $('[class~=aaa]').remove();
	 
	var source = $("#index").html();
	var template = Handlebars.compile(source);
	var htmll = template();
	$(htmll).insertAfter($('header'));
}