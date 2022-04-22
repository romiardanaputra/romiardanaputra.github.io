// dom selection
const getcolomn1 = document.getElementsByClassName('col-6')[0];
const getcolomn2 = document.getElementsByClassName('col-6')[1];

window.addEventListener('load', (e) => {
	getcolomn1.classList.add('animate-showup');
	getcolomn2.classList.add('animate-showup');
});
