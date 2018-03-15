function ListControllershop() {
    ListControllerParent.apply(this, Array.prototype.slice.call(arguments, 0));
    let _this = this;
    arguments[1].loadHtmlForShop.attachd(function () {
        let htmlElements = arguments[1];
        _this.newState(htmlElements);
    });
 
$("body" ).on( "click", '#ind', function(e) {
  let _thiss = this;

  e.preventDefault();
  e.stopPropagation();

  let items = $.parseJSON('{ "reklama" : "МОРОЖЕНОЕ", "title":"главная страница"}');
  if ( window.location!= statesWithWWW.main && window.location!= statesWithoutWWW.main ) {
     if ( window.location.origin == origin.originWithWWW ) {
        history.pushState(statesWithWWW.main + 'index.php', document.title, statesWithWWW.main +'.');
      } else {
          history.pushState(statesWithWWW.main+'index.php', document.title, statesWithoutWWW.main);
        }
  }

_this._view.generateInitView();

});

arguments[1]._elements.goToShop.on( "click", function(e) {

    e.preventDefault();
    e.stopPropagation();

    if (window.location!=statesWithWWW+'shop' && window.location!=statesWithoutWWW.main+'shop' ) {
      if ( window.location.origin == origin.originWithWWW ) {
        history.pushState(statesWithWWW.main+'shop', document.title, statesWithWWW.main+'shop');}
      else {history.pushState(statesWithWWW.main+'shop', document.title, statesWithoutWWW.main+'shop');}
    }
    _this._view.loadHtmlForShop.notify({url:'shop.php','title':'browseshop'});
});

$("body" ).on( "click", '#recipe', function(e) {

    e.preventDefault();
    e.stopPropagation();

    if (window.location!=statesWithWWW+'recipe.php' && window.location!=statesWithoutWWW.main+'recipe.php'  ) {
      if ( window.location.origin == origin.originWithWWW ) {
        history.pushState(statesWithWWW.main+'recipe.php', document.title, statesWithWWW.main+'recipe.php');
      }
      else { 
         history.pushState(statesWithWWW.main+'recipe.php', document.title, statesWithoutWWW.main+'recipe.php');
      }
    }
    _this._view.loadHtmlForShop.notify({url:'recipe.php','title':'recipe'});
});

$("body" ).on( "click", '.sel_cat', function(e) {
    let _thiss = this;
    let param_for_flexi_vid;
    let url_for_flexi;
    localStorage.setItem('param_for_flexi_vid', _thiss.getAttribute('data-vid'));
    localStorage.setItem('url_for_flexi',        _thiss.getAttribute('data-param') );
    let url_vid = localStorage.getItem('url_for_flexi');
    let vid_vid = localStorage.getItem('param_for_flexi_vid');

    e.preventDefault();
    e.stopPropagation();

    if (window.location != statesWithWWW + '/select-cat' && window.location!=statesWithoutWWW.main+'select-cat') {
      if ( window.location.origin == origin.originWithWWW ) {
        history.pushState(statesWithWWW.main+'flexi.php?vid='+$(this).attr('data-vid'), document.title, statesWithWWW.main+'select-cat');
      }
      else {
        history.pushState(statesWithWWW.main+'flexi.php?vid='+$(this).attr('data-vid'), document.title, statesWithoutWWW.main+'select-cat');
      }
  }
    _this._view.loadHtmlForShop.notify({url:url_vid, flex:vid_vid, 'title':'brows_items'}); //2 параметр для кеширования
});

$("body" ).on( "click", '#blog', function(e) {
    let _thiss = this;
    let param_for_flexi_vid;
    let url_for_blog;
    localStorage.setItem('url_for_blog', _thiss.getAttribute('data-param') );
    let url_vid = localStorage.getItem('url_for_blog');

    e.preventDefault();
    e.stopPropagation();

    if(window.location!=statesWithWWW.main+'blog_n.php' && window.location!=statesWithoutWWW.main+'blog_n.php' ) {
      if ( window.location.origin == origin.originWithWWW ) {
        history.pushState(statesWithWWW.main+'blog_n.php', document.title, statesWithWWW.main+'blog_n.php');
        }
      else {
        history.pushState(statesWithWWW.main+'blog_n.php', document.title, statesWithoutWWW.main+'blog_n.php');
      }
  }
    _this._view.loadHtmlForShop.notify({url:url_vid}); 
});

$("body" ).on( "click", '.choose-brend', function(e) {
    let _thiss = this;
    let url_for_flexi_one, arrr, arrrv, arrr_s;
    localStorage.setItem('url_for_flexi_one', _thiss.getAttribute('data-param'));
    localStorage.setItem('arrr', _thiss.getAttribute('data-brend'));
    localStorage.setItem('arrrv', _thiss.getAttribute('data-v'));
    localStorage.setItem('arrr_s', _thiss.getAttribute('data-ses'));

    let url_tovari = localStorage.getItem('url_for_flexi_one');
    let brend_brend = localStorage.getItem('arrr');
    let vid_vid_vid = localStorage.getItem('arrrv');
    let ses_ses_ses = localStorage.getItem('arrr_s');

    e.preventDefault();
    e.stopPropagation();

    if( window.location!=statesWithWWW.main+'choose-brend' && window.location!=statesWithoutWWW.main+'choose-brend') {
      if( window.location.origin == origin.originWithWWW) {
        history.pushState(statesWithWWW.main+'flexi-tovari.php?q='+$(this).attr('data-brend')+'&vvv='+$(this).attr('data-v'), document.title, statesWithWWW.main+'choose-brend');
      }
      else {
        history.pushState(statesWithWWW.main+'flexi-tovari.php?q='+$(this).attr('data-brend')+'&vvv='+$(this).attr('data-v'), document.title, statesWithoutWWW.main+'choose-brend');}
    }
    _this._view.loadHtmlForShop.notify({url:url_tovari, brend:brend_brend, vidd:vid_vid_vid,'title':'brows_items' });
});

$("body" ).on( "click", '.one_ice', function(e) {
    let _thiss = this;
    let url_one, id_one;

    localStorage.setItem('url_one', _thiss.getAttribute('data-param'));
    localStorage.setItem('id_one', _thiss.getAttribute('data-idd'));

    let url_one_one = localStorage.getItem('url_one');
    let id_one_one = localStorage.getItem('id_one');

    e.preventDefault();
    e.stopPropagation();

    if( window.location!=statesWithWWW.main+'your-ice' && window.location!=statesWithoutWWW.main+'your-ice'){

      if( window.location.origin == origin.originWithWWW ) {
        history.pushState(statesWithWWW.main+'get_flexi_one.php?q='+$(this).attr('data-idd'), document.title, statesWithWWW.main+'your-ice');
      } else {
        history.pushState(statesWithWWW.main+'get_flexi_one.php?q='+$(this).attr('data-idd'), document.title, statesWithoutWWW.main+'your-ice');
        }
      }
      _this._view.loadHtmlForShop.notify({url:url_one_one, id:id_one_one,'title':'brows_item_one'});
});
}

ListControllershop.prototype = Object.create(ListControllerParent.prototype);
ListControllershop.prototype.constructor = ListControllershop;
