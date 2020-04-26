// state
let schedules = [];
let travels = [];
let airlines = [];
let lodgings = [];
let travelId = '';
let removeTId = '';
let removeSId = '';
let navState = 'home';

// DOMs
const $timeWarningText = document.querySelector('#end-warning-label');
const $dateWarningText = document.querySelector('#newend-warning-label');
const $menuList = document.querySelector('.menu-list');
const $mainList = document.querySelector('.main-wrapper');
const $logo = document.querySelector('h1');
const $menuBar = document.querySelector('.menu-bar');
const $header = document.querySelector('.header h2');
const $startHour = document.querySelector('#start-hour-select');
const $startMin = document.querySelector('#start-min-select');
const $endHour = document.querySelector('#end-hour-select');
const $endMin = document.querySelector('#end-min-select');
const $addScheduleBtn = document.querySelector('.add-schedule-btn');
const $newTravelPopup = document.querySelector('.new-travel-popup');
const $inputTravelTitle = document.querySelector('.input-title');
const $inputTravelPlace = document.querySelector('.input-place');
const $inputSchedulePlace = document.querySelector('#schedule-input-place');
const $inputScheduleDetail = document.querySelector('#schedule-input-detail');
const $startYear = $newTravelPopup.querySelector('#start-year-select');
const $startMonth = $newTravelPopup.querySelector('#start-month-select');
const $startDate = $newTravelPopup.querySelector('#start-day-select');
const $endYear = $newTravelPopup.querySelector('#end-year-select');
const $endMonth = $newTravelPopup.querySelector('#end-month-select');
const $endDate = $newTravelPopup.querySelector('#end-day-select');
const $travelList = document.querySelector('.travel-list');
const $addTravelBtn = document.querySelector('.add-travel-btn');
const $travelPopupBg = document.querySelector('.new-travel-popup-bg');
const $newSchedulePopUp = document.querySelector('.new-schedule-popup');
const $schedulePopupBg = document.querySelector('.popup-bg');
const $scheduleList = document.querySelector('.schedule-list');
const $dateList = document.querySelector('.date-list');
const $alertDeleteBtn = document.querySelector('.alert-delete-btn');
const $alertCancleBtn = document.querySelector('.alert-cancel-btn');
const $alertPopup = document.querySelector('.alert-popup');
const $alertPopupBg = document.querySelector('.alert-popup-bg');
const $newScheduleBtn = document.querySelector('.new-schedule-btn');
const $timelineDeleteBtn = document.querySelector('.timeline-delete-btn');
const $timelineCancleBtn = document.querySelector('.timeline-cancle-btn');
const $timelineAlertPopup = document.querySelector('.timeline-popup');
const $timeAlertPopupBg = document.querySelector('.timeline-popup-bg');
const $travelNoneText = document.querySelector('.travel-none-text');
const $timelineTitle = document.querySelector('.timeline-travel-title');
const $infoTitle = document.querySelector('.info-travel-title');
const $popupBg = document.querySelector('.popup-bg');
const $popupRemoveBtn = document.querySelector('.popup-remove-btn');
const $airlineTicket = document.querySelector('.airline-ticket');
const $airlineSchedule = document.querySelector('.airline-schedule');
const $airlinePopupBg = document.querySelector('.airlineBg');
const $hotelPopup = document.querySelector('.new-info-popup2');
const $airlinePopup = document.querySelector('.new-info-popup');
const $airlineAddBtn = document.querySelector('.airlineAddBtn');
const $airlinePopupRemove = document.querySelector('.airlineRemoveBtn');
const $hotelBtn = document.querySelector('.hotel-btn');
const $airlineBtn = document.querySelector('.airline-btn');
const $hotelPopupRemove = document.querySelector('.hotelRemoveBtn');
const $hotelAddBtn = document.querySelector('.hotelAddBtn');
const $hotelPopupBg = document.querySelector('.hotelBg');
const $depMonthSelect = document.querySelector('#airline-month-select');
const $depDaySelect = document.querySelector('#airline-day-select');
const $inputAirline = document.querySelector('.select-start-date > .input-airlines');
const $depHourSelect = document.querySelector('#airline-hour-select');
const $depMinSelect = document.querySelector('#airline-min-select');
const $inputDepAirport = document.querySelector('.select-start-hour > .dep-airlines');
const $depArrMinSelect = document.querySelector('#dep-airline-min-select');
const $depArrHourSelect = document.querySelector('#dep-airline-hour-select');
const $inputDepArrAirport = document.querySelector('.arr-airlines');
const $inputHotelName = document.querySelector('.new-info-popup2 > .input-title');
const $inputHotelPlace = document.querySelector('.new-info-popup2 > .input-place');
const $inputHotelSite = document.querySelector('.new-info-popup2 > .input-site');
const $arrMonthSelect = document.querySelector('#arrival-month-select');
const $arrDaySelect = document.querySelector('#arrival-day-select');
const $inputArrAirline = document.querySelector('.arr-input');
const $arrHourSelect = document.querySelector('#arrival-hour-select');
const $arrMinSelect = document.querySelector('#arrival-min-select');
const $inputArrDepAirport = document.querySelector('.select-start-hour > .arr-airlines');
const $ArrDepHourSelect = document.querySelector('#dep-arrival-hour-select');
const $ArrDepMinSelect = document.querySelector('#dep-arrival-min-select');
const $inputArrAirport = document.querySelector('.dep-arr-airline');
const $scheduleHiddenBtn = document.querySelector('.add-schedule-btn-hidden');
const $newInfoBtn = document.querySelector('.new-info-btn');
const $lodgingScheduleList = document.querySelector('.lodging-schedule');
const $allMoreBtn = document.querySelector('.detail-btn-wrapper');
const $headerInfo = document.querySelector('.main-info header');
const $hotelInfo = document.querySelector('.hotel-info');
const $endHourSelects = document.querySelectorAll('.select-end-hour > .select-wrapper > .hour-select');
const $startHourSelects = document.querySelectorAll('.select-start-hour > .select-wrapper > .hour-select');
const $endMinuteSelects = document.querySelectorAll('.select-end-hour > .select-wrapper > .min-select');
const $startMinuteSelects = document.querySelectorAll('.select-start-hour > .select-wrapper > .min-select');
const $startHourSelect = document.getElementById('start-hour-select');
const $startMinSelect = document.getElementById('start-min-select');
const $endHourSelect = document.getElementById('end-hour-select');
const $endMinSelect = document.getElementById('end-min-select');
const $newAirlineBtn = document.querySelector('.airline-btn');
const $introWrapper = document.querySelector('.intro-wrapper');

