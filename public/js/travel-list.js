// import
import { resetTravelPopup } from './main.js';

// DOMs
const $menuBar = document.querySelector('.menu-bar');
const $header = document.querySelector('.header h2');
const $travelList = document.querySelector('.travel-list');
const $newTravelBtn = document.querySelector('.new-travel-btn');
const $popupBg = document.querySelector('.new-travel-popup-bg');
const $popupRemove = document.querySelector('.new-travel-popup-remove-btn');
const $newTravelPopup = document.querySelector('.new-travel-popup');
const $travelHiddenBtn = document.querySelector('.add-travel-btn-hidden');

// functions
const closeTravelPopup = () => {
  $menuBar.style.filter = 'blur(0px)';
  $header.style.filter = 'blur(0px)';
  $travelList.style.filter = 'blur(0px)';
  $popupBg.style.display = 'none';
  $newTravelPopup.style.display = 'none';
  resetTravelPopup();
};

const openTravelPopup = () => {
  $popupBg.style.display = 'block';
  $menuBar.style.filter = 'blur(3px)';
  $header.style.filter = 'blur(3px)';
  $travelList.style.filter = 'blur(3px)';
  $newTravelPopup.style.display = 'block';
  $travelHiddenBtn.style.display = 'block';
};

// event handlers
$newTravelBtn.addEventListener('click', openTravelPopup);
$popupBg.addEventListener('click', closeTravelPopup);
$popupRemove.addEventListener('click', closeTravelPopup);

function showWarning(element, defaultValue, warningElement) {
  if (element.value === defaultValue) {
    console.log('ddd');
    warningElement.classList.remove('text-hidden');
    return 1;
  } else {
    console.log('aaa');
    warningElement.classList.add('text-hidden');
    return 0;
  }
}
