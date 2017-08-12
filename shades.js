var url = window.location.hash.split('#')[1]
var ref = new Firebase('https://colors-a8c0c.firebaseio.com/Colors/'+url);

var generateShadesPage = function() {
    var id = $('#shades');
    var html = '';
    ref.child('shades').on('value', function(snap) {
       objects = snap.val();
       console.log(objects)
       for(var key in objects){
           var value = objects[key];
           //console.log(value);
            html += '<div class="color-box" style="background-color:'+value+';">'+
            '<hr/>'+
            '<h5 class="text-center color-name">'+key +'</h5>'+
            '<p class="text-center color-code">HEX : '+ value +'</p>'+
            '</div>';
       }
        id.html(html);    
    });
};

$(document).ready(function(){
    generateShadesPage();
});