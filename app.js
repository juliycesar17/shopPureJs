SetOrigin();
SetStatesWithWWW();
SetStatesWithoutWWW();

if (window.location.href == 'http://www.joyforchild.com/ice/' || window.location.href == 'http://joyforchild.com/ice/' || window.location.href == 'http://www.joyforchild.com/ice/index.php' || window.location.href == 'http://joyforchild.com/ice/index.php') {
      SetInitState();
}

if (window.location.href == 'http://www.joyforchild.com/ice/shop/' || window.location.href == 'http://joyforchild.com/ice/shop/') {
      SetInitStateForShop();
}

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
    if (window.location.href == statesWithWWW.main || window.location.href == statesWithWWW.main+"index.php" ) {
        history.pushState( statesWithWWW.main+'index.php', document.title, statesWithWWW.main);
    } else {
      history.pushState( statesWithWWW.main+'index.php', document.title, statesWithoutWWW.main);
    }
}

function SetInitStateForShop() {
      if (window.location.href == statesWithWWW.main+'shop/' ) {
          history.pushState( statesWithWWW.main+'shop/index.php', document.title, statesWithWWW.main+'shop');
      } else {
        history.pushState( statesWithWWW.main+'shop/index.php', document.title, statesWithoutWWW.main+'shop');
      }
  }

var initData = $.parseJSON('{ "reklama" : "МОРОЖЕНОЕ", "title":"главная страница"}');
let modelcart = new ListModelcart(initData);
let modellogin = new ListModellogin(initData);
let model = new ListModelshop(initData, modelcart, modellogin );

let viewlogin = new ListViewLogin(modellogin, {
      'list': $('header'),
      'addButton': $(".shop")
});

let view = new ListViewshop( model, {
      'list': $('header'),
      'goToShop': $(".shop"),
      'title':$("head")
},viewlogin);
let viewcart = new ListViewcart(modelcart, {
      'list': $('header'),
      'addButton': $(".shop")
});

new ListControllershop(model, view);
new ListControllercart(modelcart, viewcart);
new ListControllerlogin(modellogin, viewlogin);

if (window.location.href == 'http://www.joyforchild.com/ice/' || window.location.href == 'http://joyforchild.com/ice/') {
      view.generateInitView();
}