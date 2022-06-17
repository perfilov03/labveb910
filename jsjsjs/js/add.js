// --------------- №1: Таблица умножения --------------- //

function generateMultiplicationTable(t){
    let s = '';
    for (let i=1; i <= t; i++) {
        s = s +'\n';
        for (let j=1; j <= t; j++) {
            s = s + i*j + '\t';
        }
    }
    console.log(s);
}

generateMultiplicationTable(13)

// --------------- №2: Цитата в рамочке --------------- //

function showQuote (arr, sbl) {
    longestWord = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].length > longestWord) {
            longestWord = arr[i].length;
        }
    }
    let n = longestWord+4;
    let s = repeatStr(sbl, n) + '\n';
    s += printArr (arr, longestWord, sbl);
    s += repeatStr(sbl, n);
    console.log(s);
}    

function repeatStr(sbl, n) {
    let new_str = '';
    while (n-- > 0) {
        new_str += sbl;
    }
    return new_str;
}

function printArr (arr, longestWord, sbl) {
    for (let i = 0; i < arr.length; i++) {
        if (((longestWord+2) - arr[i].length) == 2) {
            arr[i] = sbl + ' ' + arr[i] + ' ' + sbl;
        }
        if ((longestWord + 2) - arr[i].length > 2) {
            arr[i] = sbl + ' ' + arr[i] + repeatStr(' ', longestWord-arr[i].length+1) + sbl;
        }
    }
    let s = '';
    for (let i = 0; i < arr.length; i++) {
        s += arr[i] + '\n';
    }
    return(s);
}

showQuote (['Hello', 'World', 'In', 'JS'], '*')

// --------------- №3: Объединение массивов --------------- //

function combineArrays (mas1, mas2) {
    let max = Math.max(mas1.length, mas2.length)*2;
    let d = [mas1, mas2];
    let result = [];

    for (let i = 0; i < max; i++) {
        let v = d[i % 2][Math.floor(i / 2)];
        if (v != undefined) {
            result.push(v);  
        }  
    }

    console.log(result)
}

combineArrays([1, 2, 3], ['a', 'b', 'c', 'd'])

// --------------- №4: Сэндвичи с сыром --------------- //

function countSandwiches (sandwiche) {

    let count = 0;

    while ((sandwiche.bread >= 2) & (sandwiche.cheese >= 1)) {
        count += 1;
        sandwiche.bread -= 2;
        sandwiche.cheese -= 1;
    }
    console.log(count)
}

countSandwiches({bread: 5, cheese: 6})


// --------------- №5: Счетчик уникальных значений массива --------------- //


function countUniqueValues (arr) {

    let UniqueValue = {}
    for (let i = 0; i < arr.length; i++) {
        let a = arr[i];
        if (UniqueValue[a] != undefined) {
            ++UniqueValue[a];
        }
        else {
            UniqueValue[a] = 1;
        }
    }
    console.log(UniqueValue);

}
countUniqueValues([1,2,1,2,5, 11, 2, 3,4,2,5])


// --------------- №6: Бургер-меню --------------- //

const menu = document.getElementById("menu-btn");
const menu_rect = document.getElementById("menu");
let opened = false;
menu_rect.addEventListener("click", function(event){
    if (opened == false){
        menu.children[0].setAttribute("opacity", "0");
        menu.children[1].setAttribute("class", "open_anim1");
        menu.children[2].setAttribute("class", "open_anim2");
        menu.children[3].setAttribute("opacity", "0");
        opened = true;
    }
    else {
        menu.children[0].setAttribute("opacity", "1");
        menu.children[1].setAttribute("class", "close_anim1");
        menu.children[2].setAttribute("class", "close_anim2");
        menu.children[3].setAttribute("opacity", "1");
        opened = false
    }
});
const iconMenu = document.querySelector('.menu__burger');
if (iconMenu){
    menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener("click", function(e){
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}


// --------------- №7: Сворачиваемый контент (Accordion) --------------- //

let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } 
        else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

// --------------- №8: Уведомления (Toasts) --------------- //


// const Toast = {
//     init() {
//         this.hideTimeout = null;

//         this.el = document.createElement('div');
//         this.el.className = 'toast';
//         document.body.appendChild(this.el);
//     },

//     show (message, state){
//         clearTimeout(this.hideTimeout);

//         this.el.textContent = message;
//         this.el.className = 'toast toast--visible';
//         if (state) {
//             this.el.classList.add(`toast--${state}`)
//         }

//         this.hideTimeout = setTimeout(() => {
//             this.el.classList.remove('toast--visible')
//         }, 3000);
//     }
// };
// }



let toaste = {
    title: 'Привет! Стримим Леди Икону',
    text: 'Включай дождливый хит Rain on Me с Арианой Гранде и танцуй под ливнем все лето! Stupid Love к августу отыграет свое, и Rain On Me возглавит Билборд!!!',
} 


const tst = document.querySelector('.toast');
tst.children[0].textContent = toaste.title;
tst.children[1].textContent = toaste.text;
const clsTst = document.getElementById("closeToast");

clsTst.addEventListener("click", function(event) {
    // tst.style.transition="1.3s";
    // tst.style.margin="0 -500px 0px 0";
    removeToast();
})

function removeToast () {
    tst.remove();
}

function Toast () {
    const tst = document.querySelector('.toast');
    tst.style.margin="0 60px 0px 0";
    tst.style.transition="1.3s";
    tst.children[0].textContent = toaste.title;
    tst.children[1].textContent = toaste.text;
}

let updateTime=function(){toasts.style.display="block";}
        setTimeout(updateTime,2000);
        clearTimeout(updateTime);

document.addEventListener('DOMContentLoaded', () => setTimeout(Toast, 2000));
