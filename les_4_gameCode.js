
var event, ok;
var windowEnd = [];


do {//Выводим первый вопрос
    ok = false;
    event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');
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
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        do {
            ok = false;
            event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
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
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        
                    }
                } while (!ok);
                ok = isAnswer(works.d0, event);
                        var qEnd = {
                            qustion: works.d00,
                            answer: event
                        };
                        windowEnd.push(qEnd);

                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                       
                    }
                } while (!ok);
                var qEnd = {
                    qustion: works.d00,
                    answer: event
                };
                windowEnd.push(qEnd);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        do {
            ok = false;
            event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.c0, event);
               
            }
        } while (!ok);
        var qEnd = {
            qustion: works.c00,
            answer: event
        };
        windowEnd.push(qEnd);
        switch (event) {
            case 1: // Второе действие
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                     
                    }
                } while (!ok);
                var qEnd = {
                    qustion: works.d00,
                    answer: event
                };
                windowEnd.push(qEnd);

                break;
            case 2: // Второе действие
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                      
                    }
                } while (!ok);
                var qEnd = {
                    qustion: works.d00,
                    answer: event
                };
                windowEnd.push(qEnd);

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