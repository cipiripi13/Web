$(function(){

    console.log('Hello');

    var $firstLi = $('li:first');
    $firstLi.css({
        'border-bottom': '2px solid red'
    })
    $('li').css({
        'text-transform': 'uppercase'
    })
    $('.active').css({
        'color': 'orange'
    })
    var middleEl = Math.floor($('li').length/2);
    console.log(middleEl);
   $('li').eq(middleEl).css({
    'backgroundColor':'lightblue'
   })

});

