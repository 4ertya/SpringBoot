$(document).ready(function(){
    $(".dws-form").on("click", ".tab", function() {
        // Удаляем классы active
        $(".dws-form").find(".active").removeClass("active");
    
        // Добавляем классы active
        $(this).addClass('active');
        $(".tab-form").eq($(this).index()).addClass("active")
    });
})