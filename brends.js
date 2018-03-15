Handlebars.registerHelper('splitTitle', function(title) {
  var keyword = title.toString();
  var t = keyword.split(/[ ,]+/);
  var i, output = '';
  var b = [];
  for (i = 0; i < t.length; i++) {
	  if (t[i]=='Маугли' ) {b[i] = 'maugli.php'}
	  if (t[i]=='Нямням' ) {b[i] = 'njamnjam.php'}
	  if (t[i]=='BOOM' ) {b[i] = 'boom.php'}
	  if (t[i]=='cool_ice' ) {b[i] = 'cool_ice.php'}
	  if (t[i]=='Лед' ) {b[i] = 'ljod.php'}
	  if (t[i]=='square_ice' ){b[i] = 'square_ice.php'}
	  if (t[i]=='Баунти' ){b[i] = 'baunti.php'}

            output += '<li><h7><a class="flexi-tov" data-brend='+t[i]+'  data-ses='+this.vse_vidi_tov+' href="flexi-tovari.php?q=' + t[i] + '">'+ t[i]+'</a></h7></li>';
	}
    return new Handlebars.SafeString(output);
 });
