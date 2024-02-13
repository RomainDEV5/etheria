
$(document).ready(function(){
    $('.dropdown').on('click', function(e){
        e.stopPropagation();
        $(this).find('.dropdown-menu').toggle();
    });

    $(document).on('click', function(e){
        if (!$(e.target).closest('.dropdown').length){
            $('.dropdown-menu').hide();
        }
    });
});