document.addEventListener("DOMContentLoaded", function () {
    var nut = document.querySelectorAll(".nut");
    var nut = nut[0];
    var menu = document.querySelectorAll(".sidemenu");
    var menu = menu[0];
    var manhinhden = document.querySelectorAll(".manhinhden");
    var manhinhden = manhinhden[0];

    nut.onclick = function () {
        menu.classList.add('menuhienra');
        manhinhden.classList.add('manhinhdenhienra');
    }

    manhinhden.onclick = function () {
        manhinhden.classList.remove('manhinhdenhienra');
        menu.classList.remove('menuhienra');
    }
}, false);

document.addEventListener("DOMContentLoaded", function () {
    var nut2 = document.querySelectorAll(".nut2");
    var nut2 = nut2[0];
    var menu2 = document.querySelectorAll(".sidemenu2");
    var menu2 = menu2[0];
    var manhinhden2 = document.querySelectorAll(".manhinhden2");
    var manhinhden2 = manhinhden2[0];

    nut2.onclick = function () {
        menu2.classList.add('menuhienra2');
        manhinhden2.classList.add('manhinhdenhienra2');
    }

    manhinhden2.onclick = function () {
        manhinhden2.classList.remove('manhinhdenhienra2');
        menu2.classList.remove('menuhienra2');
    }
}, false);