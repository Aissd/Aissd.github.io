$(function(){
    $(document).on('click', '#toggleFade', function(){
        var target = $('#animatedbar');
        if(target.hasClass('fadeIn')) {
            target.removeClass('fadeIn').addClass('fadeOut');
        } else {
            target.removeClass('fadeOut').addClass('fadeIn');
        }
    });
});