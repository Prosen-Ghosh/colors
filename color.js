var ref = new Firebase('https://colors-a8c0c.firebaseio.com/Colors');


var generateIndexPage = function() {
    var id = $('#hero');
    var html = '';
    ref.on('value', function(snap) {
       objects = snap.val();
       for(var key in objects){
           var obj = objects[key];
           for(var o in obj){
               if(o === 'code'){
                    html += '<div class="color-box" style="background-color:'+obj[o]+';">'+
                    '<hr/>'+
                    '<a href="shades.html#'+key+'"><h4 class="text-center color-name">'+key +'</h4></a>'+
                    '<p class="text-center color-code">HEX : '+ obj[o] +'</p>'+
                    '</div>';
               }
           }
       }
       id.html(html);     
    });
};

$(document).ready(function(){
    generateIndexPage();
});