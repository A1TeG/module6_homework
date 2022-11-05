//Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
//При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
//На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.

let arr = [1, 'a', 4, 2, null, 4, 0, undefined]; //Произвольный массив
function countNumbers() { //объявление функции
  let sumOdd = 0 // переменная для счёта нечётных чисел
  let sumEven = 0 // переменная для счёта чётных чисел
  let sumNull = 0 // переменная для счёта нулей
  for (let i = 0; i < arr.length; i++) {   // цикл на перебор массива
    if (arr[i] === null) { // поиск нулей
      sumNull++;
    } else if (arr[i] % 2 === 1) { // поиск нечётных чисел
      sumOdd++;
    } else if (arr[i] % 2 === 0) { // поиск чётных чисел
      sumEven++;
    }
  }
  console.log(`Чётные: ${sumEven + sumNull}, Нечётные: ${sumOdd}, Null: ${sumNull}`)
}

countNumbers() // вывод функции в консоль