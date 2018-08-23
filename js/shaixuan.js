
$(function () {
    $('.fenleixx').click(function () {
        var _this = $(this)
         if(_this.parent().hasClass('is-shaixuanok')){
            _this.parent().removeClass('is-shaixuanok')
         }
         else{
            _this.parent().siblings().removeClass('is-shaixuanok')
            _this.parent().addClass("is-shaixuanok")
         }
        
        //$(this).parent().siblings().addClass("filterinit")
            //$(this).parent().parent().siblings().css('height', '24px').removeClass('boxborder').find("img").attr('src', '../img/icon/下拉键 拷贝 4.png')
            //$(this).parent().parent().css('height', 'auto').addClass('boxborder').find("img").attr('src', '../img/icon/下拉键 拷贝 5.png')
    })



    $('.shaixuanul li a').click(function () {
        $('.shaixuanul li a').removeClass('libgcolor')
        $(this).addClass('libgcolor')
    })
})



