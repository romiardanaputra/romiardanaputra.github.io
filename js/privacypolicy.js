const getContent = document.getElementsByClassName('privacy-policy-content');

window.addEventListener('load', (e) => {
	setTimeout(() => {
		getContent[0].classList.add('animate-showup');
	}, 1000);
});
// ohover function
function onHover() {
	getContent[0].addEventListener('mouseover', (e) => {
		getContent[0].classList.add('animate-onHover');
	});
	getContent[0].addEventListener('mouseout', (e) => {
		getContent[0].classList.remove('animate-onHover');
    getContent[0].style.transition = ".1s";
	});
}

// execute the function
onHover();
