/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/
const area = function(l1, l2) {
    let area = l1 * l2;
    return area;
};

let q1 = console.log("Q1:" , area(2,2));


/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
const crazySum = function(num1, num2) {
    let total;
    if(num1 === num2){
        total = (num1 + num2) * 3;
    }else{
        total = num1 + num2;
    }
    return total;
};

let q2SameNum = console.log("\nQ2(same number):" , crazySum(2,2));
let q2DifNum = console.log("Q2(different number):" , crazySum(4,2));

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

const crazyDiff = function(num1) {
    let num = 19
    let answer;
    if(num1 > num){
        answer = (num1 - num) * 3;
    }else{
        answer = num1 - num;
    }
    return answer;
};

let q3GreaterThan19 = console.log("\nQ3(greater than 19):" , crazyDiff(29));
let q3 = console.log("Q3(lower than 19):" , crazyDiff(10));

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

const boundary = function(num1) {
    let answer = true;
    if (num1 >= 20 && num1 <= 100){
        answer;
    }else if (num1 === 400){
        answer;
    }else{
        answer = false;
    }
    return answer;
};

let q4a = console.log("\nQ4(50):" , boundary(50));
let q4b = console.log("Q4(20):" , boundary(20));
let q4c = console.log("Q4(100):" , boundary(100));
let q4d = console.log("Q4(400):" , boundary(400));
let q4e = console.log("Q4(120):" , boundary(120));

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

const strivify = function(string1) {
    let strive = string1.substr(0, 6);
    if (strive === "Strive"){
        return string1;
    }else{
        return `Strive ${string1}`
    }
};

let q5a = console.log("\nQ5(Strive):" , strivify("Strive"));
let q5b = console.log("Q5(school):" , strivify("school"));

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const check3and7 = function(num1) {
    let answer;
    if(num1 >= 0){
        if(num1 % 3 === 0 && num1 % 7 === 0){
            answer = `${num1} is the multiple of 3 and 7.` ;
        }else if(num1 % 3 === 0){
            answer = `${num1} is the multiple of 3.` ;
        }else if(num1 % 7 === 0){
            answer = `${num1} is the multiple of 7.` ;
        }else{
            answer = `${num1} is not a multiple of 3 or a multiple of 7.` ;
        }
    }else{
        answer = `${num1} is not a possitive number.` ;
    }
    return answer;
};

let q6a = console.log("\nQ6(12):" , check3and7(12));
let q6b = console.log("Q6(28):" , check3and7(28));
let q6c = console.log("Q6(10):" , check3and7(10));
let q6d = console.log("Q6(21):" , check3and7(21));
let q6e = console.log("Q6(0):" , check3and7(0));
let q6f = console.log("Q6(-12):" , check3and7(-12));

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

const reverseString = function(string1) {
    return string1.split('').reverse().join('')
};

let q7a = console.log("\nQ7(Strive):" , reverseString("Strive"));
let q7b = console.log("Q7(School):" , reverseString("School"));

/* WRITE YOUR CODE HERE */

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/