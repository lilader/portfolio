var main = function(){

var $message = $('.message');
$message.addClass('fadeIn fast');

setTimeout(function(){
   $message.removeClass('fadeIn').addClass('fadeOut');
}, 5000);
};
$(document).ready(main);