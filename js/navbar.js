window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("logo").style.left = "50%";
        document.getElementById("logo").style.top = "300px";
        document.getElementById("logo").style.scale = "3";
        document.getElementById("logo").style.position = "absolute";
        document.getElementById("logo").style.opacity = "0%";
        document.getElementById("navbar-nav").style.padding = "5px 0px";

    } else {
        document.getElementById("logo").style.position = "relative";
        document.getElementById("logo").style.left = "0";
        document.getElementById("logo").style.scale = "1";
        document.getElementById("logo").style.top = "0";
        document.getElementById("logo").style.opacity = "100%";
        document.getElementById("navbar-nav").style.padding = "20px 0px";
        
    }
}