var $field = $('.container');
var $player = $('.player');
var $button = $('#button');
$player.css({
    position: 'absolute',
    top: '0',
    left: '0'
})
$button.css({
    'z-index': '1'
})

$field.on('click', function(event){
    var x = event.clientX;
    var y = event.clientY;
    //console.log(event);
    // console.log(x);
    // console.log(y);
    $player.css({
        top: y + 'px',
        left: x + 'px'
    })

    $button.on('click', function(event){
    location.reload()
    })
})