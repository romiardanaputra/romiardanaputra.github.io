// Accordion using JqueryUi
$(function () {
	$('#accordion').accordion({
		collapsible: true,
	});
});

// jquery for manipulating table
function htmlSchedule() {
	// html shchedule
	let htmlScheduleOdd = [`ABC-HBF-Claas1321`, `Practice HTML`, `HTML Basic Foundation`, `1 Hours`, `Liza`];
	let htmlScheduleEven = [`ABC-HBF-Claas1321`, `Theory HTML`, `HTML Basic Foundation`, `2 Hours`, `Liza`];
	let i = 0;
	for (i; i < 5; i++) {
		let tablehtmlItemOdd = $('<td></td>').text(htmlScheduleOdd[i]);
		$('.table-html-odd').append(tablehtmlItemOdd);
		let tablehtmlItemEven = $('<td></td>').text(htmlScheduleEven[i]);
		$('.table-html-even').append(tablehtmlItemEven);
	}
}
function cssSchedule() {
	// css shchedule
	let cssScheduleOdd = [`ABC-CBF-Claas1321`, `Practice css`, `css Basic Foundation`, `1 Hours`, `John Doe`];
	let cssScheduleEven = [`ABC-CBF-Claas1321`, `Theory css`, `css Basic Foundation`, `2 Hours`, `John Doe`];
	let i = 0;
	for (i; i < 5; i++) {
		let tablecssItemOdd = $('<td></td>').text(cssScheduleOdd[i]);
		$('.table-css-odd').append(tablecssItemOdd);
		let tablecssItemEven = $('<td></td>').text(cssScheduleEven[i]);
		$('.table-css-even').append(tablecssItemEven);
	}
}
function javascriptSchedule() {
	// javascript shchedule
	let javascriptScheduleOdd = [`ABC-JsBF-Claas1321`, `Practice javascript`, `javascript Basic Foundation`, `1 Hours`, `Jack Marco`];
	let javascriptScheduleEven = [`ABC-JsBF-Claas1321`, `Theory javascript`, `javascript Basic Foundation`, `2 Hours`, `Jack Marco`];
	let i = 0;
	for (i; i < 5; i++) {
		let tablejavascriptItemOdd = $('<td></td>').text(javascriptScheduleOdd[i]);
		$('.table-javascript-odd').append(tablejavascriptItemOdd);
		let tablejavascriptItemEven = $('<td></td>').text(javascriptScheduleEven[i]);
		$('.table-javascript-even').append(tablejavascriptItemEven);
	}
}
function phpSchedule() {
	// php shchedule
	let phpScheduleOdd = [`ABC-PBF-Claas1321`, `Practice php`, `php Basic Foundation`, `1 Hours`, `Luoiz Paul`];
	let phpScheduleEven = [`ABC-PBF-Claas1321`, `Theory php`, `php Basic Foundation`, `2 Hours`, `Luoiz Paul`];
	let i = 0;
	for (i; i < 5; i++) {
		let tablephpItemOdd = $('<td></td>').text(phpScheduleOdd[i]);
		$('.table-php-odd').append(tablephpItemOdd);
		let tablephpItemEven = $('<td></td>').text(phpScheduleEven[i]);
		$('.table-php-even').append(tablephpItemEven);
	}
}
function javaSchedule() {
	// java shchedule
	let javaScheduleOdd = [`ABC-JBF-Claas1321`, `Practice java`, `java Basic Foundation`, `1 Hours`, `John Paul`];
	let javaScheduleEven = [`ABC-JBF-Claas1321`, `Theory java`, `java Basic Foundation`, `2 Hours`, `John Paul`];
	let i = 0;
	for (i; i < 5; i++) {
		let tablejavaItemOdd = $('<td></td>').text(javaScheduleOdd[i]);
		$('.table-java-odd').append(tablejavaItemOdd);
		let tablejavaItemEven = $('<td></td>').text(javaScheduleEven[i]);
		$('.table-java-even').append(tablejavaItemEven);
	}
}
function jquerySchedule() {
	// jquery shchedule
	let jqueryScheduleOdd = [`ABC-JqBF-Claas1321`, `Practice jquery`, `jquery Basic Foundation`, `1 Hours`, `Ronald Sam`];
	let jqueryScheduleEven = [`ABC-JqBF-Claas1321`, `Theory jquery`, `jquery Basic Foundation`, `2 Hours`, `Ronald Sam`];
	let i = 0;
	for (i; i < 5; i++) {
		let tablejqueryItemOdd = $('<td></td>').text(jqueryScheduleOdd[i]);
		$('.table-jquery-odd').append(tablejqueryItemOdd);
		let tablejqueryItemEven = $('<td></td>').text(jqueryScheduleEven[i]);
		$('.table-jquery-even').append(tablejqueryItemEven);
	}
}
htmlSchedule();
cssSchedule();
javascriptSchedule();
jquerySchedule();
javaSchedule();
phpSchedule();
