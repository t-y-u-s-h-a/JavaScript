alert ("Добро пожаловать в игру " + '"КТО ХОЧЕТ СТАТЬ МИЛЛИОНЕРОМ"')
var event, ok;
var windowEnd = [];


do {//Выводим первый вопрос
    ok = false;
    event = +prompt(works.a00 + works.a1 + works.a2 + works.a3 + works.a4 + '-1 - Выход из игры');
    if (event == -1) {
        break;
    }
    else {
        ok = isAnswer(works.a0, event);
        
    }
} while (!ok);
var qEnd = {
    qustion: works.a00,
    answer: event
};
windowEnd.push(qEnd);
switch (event) {
        case 1:
        case 2:
        case 4:
        alert("НЕПРАВИЛЬНЫЙ ОТВЕТ\n" + "Ваш ответ: " + windowEnd [0].answer + "\n Правильный ответ: " + works.a3);
        break;
    case 3: // Первое действие  - если в первом окне ввели 3 то открываем серию окон - окно 2
        do {
            alert ("ПОЗДРАВЛЯЕМ, ЭТО ПРАВИЛЬНЫЙ ОТВЕТ! ВАШ ВЫЙГРЫШ СОСТАВЛЯЕТ 1 000 РУБЛЕЙ");
            ok = false;
            event = +prompt(works.b00 + works.b1 + works.b2 + works.b3 + works.b4 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.b0, event);
            }
        } while (!ok);
        var qEnd = {
            qustion: works.b00,
            answer: event
        };
        windowEnd.push(qEnd);
        
        switch (event) {
            case 1:
            case 2:
            case 3:
            alert("НЕПРАВИЛЬНЫЙ ОТВЕТ\n" + "Ваш ответ: " + windowEnd [1].answer + "\n Правильный ответ: " + works.b4);
            break;
            case 4: // Второе действие, если во 2 окне ввели 4 то переходим на 3 окно
                do {
                    alert ("ПОЗДРАВЛЯЕМ, ЭТО ПРАВИЛЬНЫЙ ОТВЕТ! ВАШ ВЫЙГРЫШ СОСТАВЛЯЕТ 5 000 РУБЛЕЙ");
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + works.d3 + works.d4 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else { ok = isAnswer(works.d0, event);
                        
                    }
                } while (!ok);
                ok = isAnswer(works.d0, event);
                        var qEnd = {
                            qustion: works.d00,
                            answer: event
                        };
                        windowEnd.push(qEnd);
                        switch (event) {
                            case 1:
                            case 2:
                            case 3:
                            alert("НЕПРАВИЛЬНЫЙ ОТВЕТ\n" + "Ваш ответ: " + windowEnd [2].answer + "\n Правильный ответ: " + works.d4);
                            break;
                            case 4: // Третье действие, если во 3 окне ввели 4 то переходим к концу
                                do {
                                    alert ("ПОЗДРАВЛЯЕМ, ЭТО ПРАВИЛЬНЫЙ ОТВЕТ!\n ВЫ ПРОШЛИ ИГРУ И ВАШ ВЫЙГРЫШ СОСТАВЛЯЕТ 100 000 РУБЛЕЙ");
                                    break;
                                }             
                             while (!ok);
                            }           
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');
for (var i = 0; i < windowEnd.length; i++) {
    console.log(windowEnd[i]);
}
console.log(windowEnd);
var diologEnd = prompt('Введите номер вопроса, чтобы просмотреть свой ответ на него: ');
    if (diologEnd == 1) {
        alert("Вопрос: " +  windowEnd [0].qustion  + "Ваш ответ: " + windowEnd [0].answer);
    }
    else if (diologEnd == 2) {
        alert("Вопрос: " + windowEnd [1].qustion  + "Ваш ответ: " + windowEnd [1].answer);
    }
    else if (diologEnd == 3) {
        alert("Вопрос: " + windowEnd [2].qustion  + "Ваш ответ: " + windowEnd [2].answer);
    }

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
    
}