$(document).ready(function(){
    $("#hide-me").click(function(){
        $("*").hide();
    })

    $('#unhide').click(function(){
        $('*').show();
    })

    $('#hide-links').click(function(){
        $('[href]').hide();
    })

    $('#content').load('demo.txt');
})