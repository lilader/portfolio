/**
* @author Sean Jacob
* @extends jquery
*/

$.fn.wf_carousel = function () {
    var carousel = $(this);

    if (carousel) {        

        var c_mask = $(carousel).children('.c_mask'),
        c_width = $(c_mask).outerWidth(),
        c_overflow = $(c_mask).children('.c_overflow'),
        c_slides = $(c_overflow).children('.c_slide'),
        c_count = $(c_slides).length,
        c_nav = $(carousel).children('.c_nav');

        $(c_overflow).children('.c_slide:nth-child(1)').addClass('active');
        $(c_nav).children('.c_anchor:nth-child(1)').addClass('active');

        carousel.find('.c_next').click(function (event) {
            c_current();

            if (c_position == c_count) { c_position = 0; }

            c_update(c_position + 1);

            $(c_overflow).stop(true, false).animate({ left: '-' + (c_position) * c_width +  'px' }, 'slow');
        });

        carousel.find('.c_prev').click(function (event) {
            c_current();

            if (c_position == 1) { c_position = c_count + 1; }

            c_update(c_position - 1);

            $(c_overflow).stop(true, false).animate({ left: '-' + (c_position-2) * c_width + 'px' }, 'slow');
        });

        carousel.find('.c_anchor').click(function (event) {
            c_current()

            c_position = $(this).index();

            c_update(c_position + 1);

            $(c_overflow).stop(true, false).animate({ left: '-' + (c_position) * c_width + 'px' }, 'slow');

        });

    }

    function c_current() {
        c_active = $(c_overflow).children('.c_slide.active');
        c_activeAnchor = $(c_nav).children('.c_anchor.active');
        c_position = $(c_active).index();
        c_position = c_position + 1;
    }

    function c_update(c_position) {
        $(c_active).removeClass('active');
        $(c_activeAnchor).removeClass('active');
        $(c_overflow).children('.c_slide:nth-child(' + c_position + ')').addClass('active');
        $(c_nav).children('.c_anchor:nth-child(' + c_position + ')').addClass('active');
    }
};

$(document).ready(function(){
$('#c_main').wf_carousel();
$('#c_second').wf_carousel();
$('#c_third').wf_carousel();
$('#c_fourth').wf_carousel();   
});