const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach((item) => {
	item.addEventListener('click', toggleFaq);
});

function toggleFaq(e) {
	const item = e.currentTarget;
	const text = item.querySelector('.faq__item_text');
	const icon = item.querySelector('.faq-icon');
	const activeIcon = item.querySelector('.faq-icon-active');

	if (text.style.display === 'block') {
		text.style.display = 'none';
		activeIcon.style.display = 'none';
		icon.style.display = 'block';
	} else {
		text.style.display = 'block';
		activeIcon.style.display = 'block';
		icon.style.display = 'none';
	}
}
