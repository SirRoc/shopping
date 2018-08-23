$(function () {
    $('.spzhanshisec').attr('location', 'html/详情页/xiangqing.html')
})


$(function () {
    // $('.fenleixx').click(function () {
    //     var _this = $(this)
    //     if (_this.parent().hasClass('is-shaixuanok')) {
    //         _this.parent().removeClass('is-shaixuanok')
    //     }
    //     else {
    //         _this.parent().siblings().removeClass('is-shaixuanok')
    //         _this.parent().addClass("is-shaixuanok")
    //     }

    // })

    // $('.shaixuanul li a').click(function () {
    //     $('.shaixuanul li a').removeClass('libgcolor')
    //     $(this).addClass('libgcolor')
    // })

    $('.subnavli').click(function () {
        // 初始化

        for (var i = 0; i < 8; i++) {
            var iconi = i + 1
            $('.iconimg').eq(i).attr('src', '../img/icon/icon_' + iconi + '_n.png')
        }
        // 当前点击的icon路径改变
        $(this).find('img').attr('src', '../img/icon/icon_' + ($(this).index() + 1) + '_s.png')


        // 筛选框边框
        $('.shaixuan').css('border', '1px solid #4f6f1f')
        console.log($(this).attr('class'))
        var bord = $(this).attr('class')
        if (bord == 'subnavli allgoods') {
            $('.shaixuan').css('display','none')
            $('.subnavli').find('img.xialaimg').remove();
        }else{
            $('.shaixuan').css('display','block')
        }

        // 初始化
        $('.subnavli').find('img.xialaimg').remove();
        var dbx = $('<img class="xialaimg" src="../img/icon/dbx1.png">')
        $(this).append(dbx)
    })

  


})

