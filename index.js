//          ЗАДАНИЕ №1  Какое последнее значение выведет этот код? Почему?

// let i = 3;

// while (i) {
//   alert( i--);
// }

// (Последнее значение будет "1", ай ровно "3", 
// отчёт начинается с цифры 3 на понижения из-за
// того что выполненный цикл уменшает "i". 
// если вместо "i--" поставить "i++" то цикл будет расти до бесконечности  )

//          ЗАДАНИЕ №2  Перепишите код, заменив цикл for на while, без изменения поведения цикла.

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }    

// let i = 0;
//     while(i < 3) {
//     alert( `number ${i}!` );
//     i++;
//     }
  
            // ЗАДАНИЕ №3 Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
            // Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).
            // Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.
            // Подсказка: используйте цикл do... while

// let num;
// do {
//     num = +prompt('Введите число больше 100');
// } 
// while (num <=100);
// if (num > 0) {
//       alert('Вы ввели число больше 100');
// } 
// else  { 
//     alert('Отменено')
// }

            // ЗАДАНИЕ №4 Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. 
            // Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), 
            // и запишите его в переменную num.

for (let n = 1000; n > 50; num = 0) {
n /= 2;
console.log(n); 
alert(n);
}
