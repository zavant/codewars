// function removeChar(str){str = str.substring(1,str.length-1) };
   

//    let myString = "Testing"

//    removeChar(myString)
   
// myArray = [34,15,88,2]

// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       console.log(Math.max(args)) 
      
//     }
//   }
  
// console.log(myArray.findSmallestInt)

// console.log(Math.max(...myArray)) 

// var summation = function (num) {
//     let total = 0
//     for(i = 1; i<= num; i++) {
//       total = total + i
//     }
//     console.log(total)
//   }

//   let myNum = 11

//  summation(myNum)

//  function squareSum(numbers){
//     total = 0
//     for(i =0; i<numbers.length; i++){
//       total = total + numbers[i] ** 2
//     }
//     return total
//   }
// let total = 0
// function squareSum(numbers) {
//     total =0
//     numbers.forEach(element => {
//         total = total + (element ** 2)
//     })
//     return total        
// };

// myArray1 = [1,2,2]
// squareSum(myArray1)

// function countSheeps(arrayOfSheep) {
//     // TODO May the force be with you
//     i = 0
//     arrayOfSheep.forEach(element => {
//       if(element === 'sheep') {
//         i++
//       }      
//     })
//     return i
// }

// let myArray2 = ['sheep', 'cow',1,'sheep']
// countSheeps(myArray2)


// function litres(time) {
//     time = Math.floor(time) * 0.5
//     return Math.floor(time)


//   }

// // console.log(Math.floor(11.8) * 0.5)

// litres(3)
// litres(6.7)
// litres(11.8)

// array1 = [1,2,3,4,5,6,7,8,9]
// array2 = [3,2,4,6,7,8,1,9]
// // function findDeletedNumber(arr, mixArr) {
// //   // your code
// //   return arr.filter(x => !mixArr.includes(x))
// // }

// function findDeletedNumber(arr, mixArr) {
//   // your code
//   return arr.reduce(arr.filter(x => !mixArr.includes(x)))
// }
// console.log(findDeletedNumber(array1,array2))

// //Sum Mixed Array

// let myArray = [5,4,'a','b',3]

// function sumMix(x){
//   let total = 0
//   for(const val of x) {
//     total += Number(val);
//   }
//   return total

// }

// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
//   { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
//   { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
//   { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
// ];

// function countLanguages(list) {
//   // thank you for checking out the Coding Meetup kata :)
//   let obj = {
//     C: 0,
//     JavaScript: 0,
//     Ruby: 0
//   }
//   for(i=0;i<list.length; i++) {
//     if(list[i].language === 'C') {
//       obj.C = obj.C + 1
//     }else if(list[i].language === 'JavaScript') {
//       obj.JavaScript = obj.JavaScript + 1
//     }else if(list[i].language === 'Ruby') {
//       obj.Ruby = obj.Ruby + 1
//     }
//   }
//   return obj
  
// }

// function countLanguages(list) {
//   // thank you for checking out the Coding Meetup kata :)
//   let obj = {
//     C: 0,
//     JavaScript: 0,
//     Ruby: 0
//   }
//   list1.forEach(element => {
//     if(element.language === 'C') {
//       obj.C = obj.C + 1
//     }else if(element.language === 'JavaScript') {
//       obj.JavaScript = obj.JavaScript + 1
//     }else if(element.language === 'Ruby') {
//       obj.Ruby = obj.Ruby + 1
//     }
//   });
//   return obj
// }

// console.log(countLanguages(list1))

// function countLanguages(list) {
//   // thank you for checking out the Coding Meetup kata :)
//  let obj = {}
//  list.array.forEach(element => {
//    element.language = obj.language
//  });
//  console.log(obj)

// }


// console.log(countLanguages(list1))

// let myArray = [1, 2, 3, 4, 5, 6]

// function divisibleBy(numbers, divisor){
//   return console.log(numbers.filter(items => items % divisor === 0))
// }


// function divisibleBy1(numbers, divisor) {
//   let myPlaceHolder = []
//   for(i=0;i<numbers.length;i++) {
//     if(numbers[i] % divisor === 0) {
//       myPlaceHolder.push(numbers[i])
//     }
//   }
//   return console.log(myPlaceHolder)
// }

// divisibleBy1(myArray,2)
// myString = "Shoes are nice"
// function stringToArray(string){
// 	// code code code
//   let newArray = string.split(' ').join('')
//   return console.log(newArray)
// }

// stringToArray(myString)

// function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
//   if(enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate)){
//     return true
//   } else return false
// }

// function solution(number){
//   var sum = 0;
  
//   for(var i = 1;i< number; i++){
//     if(i % 3 == 0 || i % 5 == 0){
//       sum += i
//     }
//   }
//   return sum;
// }

// console.log(solution(10))

// // Return the number (count) of vowels in the given string.
// // We will consider a, e, i, o, u as vowels for this Kata (but not y).
// // The input string will only consist of lower case letters and/or spaces.
// // function getCount(str) {
//   var vowelsCount = 0;
  
