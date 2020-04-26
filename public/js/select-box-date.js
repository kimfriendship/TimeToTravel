const $newScheduleBtn = document.querySelector('.new-schedule-btn');
const $newTravelBtn = document.querySelector('.new-travel-btn');
const $newInfoDetailBtn = document.querySelector('.new-info-detail-btn');
const $newTravelPopup = document.querySelector('.new-travel-popup');
const $newSchedulePopup = document.querySelector('.new-schedule-popup');
const $newInfoPopup = document.querySelector('.new-travel-popup');
const $dateSelects = document.querySelectorAll('.date-select');
const $yearSelects = document.querySelectorAll('.year-select');
const $monthSelects = document.querySelectorAll('.month-select');
const $hourSelects = document.querySelectorAll('.hour-select');
const $minuteSelects = document.querySelectorAll('.min-select');
const $startYearSelect = document.querySelector('#start-year-select');
const $endYearSelect = document.querySelector('#end-year-select');
const $startMonthSelect = document.querySelector('#start-month-select');
const $endMonthSelect = document.querySelector('#end-month-select');
const $startDaySelect = document.querySelector('#start-day-select');
const $endDaySelect = document.querySelector('#end-day-select');
const $airlineMonthSelect = document.querySelector('#airline-month-select');
const $airlineDaySelect = document.querySelector('#airline-day-select');
const $arrivalMonthSelect = document.querySelector('#arrival-month-select');
const $arrivalDaySelect = document.querySelector('#arrival-day-select');

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const todayDate = today.getDate();
const monthDate = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let date = 0;

function printYearMonth({ target }) {
  if (target.id === 'newTravelBtn') {
    let yearArr = Array.from({ length: 5 }, function (v, i) { return year + i });
    $yearSelects.forEach(yearSelect => {
      yearArr.forEach((element, key) => {
        yearSelect[key] = new Option(`${element} 년`, element);
      });
    });
  }

  let monthArr = Array.from({ length: 13 }, function (v, i) { return i; });
  monthArr.splice(0, 1);
  let i = 0;

  $monthSelects.forEach(monthSelect => {
    i = 0;
    monthArr.forEach((element, key) => {
      monthSelect[key] = new Option(`${element} 월`, element);
      if (+monthSelect.options[i].value === month) monthSelect.options[month - 1].setAttribute('selected','selected');
      i++;
    });
  });

  date = monthDate[month - 1];

  let dateArr = Array.from({ length: date + 1 }, function (v, i) { return i; });
  dateArr.splice(0, 1);

  $dateSelects.forEach(dateSelect => {
    i = 0;
    dateArr.forEach((element, key) => {
      dateSelect[key] = new Option(`${element} 일`, element);
      if (+dateSelect.options[i].value === todayDate) dateSelect.options[todayDate - 1].setAttribute('selected','selected');
      i++;
    });
  });
}

function printDate({ target }) {
  if (!target.matches('.month-select')) return;
  date = monthDate[target.value - 1];
  let date2 = Array.from({ length: date + 1 }, function (v, i) { return i; });
  date2.splice(0, 1);

  date2.forEach((element, key) => {
    target.parentNode.nextElementSibling.children[0][key] = new Option(`${element} 일`, element);
  });
}

function changeEndYear() {
  [...$endYearSelect.options].forEach(opt => {
    if (opt.value === $startYearSelect.value) opt.setAttribute('selected','selected');
  });
};

function changeEndMonth() {
  [...$endMonthSelect.options].forEach(opt => {
    if (opt.value === $startMonthSelect.value) opt.setAttribute('selected','selected');
  });
};

function changeEndDay() {
  [...$endDaySelect.options].forEach(opt => {
    if (opt.value === $startDaySelect.value) opt.setAttribute('selected','selected');
  });
};

$newTravelBtn.addEventListener('click', printYearMonth);
$newTravelPopup.addEventListener('change', printDate);

$newInfoDetailBtn.addEventListener('click', printYearMonth);
$newInfoPopup.addEventListener('change', printDate);

$startYearSelect.addEventListener('change', changeEndYear);
$startMonthSelect.addEventListener('change', changeEndMonth);
$startDaySelect.addEventListener('change', changeEndDay);

function changeArrivalMonth() {
  [...$arrivalMonthSelect.options].forEach(opt => {
    if (opt.value === $airlineMonthSelect.value) opt.setAttribute('selected','selected');
  });
};

function changeArrivalDay() {
  [...$arrivalDaySelect.options].forEach(opt => {
    if (opt.value === $airlineDaySelect.value) opt.setAttribute('selected','selected');
  });
};

$airlineMonthSelect.addEventListener('change', changeArrivalMonth);
$airlineDaySelect.addEventListener('change', changeArrivalDay);

