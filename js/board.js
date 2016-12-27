// board
$(document).ready(function() {
    $('.thumbnail').hover(
        function(){
            $(this).find('.caption').fadeIn(200);
        },
        function(){
            $(this).find('.caption').fadeOut(200);
        }
    );
});

$(document).ready(function() {
    $('.board-popup').magnificPopup({
        type: 'ajax',
        alignTop: true,
        overflowY: 'scroll'
    });
});