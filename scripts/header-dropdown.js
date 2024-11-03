const burger = document.getElementById('burger');
const dropdown = document.getElementById('header-dropdown');
const dropdownList = document.querySelector('.header__dropnav_list');
const dropdownItems = document.querySelectorAll('.header__dropnav_item');

burger.addEventListener('click', toggleDropdown);
dropdownItems.forEach((item) => {
	item.addEventListener('click', toggleDropdown);
});

function toggleDropdown() {
	if (dropdown.classList.contains('header__dropdown_hidden')) {
		burger.checked = true;
		dropdown.classList.remove('header__dropdown_hidden');
		dropdown.style.display = 'flex';
		dropdownList.style.opacity = '1';
	} else {
		burger.checked = false;
		dropdown.classList.add('header__dropdown_hidden');
		dropdownList.style.opacity = '0';
		setTimeout(() => {
			dropdown.style.display = 'none';
		}, 450);
	}
}