//// enter your majic here
//   for(i=0;i<str.length; i++){
//     if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
//       vowelsCount++
//     }
//   }
//   return vowelsCount
// }

// console.log(getCount("Paneninou"))

// // In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
//
// function highAndLow(numbers){
//   const myNum = numbers.split(' ')
//   return Math.max.apply(null, myNum) + ' ' + Math.min.apply(null, myNum)
// }



//// Write a function which converts the input string to uppercase.
///

// function makeUpperCase(str) {
//     // Code here
//     return str.toUpperCase()
//   }

// //  Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".
// //  The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.
// //  Upper or lower case letter does not matter -- "eNglisH" is also correct.
// //  Return value as boolean values, true for the string to contains "English", false for it does not.

// function spEng(sentence){
//     return sentence.toLowerCase().includes("english")
//   }

// // An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// function isIsogram(str){
//     //...
//     console.log(str)
//     for(i=0;i<= str.length;i++) {
//         if(str === "") {
//           return true
//         }else if(str.toLowerCase().split("").sort().join("").match(/(.)\1+/g)){
//           return false
//         }else return true
//     }
//   }

// // Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
// // Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// const paperwork = (n,m) => {
//   if(n < 1 || m <1 ){
//    return 0
//  }else {
//    return n * m
//  }
// }



// // // Complete the solution so that it returns a formatted string. 
// // // The return value should equal "Value is VALUE" where value is a 5 digit padded number.


// function solution(value){
//   let newVal = value.toString().split('')
// for(i=0; newVal.length < 5; i++) {
//   newVal.unshift(0)
//   }
//   newVal = newVal.join('')
//   return `Value is ${newVal}`
  
// }

/*You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog) if it is possible and false (0 in Prolog) if not. The input values are always positive. */

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   if(distanceToPump > mpg * fuelLeft) {
//     return false
//   }else return true
// };


// Only change code below this line
// function countdown(n){
//   if(n<1) {
//     return []
//   }else {
//     const countArray = countdown(n-1)
//     countArray.unshift(n)
//     return countArray
//   }
// }
// // Only change code above this line

// console.log(countdown(10))

// function rangeOfNumbers(startNum, endNum) {
//   if(endNum >= endNum + 1) {
//     return []
//   }else {
//     const countArray = rangeOfNumbers(startNum + 1)
//     countArray.unshift(startNum)
//     return countArray
//   }
// };

// function rangeOfNumbers(startNum, endNum) {
//   return startNum === endNum ? [startNum] : [...rangeOfNumbers(startNum, endNum - 1), endNum ];
// }

// console.log(rangeOfNumbers(1,5))

// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

// function feast(beast, dish) {
//   //your function here
//   if(beast[0] == dish[0] && beast[beast.length - 1] === dish[dish.length -1]) {
//     return true
//   } 
// }

//Fake Binary translator

// function fakeBin(x) {
//   let newArray = []
//   x.split('').forEach(element => {
//     if(element < 5) {
//       newArray.push('0')
//     }else newArray.push('1')
//   })
//   return newArray.join('')
// }

// console.log(fakeBin('54930934020'))

// //Name Shuffler

// function nameShuffler(str){
//   return str.split(' ').reverse().join(' ')
// }

// //Stop gninnipS My sdroW!

// function spinWords(string){
//   //TODO Have fun :)
//   let newString = ''
//   string = string.split(' ')
//   for(let i=0;i<string.length; i++) {
//     if(string[i].length >= 5) {
//       newString = string[i].split('').reverse().join('')
//       string[i] = newString
//     }
//   }return string.join(' ')
// }

// console.log(spinWords("This is my last serenade"))
// console.log(spinWords("A world at odds fights for their rights"))


//Complete the solution so that the function will break up camel casing, using a space between words.

// function solution(string) {return string.replace(/([A-Z])/g, ' $1').trim()}


// // You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
// // Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

// function likes(names) {
//   // TODO
//   if(names.length == 0) {
//     return 'no one likes this'
//   }else if(names.length === 1) {
//     return `${names[0]} likes this`
//   }else if(names.length === 2) {
//     return `${names[0]} and ${names[1]} like this`
//   }else if(names.length === 3) {
//     return `${names[0]}, ${names[1]} and ${names[2]} like this`
//   }else return `${names[0]}, ${names[1]} and ${names.length -2} others like this`
// }


// //Sum of Digits
// function digital_root(n) {
//   const reducer = (accumulator, currentValue) => accumulator + currentValue;
//   total = String(n).split('').map(x=>+x).reduce(reducer)
//   do {
//   if(total >= 10) {
//     total = String(total).split('').map(x=>+x).reduce(reducer)
//   }
//  } while (total >= 10) return total
// }

//Yor task is to write function factorial

function factorial(n){
  if (n=== 0 || n === 1)
     return 1;
   for (let i = n - 1; i >= 1; i--) {
     n *= i;
   }
   return n;
 }