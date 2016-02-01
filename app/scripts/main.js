function enter(url) {
	$("content").load(url);
}


$(window).on("hashchange", function(){
	// console.log(location.hash);
	var hash = location.hash.substr(1);
	var page = "tamplates/" + hash + ".html";
	console.log(page)
	$("#content").load(page);
});
enter("tamplates/home.html");