// functions
// popups
const closePopup = () => {
  $menuBar.style.filter = 'blur(0px)';
  $headerH2.style.filter = 'blur(0px)';
  $mainSchedule.style.filter = 'blur(0px)';
  $newSchedulePopUp.style.display = 'none';
  $popupBg.style.display = 'none';
  resetSchedulePopup();
};

const resetSchedulePopup = () => {
  $inputSchedulePlace.value = '';
  $inputScheduleDetail.value = '';
  $timeWarningText.style.display = 'none';
  $scheduleHiddenBtn.style.display = 'block';
};

const resetTravelPopup = () => {
  $inputTravelTitle.value = '';
  $inputTravelPlace.value = '';
  $dateWarningText.style.display = 'none';
};

const closeSchedulePopup = () => {
  $menuBar.style.filter = 'blur(0px)';
  $headerH2.style.filter = 'blur(0px)';
  $mainSchedule.style.filter = 'blur(0px)';
  $newSchedulePopUp.style.display = 'none';
  $schedulePopupBg.style.display = 'none';
  resetSchedulePopup();
};

const closeTravelPopup = () => {
  $menuBar.style.filter = 'blur(0px)';
  $header.style.filter = 'blur(0px)';
  $travelList.style.filter = 'blur(0px)';
  $travelPopupBg.style.display = 'none';
  $newTravelPopup.style.display = 'none';
  resetTravelPopup();
};

const closeTravelAlertPopup = () => {
  $alertPopup.style.display = 'none';
  $alertPopupBg.style.display = 'none';
};

$alertPopupBg.addEventListener('click', closeTravelAlertPopup);

const closeScheduleAlertPopup = () => {
  $timelineAlertPopup.style.display = 'none';
  $timeAlertPopupBg.style.display = 'none';
};

$timeAlertPopupBg.addEventListener('click', closeScheduleAlertPopup);

