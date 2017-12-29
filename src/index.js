// function ajax(url,callback){
//     var api ="http://10.18.2.131:3000";
//     $,ajax({
//         url : api+ url,
//         success : callback
//     })
// }
// ajax ('/header',function(data){
//     console.log(data);
//     var html ="<ul>";
//     for (var i=0 ; i<data.length ; i++){
//         var li =['<li><a href="#">',data[i],'</a><li>'];
//         html += li.join();
//     }
//     html += "</ul>"
//     $('#header').html(html);
//     $('#header ul').css('overflow','hidden');
//     $('header li').css({
//         "float":"left",
//         "listStyle" :"none",
//         "marginLeft": "5px"
//     });
// })


// function ajax(url,callback){
//     var api ="http://10.19.2.13"
//     $.ajax({
//         url : api+url,
//         success : callback
        
//     })
// }

// ajax('/header',function(data){
//     console.log(data);
//     var html ="<ul>";
//     for(var i=0 ;i<data.length ;i++){
//         var li =['<li><a href="#">',data[i],'</li></a>'];
//         html += li.join('');
//     }
//     htm +="</ul>";
//     $('#header').html(html);
//     $('#header ul').css("overflow","hidden");
//     $('#header li').css({
//         "float" :"left",
//         "listStyle":"none",
//         "marginLeft": "5px"
//     });
// })

// function ajax(url,callback){
//     var api ="http://10.18.2.131:3000";
//     $.ajax({
//         url : api+url,
//         success: callback
//     })
// }

// ajax('/header',function(data){
//     console.log(data);
//     var html ="<ul>";
//     for( i=0 ; i<data.length ; i++){
//         var li = ['<li><a href="#">',data[i],'</a></li>'];
//         html += li.join('');
//     }
//     html +="</ul>";
//     $('#header').html(html);
//     $('#header ul').css("overflow","hidden");
//     $('#header li').css({
//         "float":"left",
//         "listStyle":"none",
//         "marginLeft":"5px"
//     })

// })
function ajax(data,callback){
    var api ='http://10.18.2.131:3000';
    $.ajax({
        url :api+url,
        success :callback
    })
}
ajax('/header',function(data){
    console.log(data);
    var html ="<ul>";
    for (i=0 ;i<data.length ; i++){
        var li =['<li><a href="#">',data[i],'</a></li>'];
        html +=li.join('');
    }
    html +="</ul>";
    $('header')
        .html(html)
        .find('ul')
        .css('overflow','hidden')
        .find('li')
        .css({
            "float":"left",
            "listStyle" :"none",
            "marginLeft":"5px"
        })
})