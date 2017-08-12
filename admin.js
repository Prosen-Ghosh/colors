var ref = new Firebase('https://colors-a8c0c.firebaseio.com/Users');

var isAdmin = async function(userName,userPassword){
    var obj = {};
    await ref.on('value', function(snap){
        obj = snap.val();
        console.log(obj);
    });
    console.log("a");
    if(obj.username === userName && obj.password === userPassword)return true;
    return false;
}

$('#loginBtn').on('click',function(){
    var userName = $('#userName').val();
    var userPassword = $('#userPassword').val();
    if(isAdmin(userName,userPassword)){
        window.location.replace(window.location.origin + "/colors/adminHome.html");
    }
    else {
        $('.loginError').html('<div class="alert alert-danger text-center" role="alert"><strong>Oops!</strong> User Name Or Password Is Not Correct.</div>');
        setTimeout(function(){
            $('.loginError').html('');
        },3000);
    }
});

$('.form-login').on('keydown',function(e){
    var key = e.which;
    if(key === 13){
        $('#loginBtn').focus();
        $('#loginBtn').click();
    }
});