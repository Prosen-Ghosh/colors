var ref = new Firebase('https://colors-a8c0c.firebaseio.com/');


var generateIndexPage = function() {
    var id = $('#hero');
    var html = '';
    var test = 1;
    ref.on('value', function(snap) {
       objects = snap.val();
        for(var key in objects) {
            var value = objects[key];
            console.log(key , value);
            console.log(test);
            html += '<div class="color-box" style="background-color:'+value+';">'+
                    '<hr/>'+
                    '<a href="shades.html#'+key+'"><h4 class="text-center color-name">'+ key +'</h4></a>'+
                    '<p class="text-center color-code">'+ value +'</p>'+
                    '</div>';
        }
        id.html(html);      
    });
};

$(document).ready(function(){
    generateIndexPage();
});