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
            html += '<div class="col-md-3 col-xs-10 color-box">'+
            '<div class="bg-color" style="background-color:'+value+';"></div>'+
            '<hr/>'+
            '<a href="shades.html#'+key+'"><h5 class="text-center color-name"><em>'+key +'</em></h5></a>'+
            '<p class="text-center color-code"><b>HEX : </b>'+ value +'</p>'+
            '</div>';
       }
        id.html(html);    
    });
};

$(document).ready(function(){
    generateShadesPage();
});