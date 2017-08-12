var ref = new Firebase('https://colors-a8c0c.firebaseio.com/Users');

var isAdmin = function(userName,userPassword){
    var obj = {};
    ref.on('value', function(snap){
        console.log(snap.val());
        obj = snap.val();
    });

    if(obj.username === userName && obj.password === userPassword)return true;
    return false;
}

$('#loginBtn').on('click',function(){
    var userName = $('#userName').val();
    var userPassword = $('#userPassword').val();
    if(isAdmin(userName,userPassword)){
        window.location.href = "http://www.google.com/";
    }
});