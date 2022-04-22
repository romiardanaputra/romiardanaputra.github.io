// select DOM
const getSectionContent1 = document.getElementsByClassName('section1-content')[0];
const getSectionContent2 = document.getElementsByClassName('section1-content')[1];
const getSectionContent3 = document.getElementsByClassName('section2-content')[0];
const section1_image = document.getElementsByClassName('section1-img')[0];
const section1_image2 = document.getElementsByClassName('section1-img2')[0];
const getWrapper2 = document.getElementsByClassName('wrapper')[1];
const getWrapper3 = document.getElementsByClassName('wrapper')[2];
const getWrapper4 = document.getElementsByClassName('wrapper')[3];
const getAllCard = document.querySelectorAll('.card');
// const get

// get the location
const getLocWrapper2 = getWrapper2.getBoundingClientRect().y;
const getLocWrapper3 = getWrapper3.getBoundingClientRect().y;
const getLocWrapper4 = getWrapper4.getBoundingClientRect().y;

// event handler

window.addEventListener('load', (e) => {
	getSectionContent1.classList.add('animate-showup');
	section1_image.classList.add('animate-showup');
});

window.addEventListener('scroll', (e) => {
	let wScroll = this.scrollY;
	if (wScroll > getLocWrapper2 - 100) {
		getSectionContent2.classList.add('animate-showup');
		section1_image2.classList.add('animate-showup');
	}
	if (wScroll > getLocWrapper3 - 100) {
		getSectionContent3.classList.add('animate-showup');
	}
	if (wScroll > getLocWrapper4 - 100) {
		getAllCard.forEach((getAllCard) => {
			getAllCard.classList.add('animate-showup');
		});
	}
});

cardProfileHover = () => {
	for (let i = 0; i < getAllCard.length; i++) {
		getAllCard[i].addEventListener('mouseover', () => {
			getAllCard[i].classList.add('animate-onHover');
		});
    getAllCard[i].addEventListener('mouseout', () => {
			getAllCard[i].classList.remove('animate-onHover');
      getAllCard[i].style.transition = ".1s";
		});
	}
};
//adding some hovering effect while mouse on the element
cardProfileHover();