// nav bar
const changeNav = target => {
  if (!target.matches('.menu-list i')) return;
  navState = target.matches('i.fa-home') ? 'home' : target.parentNode.id;

  [...$menuList.children].forEach(menuItem => menuItem.classList.toggle('active', menuItem.id === target.parentNode.id));
  [...$mainList.children].forEach(main => main.classList.toggle('main-view', main.id === 'main-' + target.parentNode.id));

  if (navState === 'home') {
    const [homeMenu, ...removeMenus] = [...$menuList.children];
    removeMenus.forEach(menuIcon => (menuIcon.style.display = 'none'));
    $timelineTitle.classList = 'timeline-travel-title';
    $infoTitle.classList = 'info-travel-title';
  }
  if (navState === 'airplane') {
    getAirlineData();
    getLodgingData();
  }
};

// travel list
const generateId = () => (travels.length ? Math.max(...travels.map(({ id }) => id)) + 1 : 1);

const generateDday = startDate => {
  let dDay = 0;
  let today = new Date();

  today = today.getTime();
  dDay = new Date(startDate).getTime();
  dDay = Math.ceil((dDay - today) / 86400000);

  return dDay > 0 ? `D-${dDay}` : dDay === 0 ? 'D-Day' : '';
};

const sortTravels = travels => {
  const today = new Date();
  const newTravels = travels.filter(travel => new Date(travel.startDate) > today);
  const pastTravels = travels.filter(travel => new Date(travel.startDate) < today);

  newTravels.sort((trav1, trav2) => trav2.startDate < trav1.startDate ? 1 : (trav1.startDate < trav2.startDate ? -1 : 0))
  pastTravels.sort((trav1, trav2) => trav2.startDate > trav1.startDate ? 1 : (trav1.startDate > trav2.startDate ? -1 : 0));

  return travels = [...newTravels, ...pastTravels];
};

const renderTravelList = () => {
  let html = '';
  let bg = 0;

  $travelNoneText.style.display = travels.length === 0 ? 'block' : 'none';

  travels = sortTravels(travels);

  travels.forEach(({ id, title, place, startDate, endDate }) => {
    bg++;
    html += ` <li id="t-${id}" class="bg-${bg % 8}">
          <h2>${title}</h2>
          <em>${generateDday(startDate)}</em>
          <div class="travel-info">
            <span class="travel-place">${place}</span>
            <span class="travel-date">${startDate} ~ ${endDate}</span>
          </div>
          <button class="travel-remove-btn">X</button>
        </li>`;
  });

  $travelList.innerHTML = html;
};

const getTravels = async () => {
  const { data } = await axios.get('/travels');
  travels = data;

  renderTravelList();
  updateTransition();
};

const removeTravel = async removeTId => {
  await axios.delete(`/travels/${removeTId}`);
  travels = travels.filter(travel => travel.id !== +removeTId);
  renderTravelList();

  $alertPopupBg.style.display = 'none';
  $alertPopup.style.display = 'none';
};

// time line
const sortTimeline = schedules => {
  const timelineBlocks = $scheduleList.querySelectorAll('.schedule');
  let i = 0;

  timelineBlocks.forEach(block => {
    const hourHeight = 76;
    const hhFrom = +schedules[i].timeFrom.split(':')[0];
    const mmFrom = +schedules[i].timeFrom.split(':')[1];
    const hhTo = +schedules[i].timeTo.split(':')[0];
    const mmTo = +schedules[i].timeTo.split(':')[1];
    const mmDiff = mmFrom > mmTo ? 60 - (mmFrom - mmTo) : mmTo - mmFrom;
    const hhDiff = mmFrom > mmTo ? hhTo - hhFrom - 1 : hhTo - hhFrom;
    const top = hourHeight * (hhFrom - 7) + (hourHeight / 6) * (mmFrom / 10);
    const height = hourHeight * hhDiff + (hourHeight / 6) * (mmDiff / 10);

    block.style.top = `${top}px`;
    block.style.height = height < hourHeight ? 'hourHeight' : `${height}px`;
    [...block.children].forEach(child => (child.style.display = height <= hourHeight ? 'inline' : 'block'));

    i++;
  });
};

