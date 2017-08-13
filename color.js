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
                    html += '<div class="col-md-3 col-xs-10 color-box">'+
                    '<div class="bg-color" style="background-color:'+obj[o]+';"></div>'+
                    '<hr/>'+
                    '<a href="shades.html#'+key+'"><h5 class="text-center color-name">'+key +'</h5></a>'+
                    '<p class="text-center color-code"><b>HEX : </b>'+ obj[o] +'</p>'+
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