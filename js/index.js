// making animation fade in out with Javascript

// get the element html
const card = document.querySelectorAll('.card');
const buttonBanner = document.getElementsByClassName('btn-banner')[0];
const getH1 = document.getElementsByClassName('getH1')[0];
const getCardWhyUs1 = document.getElementsByClassName('card_why-us')[0];
const getCardWhyUs2 = document.getElementsByClassName('card_why-us')[1];
// get the loaction of the window
const btnLocation = buttonBanner.getBoundingClientRect();
const getH1Loc = getH1.getBoundingClientRect();

// even listener

cardHoverSection2 = () => {
	for (let i = 0; i < card.length; i++) {
		card[i].addEventListener('mouseover', () => {
			card[i].classList.add('animate-onHover');
		});
		card[i].addEventListener('mouseout', () => {
			card[i].classList.remove('animate-onHover');
			card[i].style.transition = '.1s';
		});
	}
};

cardHoverSection3 = () => {
	getCardWhyUs1.addEventListener('mouseover', () => {
		getCardWhyUs1.classList.add('animate-onHover');
	});
	getCardWhyUs2.addEventListener('mouseover', () => {
		getCardWhyUs2.classList.add('animate-onHover');
	});
	getCardWhyUs1.addEventListener('mouseout', () => {
		getCardWhyUs1.classList.remove('animate-onHover');
		getCardWhyUs1.style.transition = '.1s';
	});
	getCardWhyUs2.addEventListener('mouseout', () => {
		getCardWhyUs2.classList.remove('animate-onHover');
		getCardWhyUs2.style.transition = '.1s';
	});
};

window.addEventListener('scroll', (e) => {
	let scrollY = this.scrollY;
	if (scrollY > btnLocation.y + 100) {
		card.forEach((card) => {
			card.classList.add('animate-showup');
		});
	}
	if (scrollY > getH1Loc.y - 100) {
		getCardWhyUs1.classList.add('animate-showup');
		getCardWhyUs2.classList.add('animate-showup');
	}
});
cardHoverSection2();
cardHoverSection3();




// jquery for banner parralax
$(window).scroll(function () {
	let wScroll = $(this).scrollTop();
	$('.banner-content').css({
		transform: 'translate(0px,' + wScroll / 3.8 + '%)',
	});
});

// give animation for hero banner
$(window).on('load', function () {
	$('.banner').css({
		opacity: '1',
		transition: '.8s',
	});
});
// giving animaton for banner content h1 p and button
$(window).on('load', function () {
	setTimeout(() => {
		$('.banner-content h1').addClass('animate-showup');
	}, 200);
});
$(window).on('load', function () {
	setTimeout(() => {
		$('.banner-content p').addClass('animate-showup');
	}, 300);
});
$(window).on('load', function () {
	setTimeout(() => {
		$('.banner-content button').addClass('animate-showup');
	}, 400);
});
