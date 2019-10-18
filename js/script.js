$('.wheel-slider').slider({
  min: 0,
  max: 100,
  values: [13,69],
  range: true
});

var feedbackOpenBtn = document.querySelector('.feedback-open-btn');
var feedbackCloseBtn = document.querySelector('.feedback-close-btn');
var modalFeedback = document.querySelector('.modal-feedback');
var feedbackForm = modalFeedback.querySelector('form');
var feedbackName = feedbackForm.querySelector('.feedback-name');
var feedbackEmail = feedbackForm.querySelector('.feedback-email');
var feedbackText = feedbackForm.querySelector('.feedback-text');
var overlay = document.querySelector('.overlay');

feedbackOpenBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalFeedback.classList.remove('d-none');
  overlay.classList.remove('d-none');
  feedbackName.focus();
});

feedbackCloseBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalFeedback.classList.add('d-none');
  overlay.classList.add('d-none');
  modalFeedback.classList.remove('modal-error');
});

overlay.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalFeedback.classList.add('d-none');
  overlay.classList.add('d-none');
  modalFeedback.classList.remove('modal-error');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27 && !(modalFeedback.classList.contains('d-none')) || overlay.classList.contains('d-none')) {
    modalFeedback.classList.add('d-none');
    overlay.classList.add('d-none');
    modalFeedback.classList.remove('modal-error');
  }
});

feedbackForm.addEventListener('submit', function (evt) {
  if (!(feedbackName.value && feedbackEmail.value && feedbackText.value)) {
    evt.preventDefault();
    modalFeedback.classList.remove('modal-error');
    modalFeedback.offsetWidth = modalFeedback.offsetWidth;
    modalFeedback.classList.add('modal-error');
  }
});

