
$(function () {

    // 移入改变图片
    $(".smallimgbox").click(function () {
        $(".smallimgbox").removeClass("smallimg")
        $(this).addClass("smallimg");
    })
    $('.tpxinxismall').find('img').mouseover(function () {
        // $(this).addClass('smallimg')
        var src = $(this).attr('data-src')
        console.log(src)
        $('.tpxinxibig img').attr('src', src)
    })
        // $('.tpxinxismall').find('img').mouseout(function(){
        //     // $(this).removeClass('smallimg')
        // })

    // tab切换
    $('.tabdiv').click(function () {
        $('.tabdiv').removeClass('tabcolor')
        $(this).addClass('tabcolor')
        var i = $(this).index()
        $('.xinxifl').eq(i).css('display', 'block').siblings().css('display', 'none')
    })
})

