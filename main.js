function removeChar(str){str = str.substring(1,str.length-1) };
   

   let myString = "Testing"

   removeChar(myString)
   
myArray = [34,15,88,2]

class SmallestIntegerFinder {
    findSmallestInt(args) {
      console.log(Math.max(args)) 
      
    }
  }
  
console.log(myArray.findSmallestInt)

console.log(Math.max(...myArray)) 

var summation = function (num) {
    let total = 0
    for(i = 1; i<= num; i++) {
      total = total + i
    }
    console.log(total)
  }

  let myNum = 11

 summation(myNum)

 function squareSum(numbers){
    total = 0
    for(i =0; i<numbers.length; i++){
      total = total + numbers[i] ** 2
    }
    return total
  }
let total = 0
function squareSum(numbers) {
    total =0
    numbers.forEach(element => {
        total = total + (element ** 2)
    })
    return total        
};

myArray1 = [1,2,2]
squareSum(myArray1)

function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    i = 0
    arrayOfSheep.forEach(element => {
      if(element === 'sheep') {
        i++
      }      
    })
    return i
}

let myArray2 = ['sheep', 'cow',1,'sheep']
countSheeps(myArray2)


function litres(time) {
    time = Math.floor(time) * 0.5
    return Math.floor(time)


  }

// console.log(Math.floor(11.8) * 0.5)

litres(3)
litres(6.7)
litres(11.8)

array1 = [1,2,3,4,5,6,7,8,9]
array2 = [3,2,4,6,7,8,1,9]
// function findDeletedNumber(arr, mixArr) {
//   // your code
//   return arr.filter(x => !mixArr.includes(x))
// }

function findDeletedNumber(arr, mixArr) {
  // your code
  return arr.reduce(arr.filter(x => !mixArr.includes(x)))
}
console.log(findDeletedNumber(array1,array2))

//Sum Mixed Array

let myArray = [5,4,'a','b',3]

function sumMix(x){
  let total = 0
  for(const val of x) {
    total += Number(val);
  }
  return total

}

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];

function countLanguages(list) {
  // thank you for checking out the Coding Meetup kata :)
  let obj = {
    C: 0,
    JavaScript: 0,
    Ruby: 0
  }
  for(i=0;i<list.length; i++) {
    if(list[i].language === 'C') {
      obj.C = obj.C + 1
    }else if(list[i].language === 'JavaScript') {
      obj.JavaScript = obj.JavaScript + 1
    }else if(list[i].language === 'Ruby') {
      obj.Ruby = obj.Ruby + 1
    }
  }
  return obj
  
}

function countLanguages(list) {
  // thank you for checking out the Coding Meetup kata :)
  let obj = {
    C: 0,
    JavaScript: 0,
    Ruby: 0
  }
  list1.forEach(element => {
    if(element.language === 'C') {
      obj.C = obj.C + 1
    }else if(element.language === 'JavaScript') {
      obj.JavaScript = obj.JavaScript + 1
    }else if(element.language === 'Ruby') {
      obj.Ruby = obj.Ruby + 1
    }
  });
  return obj
}

console.log(countLanguages(list1))

function countLanguages(list) {
  // thank you for checking out the Coding Meetup kata :)
 let obj = {}
 list.array.forEach(element => {
   element.language = obj.language
 });
 console.log(obj)

}


console.log(countLanguages(list1))

let myArray = [1, 2, 3, 4, 5, 6]

function divisibleBy(numbers, divisor){
  return console.log(numbers.filter(items => items % divisor === 0))
}


function divisibleBy1(numbers, divisor) {
  let myPlaceHolder = []
  for(i=0;i<numbers.length;i++) {
    if(numbers[i] % divisor === 0) {
      myPlaceHolder.push(numbers[i])
    }
  }
  return console.log(myPlaceHolder)
}

divisibleBy1(myArray,2)
myString = "Shoes are nice"
function stringToArray(string){
	// code code code
  let newArray = string.split(' ').join('')
  return console.log(newArray)
}

stringToArray(myString)

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  if(enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate)){
    return true
  } else return false
}

function solution(number){
  var sum = 0;
  
  for(var i = 1;i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i
    }
  }
  return sum;
}

console.log(solution(10))

function getCount(str) {
  var vowelsCount = 0;
  
  // enter your majic here
  for(i=0;i<str.length; i++){
    if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
      vowelsCount++
    }
  }
  return vowelsCount
}

console.log(getCount("Paneninou"))