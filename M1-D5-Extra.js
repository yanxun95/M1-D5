/* EXERCISE 11
Write a function "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5.
The function returns the sum of the numbers bigger than 5.
*/

const giveMeRandom = function(num1){
    let array = [];
    for(let i = 0; i < num1; i++){
        array[i] = Math.floor(Math.random() * 11);
    }
    return array;
}
const checkArray = function(arr){
    let total = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] > 5){
            total += array[i];
        }else{
            continue;
        }
    }
    return total;
}

let array = giveMeRandom(7);
console.log("The nunber inside the array: ", array)
console.log("\nEx11, the sum of the numbers that bigger than 5 is:" , checkArray(array));

/* EXERCISE 12
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "shippingCartTotal" which calculates the total due to the shop.
*/

shoppingCart = [
    {name:"coke",  id:1, price:1.5, quantity:10},
    {name:"fanta",  id:2, price:1, quantity:15},
    {name:"sprite",  id:3, price:2, quantity:5}
];

const shippingCartTotal = function(arr){
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        let sum = arr[i].price * arr[i].quantity;
        total += sum;
    }
    return total;
}

console.log("\nEx12:", shippingCartTotal(shoppingCart))

/* EXERCISE 13
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
*/

let newObject = {name:"pepsi",  id:4, price:1.2, quantity:5};
const addToShoppingCart = function(obj){
    shoppingCart.push(obj);
    return shoppingCart.length;
}

console.log("\nEx13: There are", addToShoppingCart(newObject), "items in the shopping cart.");

/* EXERCISE 14
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in the array.
*/

const maxShoppingCart = function(arr){
    let largest = 0;
    for(let i = 0; i < arr.length; i++){
        if(largest < arr[i].price){
            largest = arr[i].price;
        }
    }
    return largest
}

console.log("\nThis is the shooping cart:", shoppingCart)
console.log("Ex14: The most expensive item in the shooping cart is:", maxShoppingCart(shoppingCart));

/* EXERCISE 15
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

const latestShoppingCart = function(arr){
    let lastItem = arr.slice(-1);
    return lastItem;
}

console.log("\nEx15: The last item is:", latestShoppingCart(shoppingCart));

/* EXERCISE 16
Create a function "loopUntil" which receives an integer x between 0 and 9.
The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/

const loopUntil = function(x){
    if(x < 9 && x > 0){
        let currentTimes = 1;
        let row = 0;

        while(row < 3){
            let randNum = Math.floor(Math.random() * 10);
            console.log(`The ${currentTimes} random number is:`, randNum)
            currentTimes++;
            if(randNum > x){
                row++;
            }else{
                row = 0;
            }
        }
    }else{
        console.log(`Number ${x} is not between 0 and 9.`)
    }
}

console.log("\nEx16: The list of random number:");
loopUntil(3);

/* EXERCISE 17
Write a function "average" which receives an array and return the average value. The function automatically skips non-numeric entries in the array.
*/

const average = function(arr){
    let total = 0;
    let avg = 0;
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] === "number"){
            total += arr[i];
            avg += 1;
        }else{
            continue;
        }
    }
    total = total/avg;
    return total;
}

ex17Arr = [1, 2, 3, "strive", "school", 2];
console.log("\nEx17: The average values of the array is:", average(ex17Arr));

/* EXERCISE 18
Write a function "longest" to find the longest string from an given array of strings.
*/

const longest = function(arr){
    let longest = "";
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > longest.length){
            longest = arr[i];
        }
    }
    return longest;
}

ex18Arr = ["strive", "school", "longest"];
console.log("\nEx18: The longest string in the array is:", longest(ex18Arr));

/* EXERCISE 19
Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
Check if the email is valid using string methods. The email (in this example) is valid if the words SPAM and SCAM does not appear.
*/

const antiSpam = function(str){
    let string = str.toLowerCase();
    if(string.split(" ").includes("spam") || string.split(" ").includes("scam")){
        return false;
    }else{
        return true;
    }
}

console.log("\nEx19: This email is:", antiSpam("scam hello"));

/* EXERCISE 20
Write a function that receives a date d as parameter and calculates the number of days passes since the d.
*/

const checkDate = function(d){
    let currentDate = new Date();
    let cDay = currentDate.getDate()
    let dayPass = cDay - d;
    return dayPass;
}

let days = checkDate(12);
console.log(`\nEx20: There are ${days} days since 12.`);

/* EXERCISE 21
Write a function "matrixGenerator" that receives x and y as parameter. The result should be a matrix of x times y with, as value, the index of the position.
Ex.: X = 3, Y = 2
["00","01","02"
"10","11","12"]
*/

const matrixGenerator = function(x,y){
    let arr = new Array(y);

    for(let i = 0; i < y; i++){
        for(let j = 0; j < x; j++){
            arr[i]=new Array(x)  
        }
    }
    for(let i = 0; i < y; i++){
        for(let j = 0; j < x; j++){
            arr[i][j] = `${i}${j}`;
        }
    }
    return arr;
}

console.log("\nEx21:", matrixGenerator(3,2));