// // write a function that divides two numbers
// const number = (num1, num2 ) => {
//    num1= parseInt(prompt('enter any number'))
//    num2= parseInt(prompt("enter any number"))
//     let result= num1/num2
//     console.log(result);
// }
// number();


// // write a function that checks if a number is even or odd
// function checkNumber(){
//     even= parseInt(prompt("enter a number"));
//     if(even%2===0){
//         alert(`${even} is an even number`)
//         console.log(`${even} is an even number`)
//     } else if (isNaN(even)){
//     alert(`${even} is not a valid number`)
//         console.log(`${even} is not a valid number`)
//     }else{
//         alert(`${even} is an odd number`)
//         console.log(`${even} is an odd number`)
//     }
   
// }
// checkNumber();

// write a function that returns the largest of three numbers.
// function checkMax (){
//     let num1 = parseInt(prompt("enter a number"))
//     let num2 = parseInt(prompt("enter a number"))
//     let num3 = parseInt(prompt("enter a number"))
//     console.log(Math.max(num1,num2,num3))
//     // console.log(Math.min(num1,num2,num3))
// }
// checkMax();

// function checkMin(numone,numtwo,numberthree){
//     console.log(Math.min(numone, numtwo,numberthree))
// }

// checkMin(1,2,3);


// write a function that reverse a string
// function string(){
//        let result = prompt("enter your name")
//        console.log(result.split("") .reverse() .join(""))
// }

// string()

// write a function that returns that returns the longest word in a sentence
 



// for (let i = 0; i < 5; i++){
//     console.log('This is the value of i', i)
// }

// for(let startingIndex = 1; startingIndex < 50; startingIndex++){
//     if(startingIndex % 2 === 0){
//         console.log(startingIndex, "is an even number")
//     }
//     else{
//         console.log(startingIndex, "is an odd number")
//     }
// }

// for( let a = 5; a <= 20; a++){
//     console.log("this is the value of A:", a)
// }


// let score = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// for (let i = 0; i < 9; i++)
//     {
//     console.log('score = ',score[i])
// }


// for(let B = 1; B <= 50; B++){
//     console.log(B, " is the value of B")
// }

console.log(document.getElementsByClassName("text"))
console.log(document.getElementsByClassName("text")[0].innerText)
console.log(document.getElementById("header"))
console.log(document.getElementById("header").innerText)
console.log(document.getElementsByClassName("box"))
console.log(document.getElementsByClassName("btn"))
console.log(document.querySelector("p"))
console.log(document.querySelectorAll("p"))
console.log(document.querySelectorAll("li"))
console.log(document.querySelectorAll("li")[2].innerText)
console.log(document.querySelectorAll("li")[3].innerHTML)
console.log(document.querySelectorAll("li")[3].innerText = "garri")
console.log(document.getElementById("header").textContent = "I am Evelyn")


const student = {
    name: "Evelyn",
    mail: "evelynolofin@gmail.com",
    gender: "female",
    age: 28,
    
}

console.log(student)
console.log(Object.keys(student))
console.log(Object.values(student))