const renderMonthYear = (month, year) => {
  const $monthYearBox = document.querySelector('.timeline-wrapper > h3');
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  $monthYearBox.textContent = `${months[month - 1]}, ${year}`;
};

// 날짜 세서 렌더하는 기능
let travelPeriod = 0;
let dateItemMove = 0;

const dateList = document.querySelector('.date-list');
const beforeBtn = document.querySelector('.date-before-btn');
const afterBtn = document.querySelector('.date-after-btn');




const renderDateBox = (startDate, endDate) => {
  let html = '';
  const oneDay = 86400000;

  travelPeriod = new Date(endDate).getTime() - new Date(startDate).getTime();
  travelPeriod = Math.ceil(travelPeriod / oneDay) + 1;

  const travelArr = Array.from({ length: travelPeriod }, function (v, i) {
    let newDay = new Date(startDate);
    newDay = new Date(newDay.getTime() + oneDay * i);

    return [...new String(newDay)];
  });

  travelArr.forEach(travel => {
    const day = travel.splice(0, 3).join('');
    let month = travel.splice(1, 3).join('');
    const date = travel[2] === '0' ? travel.splice(2, 2)[1] : travel.splice(2, 2).join('');
    const year = travel.splice(3, 4).join('');

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    month = months.findIndex(mm => mm === month) + 1;

    html += `<li class="date-item">
        <div class="day ${year} ${month}">${date}</div>
        <div class="week ${year} ${month}">${day}</div>
      </li>`;
  });

  $dateList.innerHTML = html;

  afterBtn.style.opacity = travelPeriod <= 9 ? '0.3' : '1';
  beforeBtn.style.opacity = '0.3';
  $dateList.firstElementChild.classList.add('active');
};

// 날짜 화살표 클릭 시 이동하는 기능
function moveDatetoPrev({ target }) {
  if (!target.matches('.date-before-btn')) return;
  if (travelPeriod > 9) afterBtn.style.opacity = '1';
  dateItemMove -= 84;

  if (dateItemMove <= 0) {
    dateItemMove = 0;
    beforeBtn.style.opacity = '0.3';
  }

  dateList.style.transform = `translate3D(-${dateItemMove}px, 0, 0)`;
  dateList.style.transition = 'all 0.3s ease-out';
}

function moveDatetoNext({ target }) {
  if (!target.matches('.date-after-btn')) return;
  if (travelPeriod < 9) {
    beforeBtn.style.opacity = '0.3';
    return;
  }

  beforeBtn.style.opacity = '1';
  let moveLimit = (travelPeriod - 9) * 84;
  dateItemMove += 84;

  if (dateItemMove > moveLimit) {
    dateItemMove = moveLimit;
    afterBtn.style.opacity = '0.3';
  }

  dateList.style.transform = `translate3D(-${dateItemMove}px, 0, 0)`;
  dateList.style.transition = 'all 0.3s ease-out';
}

$travelList.addEventListener('click', () => {
  dateList.style.transform = `translate3D(0, 0, 0)`;
  dateItemMove = 0;
});

beforeBtn.addEventListener('click', moveDatetoPrev);
afterBtn.addEventListener('click', moveDatetoNext);

const renderTimeline = schedules => {
  let html = '';

  schedules.forEach(({ travelId, timeFrom, place, detail, id }) => {
    html += `<li class="schedule color-${id % 4}" id="${travelId}-${id}">
            <div class="time">${timeFrom}</div>
            <div class="place">${place}</div>
            <div class="detail">${detail}</div>
            <button class="remove-btn">X</button>
          </li>`;
  });

  $scheduleList.innerHTML = html;
  sortTimeline(schedules);
};

const getSchedules = async travelId => {
  const month = $dateList.querySelector('.active').firstElementChild.classList[2];
  const date = $dateList.querySelector('.active').firstElementChild.textContent;
  const { data } = await axios.get(`/schedules?travelId=${travelId}&date=${month}/${date}`);
  schedules = data;

  renderTimeline(schedules);
};

