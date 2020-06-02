window.onscroll = function() {myFunction()};
function myFunction() {
var check = document.getElementById('ct-scroll');  
var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
var scrolled = (winScroll / height) * 100;
if(scrolled >4){
    check.style.display="block";
}
else {check.style.display="none";}
document.getElementById("myBar").style.width = scrolled + "%";
}