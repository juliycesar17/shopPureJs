Handlebars.registerHelper('splitTitle', function(title) {

    var keyword = title.toString();
    var t = keyword.split(/[ ,]+/);
    var i, output = '';
    var b = [];
      for (i = 0; i < t.length; i++) {
                output += '<li><h7><a class="choose-brend" data-param=\'choose-brend.php\' data-brend='+t[i]+' data-v='+this.vse_vidi_tov+' data-ses='+this.vse_vidi_tov+' href="flexi-tovari.php?q=' + t[i] + '">'+ t[i]+'</a></h7></li>';
        }
        return new Handlebars.SafeString(output);
 });
