let mybutton = document.getElementById("myBtn");
window.onscroll = function() {
    //console.log(mybutton);
    scrollfunctionn()};
function scrollfunctionn(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        mybutton.style.display = "block"; 
    }else{
        mybutton.style.display = "none";
    }
}
function topfunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}