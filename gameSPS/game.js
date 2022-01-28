'use strict';


let userValue = +prompt("Выберите число от 1 до 3: 1. камень 2. ножница 3. бумага");
let programValue = Math.floor(Math.random() * 3);
alert (`Роль кампьютера ${programValue}`);
if(userValue === 1 && programValue === 2 || userValue === 2 && programValue === 3 || userValue === 3 && programValue === 1){
    alert("Вы выйграли!");
}
else if(userValue === 1 && programValue === 3 || userValue === 3 && programValue === 2 || userValue === 2 && programValue === 1){
    alert("Вы проиграли...");
}
else alert("Дружба победила");


