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
// function longestWord(){
//     You=parseInt(prompt("enter your full name"))
//     console.log(You.length)
// }

// longestWord()

// function longestWord(){
//     You=prompt("full name")
//     console.log(You.length)
//     console.log(You.split(" "))
//     // console.log(Math.max(You.split(" ")))
// }

// longestWord()




// write a function to get the area of a circle
// let areaOfaCircle = (r,h) => {
//     result = 1/3 * (Math.PI * r * h);
//     console.log(result);
// }

// areaOfaCircle(12,5);
// areaOfaCircle(7,9);

// //quadraticEquation
// let quadraticEquation =(a,b,c) => {
//     let d = b**2 - 4*a*c;
//     let rootOne = ((-b + Math.sqrt(d))/(2*a));
//     let rootTwo = ((-b - Math.sqrt(d))/(2*a));
//     console.log(`the first root is ${rootOne} the second root is ${rootTwo}`)
// }

// quadraticEquation(1, 5, 6)


// write a program that determines if a year is a leap year

function year (Lyear){
       let result= Lyear%4;
       if (result === 0){
            alert(`${Lyear} is a leap year`)
            console.log(`${Lyear} is a leap year`)
       }
       else if(isNaN(Lyear)){
        alert("enter a valid year")
        console.log("enter a valid year")
       }
       else{
        alert(`${Lyear} is not a leap year`)
        console.log(`${Lyear} is not a leap year`)
       }

}

year(2008);
year(2021);
year(2004);
year("frjk");


checkPerimeter=(l, w) => {
    result= 2*(l+w)
    console.log(result)

}

checkPerimeter(12, 6)
checkPerimeter(3,5)


for(let i=0; i <= 10; i++){
    console.log("the value of i:", i)
}
