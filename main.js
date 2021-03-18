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

let myArray = [5,4,'a','b',3]

let total = 0
function sumMix(x){
  for(i=0;i<x.length;i++) {
    total = total + x[i]
  }
  return total

}
console.log(sumMix(myArray))