const addSchedule = async () => {
  const mm = $dateList.querySelector('.active').firstElementChild.classList[2];
  const dd = $dateList.querySelector('.active').firstElementChild.textContent;
  const date = `${mm}/${dd}`;
  const timeFrom = `${$startHour.value}:${$startMin.value}`;
  const timeTo = `${$endHour.value}:${$endMin.value}`;
  const place = $inputSchedulePlace.value;
  const detail = $inputScheduleDetail.value;

  const { data } = await axios.post('/schedules', { travelId, date, timeFrom, timeTo, place, detail });
  schedules = [data, ...schedules];

  closeSchedulePopup();
  renderTimeline(schedules);
  resetSchedulePopup();
};

const tabDate = target => {
  if (target.nodeName === 'LI') {
    const year = target.firstElementChild.classList[1];
    const month = target.firstElementChild.classList[2];
    renderMonthYear(month, year);
  }

  if (target.nodeName === 'DIV') {
    const year = target.classList[1];
    const month = target.classList[2];
    renderMonthYear(month, year);
  }

  getSchedules(travelId);
};

const toggleActiveDate = target => {
  if (!target.matches('.date-list > li') && !target.matches('.date-list > li > div')) return;
  [...$dateList.children].forEach(date => date.classList.toggle('active', target === date || target.parentNode === date));
};

const removeSchedule = async removeSId => {
  await axios.delete(`/schedules/${removeSId}`);
  schedules = schedules.filter(schedule => schedule.id !== parseInt(removeSId));
  renderTimeline(schedules);

  $timeAlertPopupBg.style.display = 'none';
  $timelineAlertPopup.style.display = 'none';
};

const getTitle = (title, travelBg) => {
  $timelineTitle.textContent = title;
  $timelineTitle.classList.add(travelBg);
  $infoTitle.textContent = title;
  $infoTitle.classList.add(travelBg);
};

function dateTransition() {
  const $dateItems = document.querySelectorAll('.date-list li');
  let i = 0;
  $dateItems.forEach(item => {
    i++;
    item.style.animationDelay = `${i * 80}ms`
  });
}

const goToTimeline = async target => {
  const nodeNames = ['LI', 'EM', 'SPAN', 'DIV', 'H2'];
  const targetNode = nodeNames.filter(node => node === target.nodeName)[0];
  const timeline = document.getElementById('main-calendar');
  const home = document.getElementById('main-home');
  let travelBg = '';
  if (!targetNode) return;

  if (targetNode === 'LI') {
    travelId = target.id.split('-')[1];
    travelBg = target.classList[0];
  } else if (targetNode === 'SPAN') {
    travelId = target.parentNode.parentNode.id.split('-')[1];
    travelBg = target.parentNode.parentNode.classList[0];
  } else if (targetNode !== 'LI' && targetNode !== 'SPAN') {
    travelId = target.parentNode.id.split('-')[1];
    travelBg = target.parentNode.classList[0];
  }

  const {
    data: { startDate, endDate, title },
  } = await axios.get(`/travels/${travelId}`);

  timeline.classList.add('main-view');
  home.classList.remove('main-view');

  [...$menuList.children].forEach(icon => {
    icon.style.display = 'block';
    icon.classList.toggle('active', icon.id === 'calendar');
  });

  getTitle(title, travelBg);
  renderDateBox(startDate, endDate);
  dateTransition();
  getSchedules(travelId);
  renderMonthYear(startDate.split('/')[1], startDate.split('/')[0]);
};

// loading transition

function updateTransition() {
  const $travelItems = document.querySelectorAll('.travel-list li');
  let i = 0;
  $travelItems.forEach(item => {
    i++;
    item.style.animationDelay = `${i * 200}ms`;
  });
}

// event handlers
window.onload = getTravels;

$menuList.addEventListener('click', ({ target }) => changeNav(target));

$logo.addEventListener('click', getTravels);
$logo.addEventListener('click', ({ target }) => {
  if (target.matches('h1 > i') || target.matches('h1')) changeNav(document.querySelector('i.fa-home'));
});

//x버튼을 누르면 팝업창 종료
$popupRemoveBtn.addEventListener('click', closePopup);
$addScheduleBtn.addEventListener('click', addSchedule);

$popupBg.onclick = () => {
  closePopup();
  resetSchedulePopup();
};

const $mainSchedule = document.querySelector('.timeline-wrapper');
const $headerH2 = document.querySelector('.main-schedule .header h2');

