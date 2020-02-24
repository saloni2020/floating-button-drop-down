console.clear();
// var element = document.getElementById("slide-menu");
// element.addEventListener("animationstart", listener, false);
// element.addEventListener("animationend", listener, false);
// element.addEventListener("animationiteration", listener, false);

// function listener(event){
//   console.log(event.elapsedTime)
// }

var isAnimating = false;
var isOpen = false;
var button = document.querySelector(".sticky-menu-container .outer-button");
var menu = document.querySelector(".sticky-menu-container .inner-menu");
var closeIcon = document.querySelector(".sticky-menu-container .outer-button .close-icon");
var arrowIcon = document.querySelector(".sticky-menu-container .outer-button .arrow-icon");
var menuItems = document.querySelectorAll(".sticky-menu-container .inner-menu > .menu-list > .menu-item");

var itemTexts = document.querySelectorAll(".sticky-menu-container .inner-menu > .menu-list > .menu-item > .item-text");

button.addEventListener("click", function(){
  if(isAnimating) return;
  this.classList.add("clicked");
  menu.classList.toggle("closed");
  
  if(isOpen){
    closeIcon.classList.remove("show");
    closeIcon.classList.add("hide");
    arrowIcon.classList.remove("hide");
    arrowIcon.classList.add("show");
    menuItems.forEach(function(item){
      console.log(item);
       item.classList.add("text-hides");
    });
    itemTexts.forEach(function(text, index){
        setTimeout(function(){
          text.classList.remove("text-in");
        });
    });
    isOpen = false;
  }
  else{
    closeIcon.classList.remove("hide");
    closeIcon.classList.add("show");
    arrowIcon.classList.remove("show");
    arrowIcon.classList.add("hide");
    menuItems.forEach(function(item){
      console.log(item);
       item.classList.remove("text-hides");
    });
    itemTexts.forEach(function(text, index){
        setTimeout(function(){
          text.classList.add("text-in");
        }, index*150);
    });
    isOpen = true;
  }
  
});

button.addEventListener("animationstart", function(event){
  isAnimating = true;
});

button.addEventListener("animationend", function(event){
  isAnimating = false;
  this.classList.remove("clicked");
});

