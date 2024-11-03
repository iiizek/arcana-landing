const FRANCHISE = [
	'Вы владелец клуба и решения принимаются вами, по согласованию с УК.',
	'Вы платите роялти только от чистой прибыли. Никаких процентов с оборота у нас нет.',
	'Вы получаете все разработки, регламенты, правила и чек-листы, которые позволят вам выстроить работу в клубе.',
	'Бренд, фирменный стиль, логотип. Всё это также предоставляется нами.',
	'Вы занимаетесь открытием клуба с нашей поддержкой. Все этапы открытия проходим совместно.',
	'Поддержка по всем вопросам, навсегда. Столкнулись со сложностями? Мы поможем.',
];
const INVESTOR = [
	'Вы владелец клуба, но решения полностью наша зона ответственности.',
	'Увеличение чистой прибыль - полностью наша задача.',
	'Открытие клуба под нашим брендом. Все инновации внедряются в первую очередь.',
	'Каждый месяц получаете финансовый отчет по доходам и расходам клуба.',
	'Пассивных доход. Пока вы занимаетесь своими делами, клуб работает и приносит прибыль.',
	'Возможность вложиться в часть клуба обговаривается индивидуально.',
];
const CLUB = [
	'Бренд, фирменный стиль, цвета разрабатываются под вас нашими специалистами.',
	'Собственный бренд с возможностью масштабирования без помощи других.',
	'Вы платите только фиксированную сумму один раз.',
	'Рассказываем и показываем все подводные камни, на которых можно понести убытки.',
	'Все этапы открытия контролируются нами. Вы получаете готовый клуб с ремонтом и со всем оборудованием.',
	'6 месяцев поддержки клуба после открытия. Ответим и поможем с любыми вопросами по бизнесу.',
];

const franchise = document.getElementById('franchise');
const investor = document.getElementById('investor');
const club = document.getElementById('club');

const labelFranchise = franchise.closest('label');
const labelInvestor = investor.closest('label');
const labelClub = club.closest('label');

labelFranchise.classList.add('collaboration__label_active');

const collabList = document.getElementById('collab-list');

franchise.addEventListener('click', () => {
	step = 0;
	labelFranchise.classList.add('collaboration__label_active');
	labelInvestor.classList.remove('collaboration__label_active');
	labelClub.classList.remove('collaboration__label_active');
	setCollaboration(FRANCHISE);
});
investor.addEventListener('click', () => {
	step = 1;
	labelFranchise.classList.remove('collaboration__label_active');
	labelInvestor.classList.add('collaboration__label_active');
	labelClub.classList.remove('collaboration__label_active');
	setCollaboration(INVESTOR);
});
club.addEventListener('click', () => {
	labelFranchise.classList.remove('collaboration__label_active');
	labelInvestor.classList.remove('collaboration__label_active');
	labelClub.classList.add('collaboration__label_active');
	step = 2;
	setCollaboration(CLUB);
});

let step = 0;
const buttonNext = document.getElementById('collab-next');
const buttonPrev = document.getElementById('collab-prev');
const collabName = document.getElementById('collab-name');

buttonNext.addEventListener('click', () => {
	if (step < 2) {
		step++;
		setCollaborationOnStep();
	} else {
		step = 0;
		setCollaborationOnStep();
	}
});
buttonPrev.addEventListener('click', () => {
	if (step > 0) {
		step--;
		setCollaborationOnStep();
	} else {
		step = 2;
		setCollaborationOnStep();
	}
});

function setCollaboration(arr) {
	collabList.innerHTML = '';
	for (let i = 0; i < arr.length; i++) {
		collabList.innerHTML += `
      <div class="collaboration__content_item">
				<p>
          ${arr[i]}
				</p>
			</div>
    `;
	}
}

function setCollaborationOnStep() {
	if (step === 0) {
		collabName.textContent = 'Франчайзи';
		setCollaboration(FRANCHISE);
	} else if (step === 1) {
		collabName.textContent = 'Инвестор';
		setCollaboration(INVESTOR);
	} else if (step === 2) {
		collabName.textContent = 'Открытие под ключ';
		setCollaboration(CLUB);
	}
}
