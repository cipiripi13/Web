$(function(){

var $galleryContainer = $('<div>');
$galleryContainer.addClass('.gallery');
$('body').append($galleryContainer);

$img = $('<img>');
$img.attr('src', 'https://images.pexels.com/photos/12567410/pexels-photo-12567410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');

$galleryContainer.append($img);

function addImg(node, imgUrl){
    $img = $('<img>');
    $img = attr('src', imgUrl);
    node.append($img)
}

var imgUrlarr = [
    'https://images.pexels.com/photos/12567410/pexels-photo-12567410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/12567410/pexels-photo-12567410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/12567410/pexels-photo-12567410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/12567410/pexels-photo-12567410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/12567410/pexels-photo-12567410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
];




})