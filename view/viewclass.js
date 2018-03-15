function ListViewParent() {
    this._model     =  arguments[0];
    this._elements  =  arguments[1];
    this.loadHtmlForShop = new Event(this);
    this.addButtonClickedtocart = new Event(this);
    this.formForlogin   = new Event(this);
    this.formForregistr = new Event(this);
    this.formForsendregistr = new Event(this);
    this.cartclcik  =     new Event(this);
    this.add_qty    =     new Event(this);
    this.remove_qty =     new Event(this);

};

ListViewParent.prototype.generateInitView = function () {
    let initData = $.parseJSON('{ "reklama" : "МОРОЖЕНОЕ", "title":"главная страница"}');
    this.rebuildList('#index', '#title', initData );
};

ListViewParent.prototype.rebuildList = function (id, id2, itemss, auth) {
    arguments[1] = arguments[1] || {'uu':'uu'};
    check ();
    let currentHtml, items, title;
    currentHtml = this._elements.list;
    title = this._elements.title;

    let source = $(id).html();
    let template = Handlebars.compile(source);
    itemsFromServer = this._model.getItems();
    let html = template(itemsFromServer);
    $(html).insertAfter(currentHtml);

    if ( id2 ) { 
      var sourceTitle = $(id2).html();
      var templatetitle = Handlebars.compile(sourceTitle);
      var objTitle = {};
      objTitle.title = itemss.title;
      var htmlTitle = templatetitle(objTitle);
      $('title').remove();
      $(title).append(htmlTitle);
    }

    if ( auth ) { 
      var sourceAuth = $(auth).html();
      var templateAuth = Handlebars.compile(sourceAuth);
      var htmlAuth = templateAuth(obj);
      var elementAuth = $('#mmm');
      $(htmlAuth).insertAfter(elementAuth);
    }
   
}