$newScheduleBtn.onclick = () => {
  $menuBar.style.filter = 'blur(3px)';
  $headerH2.style.filter = 'blur(3px)';
  $mainSchedule.style.filter = 'blur(3px)';
  $newSchedulePopUp.style.display = 'block';
  $popupBg.style.display = 'block';
};

$addTravelBtn.onclick = async () => {
  const title = $inputTravelTitle.value.trim();
  const place = $inputTravelPlace.value.trim();
  const startDate = `${$startYear.value}/${$startMonth.value}/${$startDate.value}`;
  const endDate = `${$endYear.value}/${$endMonth.value}/${$endDate.value}`;
  const newId = generateId();

  const { data } = await axios.post('/travels', {
    id: newId,
    title,
    place,
    startDate,
    endDate,
  });
  travels = [data, ...travels];

  closeTravelPopup();
  renderTravelList();
  resetTravelPopup();
};

$dateList.addEventListener('click', ({ target }) => toggleActiveDate(target));
$dateList.addEventListener('click', ({ target }) => tabDate(target));

$travelList.addEventListener('click', ({ target }) => goToTimeline(target));

$travelList.onclick = ({ target }) => {
  if (!target.matches('.travel-list > li > .travel-remove-btn')) return;
  removeTId = target.parentNode.id.split('-')[1];

  $alertPopupBg.style.display = 'block';
  $alertPopup.style.display = 'block';
};

$alertDeleteBtn.addEventListener('click', () => removeTravel(removeTId));

$alertCancleBtn.onclick = () => {
  $alertPopupBg.style.display = 'none';
  $alertPopup.style.display = 'none';
};

$scheduleList.onclick = ({ target }) => {
  if (!target.matches('.schedule-list > li > .remove-btn')) return;
  removeSId = target.parentNode.id.split('-')[1];

  $timeAlertPopupBg.style.display = 'block';
  $timelineAlertPopup.style.display = 'block';
};

$timelineDeleteBtn.addEventListener('click', () => removeSchedule(removeSId));

$timelineCancleBtn.onclick = () => {
  $timeAlertPopupBg.style.display = 'none';
  $timelineAlertPopup.style.display = 'none';
};

// time test
const changeEndHour = () => {
  [...$endHourSelect.options].forEach(opt => {
    if (opt.value === $startHourSelect.value) opt.setAttribute('selected', 'selected');
  });
};

const changeEndMin = () => {
  [...$endMinSelect.options].forEach(opt => {
    if (opt.value === $startMinSelect.value) opt.setAttribute('selected', 'selected');
  });
};

const printStartTime = () => {
  let hour = Array.from({ length: 17 }, function (v, i) {
    return i + 7;
  });
  let minute = Array.from({ length: 6 }, function (v, i) {
    return i * 10;
  });

  $startHourSelects.forEach(hourSelect => {
    hour.forEach((element, key) => {
      hourSelect[key] = new Option(`${element} 시`, element);
    });
  });

  $startMinuteSelects.forEach(minuteSelect => {
    minute.forEach((element, key) => {
      minuteSelect[key] = new Option(`${element} 분`, (key - 1) * 10);
      if (element === 0) minuteSelect[key] = new Option(`${element}0 분`, '00');
    });
  });
};

const printEndTime = target => {
  let hour = Array.from({ length: 17 }, function (v, i) {
    return i + 7;
  });
  let minute = Array.from({ length: 6 }, function (v, i) {
    return i * 10;
  });

  $endHourSelects.forEach(hourSelect => {
    hour.forEach((element, key) => {
      hourSelect[key] = new Option(`${element} 시`, element);
    });
  });

  $endMinuteSelects.forEach(minuteSelect => {
    minute.forEach((element, key) => {
      minuteSelect[key] = new Option(`${element} 분`, (key - 1) * 10);
      if (element === 0) minuteSelect[key] = new Option(`${element}0 분`, '00');
    });
  });
};

$newScheduleBtn.addEventListener('click', printStartTime);
$newScheduleBtn.addEventListener('click', printEndTime);

$newAirlineBtn.addEventListener('click', printStartTime);
$newAirlineBtn.addEventListener('click', printEndTime);

$startHourSelect.addEventListener('change', changeEndHour);
$startMinSelect.addEventListener('change', changeEndMin);

