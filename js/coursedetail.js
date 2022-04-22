
// adding some animation with jquery
$(window).on('load', function () {
	$('.card').each(function (i) {
		setTimeout(() => {
			$(".card").eq(i).addClass("animate-showup");
		}, 100 * (i + 1));
	});
});
