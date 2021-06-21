var menu = document.getElementById("menu");
// var sidebar = document.getElementById("sidebar");
// var side = document.getElementsByClassName("sidebar");
// var sidebar = side[0];
var sidebar = document.querySelector(".sidebar");
console.log(sidebar);
console.log(menu);
sidebar.style.right = "-250px";

menu.onclick = function () {
  if (sidebar.style.right == "-250px") {
    sidebar.style.right = "0";
  } else {
    sidebar.style.right = "-250px";
  }
};

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});
