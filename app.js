//--------------------1. Array Slice--------------------------------------------------- 
const foods = [pizza, burger, fingerChips, donuts, springRoll];
let modifiedFood = foods.slice(1, 4);
console.log(modifiedFood);

//--------------------2. Array Splice---------------------------------------------------

const foods1 = [pizza, burger, fingerShips, donuts, springRoll];
let modifiedFood1 = foods1.splice(2, 0, "noodles", "icecream");
console.log(modifiedFood1);

//--------------------3. Filter ------------------------------------------------------
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
let isEven = numberArray.filter(function (num) {
    return (num % 2 == 0);
});
console.log(isEven);

let isPrime = numberArray.filter(function (num) {
    var flag = 0;
    for (var i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            flag = 1;
            break;
        }
    }
    if (flag == 1) {
        return true;
    } else {
        return false;
    }
});
console.log(isPrime);

//---------------------------4. Reject (Non - Prime) ------------------------------------------
let nonPrime = numberArray.filter(function (num) {
    var flag = 0;
    for (var i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            flag = 1;
            break;
        }
    }
    if (flag == 0) {
        return true;
    } else {
        return false;
    }
});
console.log(nonPrime);

//----------------------------5. LAMBDA --------------------------------------------------------

let isEven1 = numberArray.filter(num => (num % 2 == 0));
console.log(isEven1);

//---------------6. MAP---------------------------------------
const myArray = [11, 34, 20, 5, 53, 16];
let findSquareOfNumbers = myArray.map(num => (num * num));
console.log(findSquareOfNumbers);

//---------------7. Reduce-------------------------------------
const myArray1 = [2, 3, 5, 10];
let multiply = myArray1.reduce(function (initial, num) {
    return initial * num;
}, 1);