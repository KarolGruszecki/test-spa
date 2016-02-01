function enter(url) {
    $("#content").load(url);
}


$(window).on("hashchange", function () {
    var hash = location.hash.substr(1);
    console.log(hash);

    var page = "templates/" + hash + ".html";
    console.log(page);

    enter(page);
});

enter("templates/home.html");
