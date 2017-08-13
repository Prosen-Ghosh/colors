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
    var username = getCookie('username');
    console.log(username); 
    if(username == ''){
        window.location.replace(window.location.origin + "/colors/index.html");
    }
 }

//$(document).ready(function(e){
//    console.log("Cok : ",getCookie('username'));
//    e.stopPropagation(true);
//    var username = getCookie('username');
//    console.log(username); 
//    if(username == ''){
//        window.location.replace(window.location.origin + "/colors/inide.html");
//    }
//});

$(document).ready(function(){
   $('#logout').on('click',function(){
       document.cookie = "username='';";
       window.location.replace(window.location.origin + "/colors/index.html");
   }); 
});

$(document).ready(function(){
   $('#submitColor').on('click',function(){
       var ref = new Firebase('https://colors-a8c0c.firebaseio.com/Colors');
       var colorName = $('#colorName').val();
       var colorCode = $('#colorCode').val();
       var obj = {
            'code' : colorCode
       }
       var newRef = ref.child(colorName).set(obj);
   }); 
});

$(document).ready(function(){
    $('#addNewColor').on('click',function(){
        var showInput = $('#showInput');
        var html = `<div class="col-md-7">
                        <div class="col-xs-7">
                            <label for="Color Name">Color Name</label>
                            <input class="form-control" id="colorName" type="text">
                        </div>
                        <div class="col-xs-7">
                            <label for="Color Code">Color Code</label>
                            <input class="form-control" id="colorCode" type="text">
                        </div>
                        <div class="col-xs-offset-4 col-xs-3" style="margin-top:20px;">
                            <button id="submitColor" class="btn btn-primary form-control">Submit</button>
                        </div>
                    </div>`;
        showInput.html(html);
    });
});

$(document).ready(function(){
    $('#addNewColorShades').on('click',async function(){
        var showInput = $('#showInput');
        var ref = new Firebase('https://colors-a8c0c.firebaseio.com/Colors');
        var options = '';
        await ref.on('value', function(snap) {
            objects = snap.val();
            for(var key in objects){
                options += '<option value="'+key+'">'+key+'</option>';
                console.log('key : ',key);
            }
        });
        conosle.log("After Key");
        var html = `<div class="col-md-7">
                        <div class="col-xs-7">
                            <label for="Color Name">Color Name</label>
                            <select class="form-control" id="colorName">
                                ${options}
                            </select>
                        </div>
                        <div class="col-xs-7">
                            <label for="Color Name">Color Shades Name</label>
                            <input class="form-control" id="colorName" type="text">
                        </div>
                        <div class="col-xs-7">
                            <label for="Color Code">Color Shades Code</label>
                            <input class="form-control" id="colorCode" type="text">
                        </div>
                        <div class="col-xs-offset-4 col-xs-3" style="margin-top:20px;">
                            <button id="submitColor" class="btn btn-primary form-control">Submit</button>
                        </div>
                    </div>`;
        showInput.html(html);
    });
});