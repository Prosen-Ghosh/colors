var getCookie = function(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

window.onload = function(e){ 
    e.stopPropagation(true);
    var username = getCookie('username');
    console.log(username); 
    if(username == ''){
        window.location.replace(window.location.origin + "/colors/");
    }
 }

$(document).ready(function(e){
    console.log("Cok : ",getCookie('username'));
    e.stopPropagation(true);
    var username = getCookie('username');
    console.log(username); 
    if(username == ''){
        window.location.replace(window.location.origin + "/colors/inide.html");
    }
});

$(document).ready(function(){
   $('#admin.html').on('click',function(){
       document.cookie = "username='';";
       window.location.replace(window.location.origin + "/colors/");
   }); 
});