// travel info
//RENDER
const renderAirlineInfo = () => {
  let html = '';

  airlines.forEach(({ travelId, type, id, date, airplaneName, departureTime, departureAirport, arrivalTime, arrivalAirport }) => {
    html += `<li id=${travelId}-${id} class="airline-schedule-detail clearfix">
    <div class="airline-info1 airline-departure">
      <em>${type === 'departure' ? '출발' : '도착'}</em>
    </div>
    <div class="airline-info2 departure-info-date">
      <span class="date">${date}</span>
      <span class="airlines">${airplaneName}</span>
    </div>
    <div class="airline-departure departure-airline-time">
      <span class="time">${departureTime}</span>
      <span class="airport">${departureAirport}</span>
    </div>
    <div class="airline-arrival departure-arrival-time">
      <span class="time">${arrivalTime}</span>
      <span class="airport">${arrivalAirport}</span>
    </div>
  </li>`;
  });

  $airlineSchedule.innerHTML = html;
};

const getAirlineData = async () => {
  const { data } = await axios.get(`/airlines?travelId=${travelId}`);
  airlines = data;

  renderAirlineInfo();
};

const resetAirlinePopup = () => {
  $inputAirline.value = '';
  $inputDepAirport.value = '';
  $inputDepArrAirport.value = '';
  $inputArrAirline.value = '';
  $inputArrDepAirport.value = '';
  $inputArrAirport.value = '';
};

const closeAirlinePopup = () => {
  $menuBar.style.filter = 'blur(0px)';
  $headerInfo.style.filter = 'blur(0px)';
  $airlineTicket.style.filter = 'blur(0px)';
  $hotelInfo.style.filter = 'blur(0px)';
  $airlinePopup.style.display = 'none';
  $airlinePopupBg.style.display = 'none';
  resetAirlinePopup();
};

//post
const addDepAirlineInfo = async () => {
  const date = `${$depMonthSelect.value}/${$depDaySelect.value}`;
  const airplaneName = $inputAirline.value.trim();
  const departureTime = `${$depHourSelect.value}:${$depMinSelect.value}`;
  const departureAirport = $inputDepAirport.value.trim();
  const arrivalTime = `${$depArrHourSelect.value}:${$depArrMinSelect.value}`;
  const arrivalAirport = $inputDepArrAirport.value.trim();

  const { data } = await axios.post('/airlines', { travelId, type: 'departure', date, airplaneName, departureTime, departureAirport, arrivalTime, arrivalAirport });
  airlines = [...airlines, data];

  closeAirlinePopup();
  renderAirlineInfo(airlines);
  resetAirlinePopup();
};

const addArrAirlineInfo = async () => {
  const date = `${$arrMonthSelect.value}/${$arrDaySelect.value}`;
  const airplaneName = $inputArrAirline.value.trim();
  const departureTime = `${$arrHourSelect.value}:${$arrMinSelect.value}`;
  const departureAirport = $inputArrDepAirport.value.trim();
  const arrivalTime = `${$ArrDepHourSelect.value}:${$ArrDepMinSelect.value}`;
  const arrivalAirport = $inputArrAirport.value.trim();

  const { data } = await axios.post('/airlines', { travelId, type: 'arrival', date, airplaneName, departureTime, departureAirport, arrivalTime, arrivalAirport });
  airlines = [...airlines, data];

  closeAirlinePopup();
  renderAirlineInfo(airlines);
  resetAirlinePopup();
};

const renderLodgingInfo = () => {
  let html = '';
  let i = 1;

  lodgings.forEach(({ hotelName, hotelPlace, hotelsite }) => {
    html += `<li class="hotel-reservation lodging-name">
            <em>숙소${i}</em>
            <span class="hotel-name">${hotelName}</span>
            <span class="hotel-place">${hotelPlace}</span>
            <span class="hotel-site"><a class="hotel-link" href="${hotelsite}">${hotelsite}</a></span>
          </li>`;
    i++;
  });
  $lodgingScheduleList.innerHTML = html;
};

const getLodgingData = async () => {
  const { data } = await axios.get(`/lodgings?travelId=${travelId}`);
  lodgings = data;

  renderLodgingInfo();
};

const resetLodgingPopup = () => {
  $inputHotelName.value = '';
  $inputHotelPlace.value = '';
  $inputHotelSite.value = '';
};

