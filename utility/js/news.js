$.get('/news/add', function (response) {
    //console.log(response);
    var news = $('.news');

    for (var i = response.length - 1; i >= 0; i--) {
        var eachNews = response[i];
        var div = $("<div></div>").attr({"class": "jumbotron",
                                         "style": "margin:20px 250px 50px; padding:20px 40px 30px;"});
        var titleDiv = $("<div></div>").attr("class", "new-title");
        var contentDiv = $("<div></div>").attr("class", "news-content");
        var title = $("<h2></h2>").attr("class", "lead text-left").html(eachNews.title);
        var dateDiv = $("<div></div>").attr("class", "author-date");
        var date = new Date(eachNews.date);
        var dateContent = $("<h5></h5>").html(date.getMonth() + "/" + date.getDay() + "/" + date.getFullYear());
        dateDiv.append(dateContent);
        titleDiv.append(title);
        contentDiv.append(eachNews.content);
        div.append(titleDiv).append(dateDiv).append("<hr>").append(contentDiv);
        news.append(div);
    }
});
