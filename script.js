let name ="Steve"

// console.log(name)

// variable - a store for data 

// declaration 
let accountBalance 
// initialisation 
accountBalance = 5000000
// = 4000000;

let price = 2500

// data type = 

// var - redeclared, reassigned
var type="type1"
var type="type2"
// ES6- let, const
// let- reassign but not reintroduce(redeclaring),
let  size = "Large"

size = "Medium"
size = "Small"

// const -> cannot reassign, cannot redeclare
const brand = "Versace";
// brand = "Nike";
console.log(brand)

// primitive types = ( number, string, boolean) ( null, undefined, BigInt, symbol)

let defaulter = true
let heading3 = document.getElementsByTagName('h3')[0]

console.log(heading3)

// complex, structured data type = (object,functions, arrays) 


// operators - constructs that are used to manipulate data. 

let secondName = "Otieno"
console.log(name+' '+secondName)
let num1=10, num2=5

let result
// Arithmetic (+,-,*, %, **, ++,--)
result = num1**num2
// operand-1 operator operand-2
// unary operator
num1--
console.log(num1)

//  assignment operator
// left <- right
//  =, (+=, -=, *=, %=, **=, /=)
// 5
num2 = num2 +5
// 10
num2**=4
// 10%4=2
// 15

let div3 = num2%3
 
console.log(div3)
let year = 2008
year%=4
console.log(year)

//  comparison

// Burj Khalifa <> Times Towers
// True / False
let num3 =1000
let num4 = 600

// comparison operators - used to compare values -> (true / false)
// (decision/loop) 
// >,<,>=,<=

if( num3 > num4){

    console.log("Burj Khalifa is taller")
} 

//  Boolean / logical

// &&-AND, ||- OR, !- Not
console.log(num3>num4 || 1 > 2)

let paidFee = true

console.log(! paidFee)

// console.log(result)

// `string..... ${}`

let introduction = `My name is ${name.toUpperCase()} I am a TM at Moringa`
let calc = `The sum of 2 +2 is ${2+2}`
console.log(introduction)
console.log(calc)

let balance = 12000
sellingPrice =7000

if(balance >= 7000){
    console.log(`Product has been purchased your current balance is ${balance-sellingPrice}`)
}else{
    console.log(`Insufficeinet fundsdeficit is ${sellingPrice- balance}`)
}

/*

..if block 
if(condition){

}

...if else blcok 
if(condition){
// logic if condition is true
}
else{

// logic if condition is false

}

.....if else if block
if (condition){

}else if(condition){

}

*/
// determine if a number is odd/ even
let number = 31
// a number

if(number%2===0){
    console.log(`${number } is even`)
}
else {
    console.log(`${number } is odd`)
}
let angle1=40
let angle2= 80
let angle3 = 60

if(angle1+angle2+angle3===180){
    console.log("valid triangle")
}else {
    console.log("Invalid triangle")
}

//  given length and width of a rectangle, write a program 
// to determine if the area is greater than the perimeter?

let width = 3
let length = 3

let area = length*width 
let perimeter = 2*(length+width)

if(area>perimeter){
    console.log(`Area: ${area} is greater than perimeter: ${perimeter}`)
}else{
    console.log(`Area: ${area} is less than perimeter: ${perimeter}`)
}

// while, do
// for()


let counter =1 //loop variable
//  iteration -instance of a loop 
// iterate 10 times
// while(condition){
// body of while loop
// }
while(counter<=10){ //condition
    
    if(counter%2!==0){
        console.log(`${counter} is odd`)
    }
    counter++ // increment/ decrement
} 
console.log("you are just from the loop")

 let counter2 = 10;
// let itercount= 1

//  while(counter2>=1){

//     console.log(counter2,itercount )
//     itercount++
//     counter2--
//  }

// do{
// console.log(counter2)
// counter2--
// }while(counter2<=1)

// for loop,
// (loop variable,condition,increment/decrement)

for(let counter=0; counter<=10; counter++){

    console.log(counter)
}


//  if else ladder / nested if else

// pay fee, granted entry, class->
let fee_balance= 7000
let student_type = "practical"
if(fee_balance<4000){
console.log("You can go to class")
    if(student_type==="practical"){
        console.log("Welcome to the practical class")
    }
}

let score = 80

if(score<=30){
    console.log("D")
}else if(score<=50 && score >30){
    console.log("C")
}else if(score<=70 && score >50){
    console.log("B")
}else if(score<=90 && score >70){
    console.log("A")
}

// case control structure -
// swicth, case, default
let code=257

switch(code){

    case 254:
        console.log("Kenya")
        break;
    case 256:
        console.log("Uganda")
        break;
    case 255:
        console.log("Tanzania")
        break;
    default:
        console.log("Not part of EAST Africa")

}


// Nested Loop

/*
*
**
***
****
*****
...
*/
let rows =1
while(rows<=10){
let star=''

for(let column=1; column<=rows; column++){
    star+='*'
}
console.log(star)

    rows++

}

// functions
function mult(num1, num2){
let mult = num1*num2
return mult
}


console.log(mult(60,17))
console.log(mult(6,17))
console.log(mult(5,8))


// withdraw, deposit, check_balance, createACcount
accountBalance=7000000


function withdraw(amount){

accountBalance-=amount
if(accountBalance>amount){

    console.log(`${createCode() }  CONFIRMED you have withdrawn ${amount} balance ${accountBalance}`)
    return accountBalance
}
else{
    console.log("Insufficent Funds")
}

}

withdraw(6000) //invoking/ calling

function createCode(){
    let string ="ZXCVBNM12345678990POIUYTREWWQASDGFHJKL"
let Code =''
    for(let i=0; i<=7;i++){
        Code+=string[Math.floor(Math.random()*string.length)]
    }
    return Code
}
console.log(createCode())

// anonymous function
let deposit = function (amount=0){
accountBalance+=amount
console.log(`You have deposited ${amount}`)
}

// anonymous arrow function () => {}
let checkBalance = () =>{ 

console.log(`your account Balance is ${accountBalance}`)
}

// IIFE, hoisting


(function (name){
console.log("Your name is "+name)

}("steve"))
( function (opt){
// body
}())
// defined and called the function




