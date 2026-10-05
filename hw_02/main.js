// 1 Список покупок Напишите функцию showShoppingList(items). 
// С помощью forEach выведите каждый элемент массива в отдельной строке. 
// Пример: ["Хлеб", "Молоко", "Яблоки"] → три строки с названиями покупок. 


let foodArray = ["Хлеб", "Молоко", "Яблоки"];
let animalsArray = ["кот", "собака", "тигр", "лев", "слон", "жираф"];

function showShoppingList(items) {
    items.forEach(function(element) {
        console.log(element)
    })
}

showShoppingList(foodArray)
showShoppingList(animalsArray)


// 2 Чётные числа Напишите функцию getEvenNumbers(numbers). 
// С помощью filter верните новый массив только с чётными числами. Исходный массив не изменяйте. 
// Пример: [3, 8, 11, 14, 5, 20] → [8, 14, 20]. Если чётных чисел нет, верните []. 

let numbArray = [3, 8, 11, 14, 5, 20];
let numbArray2 = [1, 3, 5, 7, 9];

function getEvenNumbers(numbers) {
    let newNumbers = numbers.filter(function(element) {
        return element % 2 === 0;
    })
    return newNumbers;
}

console.log(getEvenNumbers(numbArray));
console.log(getEvenNumbers(numbArray2));


// 3 Поиск числа Напишите функцию findGreaterThan(numbers, limit). 
// С помощью find верните первое число, которое больше limit. 
// Если такого числа нет, верните undefined. 
// Пример: массив [4, 12, 7, 18], limit = 10 → 12. При limit = 20 → undefined. 

let numbArray3 = [4, 12, 7, 18];

function findGreaterThan(numbers, limit) {
    let result = numbers.find(function (element) {
        if (element > limit) {
            return element;
        }

    })
    return result;
}

console.log(findGreaterThan(numbArray3, 10));
console.log(findGreaterThan(numbArray3, 17));


// 4 Сумма покупок Напишите функцию calculateTotal(prices). 
// С помощью reduce верните сумму всех цен. Начальное значение суммы должно быть 0. 
// Пример: [100, 250, 50] → 400. Для пустого массива [] результат должен быть 0. 

let pricesArray = [100, 250, 50];
let pricesArray2 = [];

function calculateTotal(prices) {
    let result = prices.reduce(function(sum, element) {
        return sum + element;
    }, 0)

    return result;
}

console.log(calculateTotal(pricesArray));
console.log(calculateTotal(pricesArray2));


// 5 Самое большое число Напишите функцию getMaxNumber(numbers). 
// Найдите и верните самое большое число с помощью цикла for. 
// Считайте, что массив непустой. 
// Проверьте функцию также на отрицательных числах. Примеры: [6, 15, 2, 9] → 15; [-8, -3, -10] → -3. 

let tempArray = [6, 15, 2, 9];
let tempNegativeArray = [-8, -3, -10];

function getMaxNumber(numbers) {
    let maxNumb = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > maxNumb) {
            maxNumb = numbers[i];
        }
    }
    return maxNumb;
}

console.log(getMaxNumber(tempArray));
console.log(getMaxNumber(tempNegativeArray))

