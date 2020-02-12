$(document).ready(function(){
    /** 
        Input Field
        Inicio
    **/
    $('div.input-field > label').click(function(event){
        var input = $(this).siblings('input.input-field');
        input.focus();
        var activeClass = $(this).hasClass('on-focus');
        if(!activeClass) {
            $(this).addClass('on-focus');
        }
    });

    $('input.input-field').focusout(function(event){
        var hasValue = $(this).val();
        if(hasValue === ""){
            $(this).siblings('label').removeClass('on-focus');
        }
        $(this).closest('div.input-field').removeClass('active');
    });

    $('input.input-field').focusin(function(event){
        $(this).siblings('label').addClass('on-focus');
        $(this).closest('div.input-field').addClass('active');
    });
    /*
        Fim
    */

    /*
        Select Field
        Inicio
    */

    $('div.select-field').click(function(event) {
        var ul = $(this).find('ul');
        var span = $(this).find('span');

        if($(this).hasClass('open')){
            $(this).removeClass('open');
            $(ul).removeClass('open');
            $(span).removeClass('open');
        } else {
            $(this).addClass('open');
            $(ul).addClass('open');
            $(span).addClass('open');
        }

        return false;
    });

    $('div.select-field ul>li').click(function(){

        var component = $(this).closest('div.select-field');
        var input = $(component).find('input');
        
        var ul = $(component).find('ul');
        var span = $(component).find('span');

        input.val($(this).text());

        $(component).removeClass('open');
        $(ul).removeClass('open');
        $(span).removeClass('open');

        $(component).addClass('active');

        return false;
    });
    
    $(document).mouseup(function(e){

        if($('div.select-field').is('.open') === true){
            $('div.select-field.open').each(function(e){
                var ul = $(this).find('ul');
                var span = $(this).find('span');

                $(this).removeClass('open');
                $(ul).removeClass('open');
                $(span).removeClass('open');
            });
        };

        return false;
    });
    
    /**
        Fim
    **/

    /**
        Accordion
        Fim
    **/
        $(".accordion_tab").click(function () {
            $(".accordion_tab").each(function () {
                $(this).parent().removeClass("active");
                $(this).removeClass("active");
            });
            $(this).parent().addClass("active");
            $(this).addClass("active");
        });

    /**
        Fim
    **/

});