$(function() {
    $.ajax({
        url: "news.json",
        dataType: "json",
    })

    .done(function(data) {
        $.each(data.news, function(key,value) {
            $("#section01 .news-list").append(`<li><dl><dt>${value.date}</dt><dd>${value.text}</dd></dl></li>`);
        });
    });
});