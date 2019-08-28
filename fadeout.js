var main = function(){

var $message = $('.message');
$message.addClass('fadeIn fast');

setTimeout(function(){
   $message.removeClass('fadeIn').addClass('fadeOut');
}, 7000);
};
$(document).ready(main);