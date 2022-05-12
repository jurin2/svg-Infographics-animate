$(function(){
    let chart = $('.chart');

    chart.each(function(){
        let item = $(this);
        let title = item.find('h2');
        let targetNum = title.attr('data-num');
        let circle = item.find('circle');
        
        $({rate:0}).animate({rate:targetNum},{
            duration:1500,
            progress:function(){
                let now = this.rate;
                let amount = 628 - (628 * now / 100);
                title.text(Math.floor(now));
                circle.css({strokeDashoffset:amount});
            }
        });
    });
});