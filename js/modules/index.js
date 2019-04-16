$(document).ready(function() {
    //粒子插件
    $('#particles').particleground({
        dotColor: '#5cbdaa',
        lineColor: '#5cbdaa'
    });
    $('.intro').css({ 'margin-top': -($('.intro').height() / 2) });

    $('.play-link .button').click(function () {
        var type = $(this).data('type')
        location.href = `./dist/${type}/index.html`
    });
});
