let calculatorData = [
	{
		format: 'Инвестор',
		active: true,
		slider: [
			{
				progress: 33,
				value: '3 000 000',
				profitFrom: '1 месяца',
				payback: '28 месяцев',
				yearProfit: '1 260 000',
			},
			{
				progress: 66,
				value: '5 000 000',
				profitFrom: '1 месяца',
				payback: '28 месяцев',
				yearProfit: '2 100 000',
			},
			{
				progress: 99,
				value: '10 000 000',
				profitFrom: '1 месяца',
				payback: '28 месяцев',
				yearProfit: '4 200 000',
			},
		],
	},

	{
		format: 'Франшиза',
		active: false,
		slider: [
			{
				progress: 33,
				value: '6 000 000',
				profitFrom: '1 месяца',
				payback: '20 месяцев',
				yearProfit: '3 720 000',
			},
			{
				progress: 66,
				value: '9 000 000',
				profitFrom: '1 месяца',
				payback: '18 месяцев',
				yearProfit: '5 760 000',
			},
			{
				progress: 99,
				value: '11 000 000',
				profitFrom: '1 месяца',
				payback: '19 месяцев',
				yearProfit: '7 150 000',
			},
		],
	},

	{
		format: 'Открытие под ключ',
		active: false,
		slider: [
			{
				progress: 33,
				value: '7 000 000',
				profitFrom: '1 месяца',
				payback: '19 месяцев',
				yearProfit: '3 720 000',
			},
			{
				progress: 66,
				value: '10 000 000',
				profitFrom: '1 месяца',
				payback: '17 месяцев',
				yearProfit: '5 760 000',
			},
			{
				progress: 99,
				value: '12 000 000',
				profitFrom: '1 месяца',
				payback: '18 месяцев',
				yearProfit: '7 150 000',
			},
		],
	},
];

let calculatorDataActive = calculatorData.filter((item) => item.active);

const select = document.getElementById('calculator-select');
const selectActive = document.getElementById('calculator-select-active');
const selectArrow = document.getElementById('calculator-select-arrow');
const selectList = document.getElementById('calculator-select-list');

const profitFrom = document.getElementById('calculator-profit-from');
const payback = document.getElementById('calculator-payback');
const yearProfit = document.getElementById('calculator-year-profit');

function renderSelectList() {
	selectList.innerHTML = '';
	for (let i = 0; i < calculatorData.length; i++) {
		if (calculatorData[i].active) {
			selectActive.textContent = calculatorData[i].format;
		} else {
			selectList.innerHTML += `
				<li class="calculator__select_option">${calculatorData[i].format}</li>
			`;
		}
	}
	const selectOptions = document.querySelectorAll('.calculator__select_option');
	selectOptions.forEach((item) => {
		item.addEventListener('click', selectOption);
	});
}
renderSelectList();

const slider = document.getElementById('slider');
slider.value = calculatorDataActive[0].slider[0].progress;
const sliderProgress = document.querySelector('.calculator__range_progress');
const sliderRange = document.getElementById('slider-range');
sliderRange.innerText = calculatorDataActive[0].slider[0].value;
let sliderValue = slider.value;

select.addEventListener('click', toggleSelect);
slider.addEventListener('input', updateSlider);
updateSlider();

function toggleSelect() {
	if (selectList.classList.contains('calculator__select_opened')) {
		selectList.classList.remove('calculator__select_opened');
		selectArrow.style.transform = 'rotate(0deg)';
	} else {
		selectList.classList.add('calculator__select_opened');
		selectArrow.style.transform = 'rotate(180deg)';
	}
}

function selectOption(e) {
	selectActive.textContent = e.target.textContent;
	for (let i = 0; i < calculatorData.length; i++) {
		if (calculatorData[i].format === this.textContent) {
			calculatorData[i].active = true;
			calculatorDataActive = calculatorData.filter((item) => item.active);
			updateSlider();
		} else {
			calculatorData[i].active = false;
		}
	}
	renderSelectList();
}

function updateSlider() {
	sliderValue = slider.value;
	const percentage = sliderValue + '%';
	sliderProgress.style.width = percentage;

	setSliderRange();
	updateInfo();
}

function setSliderRange() {
	for (let i = 0; i < calculatorDataActive[0].slider.length; i++) {
		if (Number(sliderValue) === 0) {
			sliderRange.innerText = '0';
		}
		if (Number(sliderValue) === calculatorDataActive[0].slider[i].progress) {
			sliderRange.innerText = calculatorDataActive[0].slider[i].value;
		}
	}
}

function updateInfo() {
	if (sliderValue === '0') {
		profitFrom.innerText = '0 месяцев';
		payback.innerText = '0 месяцев';
		yearProfit.innerText = '0';
	} else {
		const activeData = calculatorDataActive[0];
		const activeSliderData = activeData.slider.find(
			(item) => item.progress === Number(sliderValue)
		);
		profitFrom.innerText = activeSliderData.profitFrom;
		payback.innerText = activeSliderData.payback;
		yearProfit.innerText = activeSliderData.yearProfit;
	}
}