const closeLodgingPopup = () => {
  $menuBar.style.filter = 'blur(0px)';
  $headerInfo.style.filter = 'blur(0px)';
  $airlineTicket.style.filter = 'blur(0px)';
  $hotelInfo.style.filter = 'blur(0px)';
  $hotelPopup.style.display = 'none';
  $hotelPopupBg.style.display = 'none';
  resetLodgingPopup();
};

//post
const addHotelInfo = async () => {
  const hotelName = $inputHotelName.value.trim();
  const hotelPlace = $inputHotelPlace.value.trim();
  const hotelsite = $inputHotelSite.value.trim();

  const { data } = await axios.post('/lodgings', { hotelName, hotelPlace, hotelsite, travelId });
  lodgings = [...lodgings, data];

  closeLodgingPopup();
  renderLodgingInfo(lodgings);
  resetLodgingPopup();
};

//EVENT HANDLER
// MODAL OPEN
function openDetailBtn() {
  $airlineBtn.classList.toggle('btn-act');
  $hotelBtn.classList.toggle('btn-act2');
}

function closeDetailBtn() {
  $airlineBtn.classList.remove('btn-act');
  $hotelBtn.classList.remove('btn-act2');
}

$newInfoBtn.addEventListener('click', openDetailBtn);
// $allMoreBtn.addEventListener('mouseenter', openDetailBtn);
$allMoreBtn.addEventListener('mouseleave', closeDetailBtn);

//HOTEL정보 입력 MODAL
const hotelClosePopup = () => {
  $menuBar.style.filter = 'blur(0px)';
  $headerInfo.style.filter = 'blur(0px)';
  $airlineTicket.style.filter = 'blur(0px)';
  $hotelInfo.style.filter = 'blur(0px)';
  $hotelPopup.style.display = 'none';
  $hotelPopupBg.style.display = 'none';
};

$hotelBtn.addEventListener('click', hotelClosePopup);
$hotelPopupBg.addEventListener('click', hotelClosePopup);
$hotelPopupRemove.addEventListener('click', hotelClosePopup);

$hotelBtn.onclick = () => {
  $menuBar.style.filter = 'blur(3px)';
  $headerInfo.style.filter = 'blur(3px)';
  $airlineTicket.style.filter = 'blur(3px)';
  $hotelInfo.style.filter = 'blur(3px)';
  $hotelPopup.style.display = 'block';
  $hotelPopupBg.style.display = 'block';
};

//비행기 정보 입력 MODAL
const airClosePopup = () => {
  $menuBar.style.filter = 'blur(0px)';
  $headerInfo.style.filter = 'blur(0px)';
  $airlineTicket.style.filter = 'blur(0px)';
  $hotelInfo.style.filter = 'blur(0px)';
  $airlinePopupBg.style.display = 'none';
  $airlinePopup.style.display = 'none';
};

// $airlineBtn.addEventListener('click', airClosePopup);
$hotelAddBtn.onclick = addHotelInfo;
$airlinePopupRemove.addEventListener('click', airClosePopup);
$airlinePopupBg.addEventListener('click', airClosePopup);

$airlineBtn.onclick = () => {
  $menuBar.style.filter = 'blur(3px)';
  $headerInfo.style.filter = 'blur(3px)';
  $airlineTicket.style.filter = 'blur(3px)';
  $hotelInfo.style.filter = 'blur(3px)';
  $airlinePopup.style.display = 'block';
  $airlinePopupBg.style.display = 'block';
};

$airlineAddBtn.onclick = () => {
  addDepAirlineInfo();
  addArrAirlineInfo();
};

$airlinePopupBg.addEventListener('click', resetAirlinePopup);
$hotelPopupBg.addEventListener('click', resetLodgingPopup);

const intro = setTimeout(() => $introWrapper.style.display = 'none', 4000);
// window.addEventListener('load', () => intro());

// export
export { $scheduleHiddenBtn, $timeWarningText, $dateWarningText, $startYear, $startMonth, $startDate, $endYear, $endMonth, $endDate, $startHour, $startMin, $endHour, $endMin, changeNav, resetSchedulePopup, resetTravelPopup, $mainList, $menuList, $travelList, $timelineTitle };
