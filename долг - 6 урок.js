//создание объектов, их свойств и значений
var Red = {
    price: 0,
    count: 0,
    summa: 0
}
var Blue = {
    price: 0,
    count: 0,
    summa: 0
}
var Yellow = {
    price: 0,
    count: 0,
    summa: 0
}
//функция, которая вызывается кликом мыши по кнопке, означающая выбор товара в корзину
function f(id) {

    

    var d = document.getElementById(id);//id - один из трех цветов
    var ol = document.getElementById('spis');
    var li = document.getElementById("li_" + id);// к li с _ прибавляют один из т рех цветов

    if (li != null) { //т.е. если ранее кнопку купить уже нажимали на данном товаре
        switch (id) {
            case 'red':
                Red.count = parseInt(li.innerHTML.split(' ')[1]) + 1; // то к нему прибавляют еще один. При этом берут red:(количество) разделяют пробелом и бирут второй элемент
            case 'blue':
                Blue.count = parseInt(li.innerHTML.split(' ')[1]) + 1;
                break;
            case 'yellow':
                Yellow.count = parseInt(li.innerHTML.split(' ')[1]) + 1;
                break;
        }
    } else {
        switch (id) { // если же товар еще ни разу не выбирали, то
            case 'red':
                newLi = document.createElement('li'); // создается переменная с тегом li
                newLi.innerHTML = 'Red: 1'; // и помещается в нее значение, которое используют в условии выше, означающее 1 нажатие на кнопку
                newLi.id = 'li_red';// добавляют ему id
                ol.appendChild(newLi);// и добавляют созданный li в родительский элемент
                Red.count = 1;
                break;
            case 'blue':
                newLi = document.createElement('li');
                newLi.innerHTML = 'Blue: 1';
                newLi.id = 'li_blue';
                ol.appendChild(newLi);
                Blue.count = 1;
                break;
            case 'yellow':
                newLi = document.createElement('li');
                newLi.innerHTML = 'Yellow: 1';
                newLi.id = 'li_yellow';
                ol.appendChild(newLi);
                Yellow.count = 1;
                break;
        }
    }



    switch (id) {
        case 'red':
            Red.price = d.getElementsByTagName('p')[0].innerHTML;//d - id, который выбрали и у него находят все <p>, выбиряют первый - цену
            Red.summa = Red.count * Red.price;// сумма=кол-во+цена
            break;
        case 'blue':
            Blue.price = d.getElementsByTagName('p')[0].innerHTML;
            Blue.summa = Blue.count * Blue.price;
            break;
        case 'yellow':
            Yellow.price = d.getElementsByTagName('p')[0].innerHTML;
            Yellow.summa = Yellow.count * Yellow.price;
            break;
    }

    if (li != null) {// если в корзине не пусто, то под надписью товары в корзине
        switch (id) {
            case 'red':
                li.innerHTML = "Red: " + Red.count + " шт. по цене " + Red.price + " на сумму " + Red.summa;//выносим списком название+кол-во+ текст+цена+текст+сумма
                break;
            case 'blue':
                li.innerHTML = "blue: " + Blue.count + " шт. по цене " + Blue.price + " на сумму " + Blue.summa;
                break;
            case 'yellow':
                li.innerHTML = "yellow: " + Yellow.count + " шт. по цене " + Yellow.price + " на сумму " + Yellow.summa;
                break;
        }
    } else {
        switch (id) {//если было пусто в корзине, то по первому разу заполняем ее
            case 'red':
                newLi.innerHTML = "Red: " + Red.count + " шт. по цене " + Red.price + " на сумму " + Red.summa;
                break;
            case 'blue':
                newLi.innerHTML = "blue: " + Blue.count + " шт. по цене " + Blue.price + " на сумму " + Blue.summa;
                break;
            case 'yellow':
                newLi.innerHTML = "yellow: " + Yellow.count + " шт. по цене " + Yellow.price + " на сумму " + Yellow.summa;
                break;
        }

    }

var ii = document.getElementById('itog');
if (ii != null){
ii.parentNode.removeChild(ii);
}


var itog = document.createElement('li');
itog.id = 'itog';

ol.appendChild(itog);// в конец родительского элемента
var ss = Red.summa + Blue.summa + Yellow.summa;//суммируем общие суммы
itog.innerHTML = "Всего:" + ss; //выводим текст+итог


}