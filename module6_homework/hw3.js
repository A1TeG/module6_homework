//Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.

function sumOfFunctions(arg1) {
  return function (arg2) {
    return arg1 + arg2;
  };
}

const resultSumOfFunctions = sumOfFunctions(1)(2) // Передаём аргументы (arg1)(arg2)
console.log(resultSumOfFunctions) // Выводим результат функции sumOfArguments