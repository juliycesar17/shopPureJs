SetOrigin();
SetStatesWithWWW();
SetStatesWithoutWWW();
SetInitState();

function SetOrigin() {
      origin = {
        'originWithWWW': 'http://www.joyforchild.com',
        'originWithoutWWW': 'http://joyforchild.com'
      }

      return origin;
}

function SetStatesWithWWW() {
      let basisWWW = 'http://www.joyforchild.com/ice/';
       statesWithWWW = {
        'main': basisWWW,
        'shop': basisWWW+'shop',
        'recipe': 'http://www.joyforchild.com/ice/',
        'select-cat': basisWWW+'select-cat',
        'blog': basisWWW+'blog_n.php'
  };

  return statesWithWWW;
}

function SetStatesWithoutWWW() {
      let basis = 'http://joyforchild.com/ice/';
      statesWithoutWWW = {
       'main': basis,
       'shop': basis+'shop',
       'recipe': basis+'ice/',
       'select-cat': basis+'select-cat',
       'blog': basis+'blog_n.php'
 };

 return statesWithoutWWW;
}

function SetInitState() {
    if (window.location.href == statesWithWWW.main ) {
        history.pushState( statesWithWWW.main+'index.php', document.title, statesWithWWW.main);
    } else {
      history.pushState( statesWithWWW.main+'index.php', document.title, statesWithoutWWW.main);
    }
}

var initData = $.parseJSON('{ "reklama" : "МОРОЖЕНОЕ", "title":"главная страница"}');
let modelcart = new ListModelcart(initData);
let modellogin = new ListModellogin(initData);
let model = new ListModelshop(initData, modelcart, modellogin );
let view = new ListViewshop( model, {
      'list': $('header'),
      'goToShop': $(".shop"),
      'title':$("head")
});
let viewcart = new ListViewcart(modelcart, {
      'list': $('header'),
      'addButton': $(".shop")
});

let viewlogin = new ListViewLogin(modellogin, {
      'list': $('header'),
      'addButton': $(".shop")
});
new ListControllershop(model, view);
new ListControllercart(modelcart, viewcart);
new ListControllerlogin(modellogin, viewlogin);

view.generateInitView();
