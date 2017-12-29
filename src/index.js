function ajax(url,callback){
    var api ="http://10.18.2.131:3000";
    $,ajax({
        url : api+ url,
        success : callback
    })
}
ajax ('/header',function(data){
    console.log(data);
    var html ="<ul>";
    for (var i=0 ; i<data.length ; i++){
        var li =['<li><a href="#">',data[i],'</a><li>'];
        html += li.join();
    }
    html += "</ul>"
    $('#header').html(html);
    $('#header ul').css('overflow','hidden');
    $('header li').css({
        "float":"left",
        "listStyle" :"none",
        "marginLeft": "5px"
    });
})