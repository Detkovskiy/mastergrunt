
var navMain = document.querySelector('.main-menu__list');
var navToggle = document.querySelector('.main-menu__toggle');
var subMenuToggle0 = document.querySelector('.main-menu__item--drop0');
var subMenuToggle1 = document.querySelector('.main-menu__item--drop1');
var subMenuToggle2 = document.querySelector('.main-menu__item--drop2');
var subMenuToggle3 = document.querySelector('.main-menu__item--drop3');
var subMenu0 = document.querySelector('.main-menu__dropdown0');
var subMenu1 = document.querySelector('.main-menu__dropdown2');
var subMenu2 = document.querySelector('.main-menu__dropdown3');
var subMenu4 = document.querySelector('.main-menu__dropdown4');


function changeMenuClass(menuClass, closeSelector, openSelector){
  if (menuClass.classList.contains(closeSelector)) {
    menuClass.classList.remove(closeSelector);
    menuClass.classList.add(openSelector);
  } else {
    menuClass.classList.add(closeSelector);
    menuClass.classList.remove(openSelector);
  }
}

navToggle.addEventListener('click', function() {
  changeMenuClass(navMain, 'main-menu__list--closed', 'main-menu__list--opened');
  changeMenuClass(navToggle, 'main-menu__toggle--closed', 'main-menu__toggle--opened')
});

subMenuToggle0.addEventListener('click', function() {
  changeMenuClass(subMenu0, 'main-menu__dropdown--closed', 'main-menu__dropdown--opened')
});

subMenuToggle1.addEventListener('click', function() {
  changeMenuClass(subMenu1, 'main-menu__dropdown--closed', 'main-menu__dropdown--opened')
});

subMenuToggle2.addEventListener('click', function() {
  changeMenuClass(subMenu2, 'main-menu__dropdown--closed', 'main-menu__dropdown--opened')
});

subMenuToggle3.addEventListener('click', function() {
  changeMenuClass(subMenu4, 'main-menu__dropdown--closed', 'main-menu__dropdown--opened')
});

//--------

var link = document.querySelector(".feedback-btn");
var link2 = document.querySelector(".feedback-btn2");
var popup = document.querySelector(".modal-feedback");
var close = document.querySelector(".modal-content-close");
var overlay = document.querySelector(".modal-overlay");
var tap = document.querySelector("#btn-1");


if(link){
  link.addEventListener("click", function() {
    popup.classList.add("modal-feedback-show");
    overlay.classList.add("modal-overlay-show");
  });
}

if(link2) {
  link2.addEventListener("click", function () {
    popup.classList.add("modal-feedback-show");
    overlay.classList.add("modal-overlay-show");
  });
}

function closeFeedback() {
  if (popup.classList.contains("modal-feedback-show")) {
    popup.classList.remove("modal-feedback-show");}
  if (overlay.classList.contains("modal-overlay-show")) {
    overlay.classList.remove("modal-overlay-show");
  }}

if(close) {
  close.addEventListener("click", function (event) {
    event.preventDefault();
    closeFeedback();
  });
}

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    closeFeedback();
  }
});


(function(s) {
  var n;
  s(".tabs-block__list").on("click", "li:not(.active)", function() {
    n = s(this).parents(".tabs-block"), s(this).dmtabs(n)
  }), s.fn.dmtabs = function(n) {
    s(this).addClass("tabs-block__item--active").siblings().removeClass("tabs-block__item--active"), n.find(".tabs-block__container").eq(s(this).index()).show(1, function() {
      s(this).addClass("open_tab")
    }).siblings(".tabs-block__container").hide(1, function() {
      s(this).removeClass("open_tab")
    })
  }
})(jQuery);

