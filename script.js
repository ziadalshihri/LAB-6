const likebtn= document.getElementById("likebtn");
const dislikebtn= document.getElementById("dislikebtn");
const jokeup=document.getElementById("jokeup");
const jokedown=document.getElementById("jokedown");
const initlikes = 25;
const initdislikes = 10;

likebtn.innerText="👍 "+ initlikes;
dislikebtn.innerText="👎 "+ initdislikes;

let likescount= initlikes;
let dislikescount= initdislikes;

function handlelike(){
likescount++;
likebtn.innerText="👍 "+ likescount;
disablelikebutton();
setcookie();
}
function handleDislike(){
dislikescount++;
  dislikebtn.innerText="👎 "+ dislikescount ;
  disabledislikebutton();
  setcookie();
}
//make the joke about 405 beeing the best course
function disablelikebutton(){

    likebtn.disabled= true;
    
}
function disabledislikebutton(){

    dislikebtn.disabled= true;
}
function handlejokelike(){

    jokeup.innerText="👍"+100;
    disablejokeup();
    setcookie();
}
function disablejokeup(){
jokeup.disabled= true ;}

function setcookie(){
    document.cookie="voted= true; SameSite= Strict; Max-Age=60"
}
window.onload= function(){
    if(document.cookie && document.cookie.indexOf("voted")>-1){
        disabledislikebutton();
        disablejokeup();
        disablelikebutton();
    }
}