const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body'); //для блокирования скрола
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true; //чтобы не было двойных нажатий

const timeout = 800; //анимация - блокировка скрола

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function(e) {
            const popupName = popupLink.getAttribute("href").replace("#", '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault(); // запрет перезагрузки страницы
        });
    }
}

const popupCloseIcon = document.querySelectorAll(".close-popup");
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener("click", function(e) {
            popupClose(el.closest('.popup')); //ищет ближайшего родителя чтобы закрыть окно
            e.preventDefault(); // запрет перезагрузки страницы
        });
    }
}

function popupOpen (curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector(".popup.open");
        // if (popupActive) {
        //     popupClose(popupActive, false);
        // }
        // else {
        //     bodyLock();
        // }
        curentPopup.classList.add("open");
        curentPopup.addEventListener("click", function(e) {
            if (!e.target.closest(".popup__content")) {
                popupClose(e.target.closest(".popup"));
            }
        }); // для закрытия попапа по нажатию на темную область
    }
}

function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove("open");
        if (doUnlock) {
            bodyUnLock();
        }
    }
}

function bodyLock () {
    const lockPaddingValue = window.innerWidth - document.querySelector(".wrapper").offsetWidth + 'px'; //высчитываем ширину срола, чтобы не было сдвига контента при его скрытии
    if (lockPadding.length>0){
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
    }
    body.style.paddingRight = lockPaddingValue; //присваиваем значение скрола ввиде паддинга чтобы не было сдвига контента
    body.classList.add("lock");

    unlock = false;
    setTimeout(function() {
        unlock = true;
    }, timeout); // чтобы не было двойных нажатий
}

function bodyUnLock() {
    setTimeout(function() {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = '0px';
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function() {
        unlock = true;
    }, timeout);
}


function handleSubmit (event) {
    event.preventDefault(); //отменяем стандартное действие браузера
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    console.table({ value });
}

const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);



let frm = document.forms[0];


// frm.teacher.addEventListener("focus", ValFocus);
frm.teacher.addEventListener("blur", ValidValue);
// frm.lesson.addEventListener("focus", ValFocus);
frm.lesson.addEventListener("blur", ValidValue);
// frm.typeLesson.addEventListener("focus", ValFocus);
// frm.typeLesson.addEventListener("blur", ValidValue);

// function ValFocus (event) {
//     console.log("ajreccccc");
//     this.classList.remove('error');
// };

function ValidValue (event) {
    if (this.validity.valueMissing) {
        this.classList.add('error');
        this.setCustomValidity("Это поле обязательно");
    } else if (this.validity.tooLong) {
        this.classList.add('error');
        this.setCustomValidity("Слишком много символов");
    }
    else if (this.validity.tooShort) {
        this.classList.add('error');
        this.setCustomValidity("Слишком мало символов");
    } else {
        this.setCustomValidity("");
        this.classList.remove('error');
    }
    this.reportValidity();
    if (!this.reportValidity()) {
        this.classList.add('error');
        // this.blur();
    } else {
        this.classList.remove('error')
    }
}