var previewMap = document.querySelector('.about-us__mappreview')
var openMap = document.querySelector('.modal-map');
var closeMap = openMap.querySelector('.btn-close');

previewMap.addEventListener("click", function (evt) {
evt.preventDefault();
openMap.classList.add("modal-show--map");
});

closeMap.addEventListener("click", function (evt) {
evt.preventDefault();
openMap.classList.remove("modal-show--map");
});

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
  if (openMap.classList.contains("modal-show")) {
    openMap.classList.remove("modal-show");
    }
  }
});

var openContact = document.querySelector('.btn--writeus');
var popupContact = document.querySelector('.modal-writeus');
var closeContact = popupContact.querySelector ('.btn-close');
var formContact = popupContact.querySelector('.writeus');
var nameContact = popupContact.querySelector('[name=name]');
var emailContact = popupContact.querySelector('[name=email]');
var textContact = popupContact.querySelector('[name=text]');
var storageName = localStorage.getItem('nameContact');
var storageEmail = localStorage.getItem('emailContact');

if (popupContact) {
  openContact.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupContact.classList.add('modal-show');

    if (storageName && !storageEmail) {
      nameContact.value = storageName;
      emailContact.focus();
    } else if (storageName && storageEmail) {
      nameContact.value = storageName;
      emailContact.value = storageEmail;
      textContact.focus();
    } else {
     nameContact.focus();
   }
  })
};

formContact.addEventListener('submit', function (evt) {
  if (!nameContact.value || !emailContact.value || !textContact.value) {
      evt.preventDefault();
      popupContact.classList.add('modal-error');
  } else {
      localStorage.setItem('nameContact', nameContact.value);
      localStorage.setItem('emailContact', emailContact.value);
  }
});

closeContact.addEventListener("click", function (evt) {
evt.preventDefault();
popupContact.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
  if (popupContact.classList.contains("modal-show")) {
    popupContact.classList.remove("modal-show");
    }
  }
});

var buyItem = document.querySelectorAll('.item__btn--buy');
var openBasket = document.querySelector('.modal-basket');
var closeBasket = openBasket.querySelector('.btn-close');

buyItem.addEventListener("click", function (evt) {
evt.preventDefault();
openBasket.classList.add("modal-show");
});

closeBasket.addEventListener("click", function (evt) {
evt.preventDefault();
openBasket.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
  if (openBasket.classList.contains("modal-show")) {
    openBasket.classList.remove("modal-show");
    }
  }
});
