// We have defined a variable called yourArray. Complete the statement by assigning an array of at least 5 elements in length to the yourArray variable. Your array should contain at least one string, one number, and one boolean.

// let yourArray;
// yourArray = ['string', 'boolean', 'number', 17, true ]
// -------------------------------------------------------------------------------------------

// In order to complete this challenge, set the 2nd position (index 1) of myArray to anything you want, besides the letter b.

// let myArray = ["a", "b", "c", "d"];
// myArray[1] = "not b anymore"

// console.log(myArray);
// -------------------------------------------------------------------------------------------------
// We have defined a function, mixedNumbers, which we are passing an array as an argument. Modify the function by using push() and  unshift() to add 'I', 2, 'three' to the beginning of the array and 7, 'VIII', 9 to the end so that the returned array contains representations of the numbers 1-9 in order.

// function mixedNumbers(arr) {
//     arr.unshift("I", 2, "three" );
//     arr.push(7, "VIII", 9);
//     return arr;
//   }
  
//   console.log(mixedNumbers(['IV', 5, 'six']));
// --------------------------------------------------------------------------------------------------------------

// function popShift(arr) {
//     let shifted =arr.shift();
//     let popped = arr.pop();
//     let newArr = [];
//     newArr.unshift(popped);
//     newArr.push(popped)
      
    
//     return [shifted, popped];
//   }
  
//   console.log(popShift(['challenge', 'is', 'not', 'complete']));
// ---------------------------------------------------------------------------------------------------------------------

// We've initialized an array arr. Use splice() to remove elements from arr, so that it only contains elements that sum to the value of 10.
// const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// let newArr = arr.splice(4, 4);
// arr.shift()

// console.log(arr);
// -------------------------------------------------------------------------------------------------------------

// We have defined a function, htmlColorNames, which takes an array of HTML colors as an argument. Modify the function using splice() to remove the first two elements of the array and add 'DarkSalmon' and 'BlanchedAlmond' in their respective places.

// function htmlColorNames(arr) {
//     arr.splice(0, 2 ,'DarkSalmon', 'BlanchedAlmond' )
//     return arr;
//   }
  
//   console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
// ----------------------------------------------------------------------------------------------------------------
// We have defined a function, forecast, that takes an array as an argument. Modify the function using slice() to extract information from the argument array and return a new array that contains the string elements warm and sunny.

// function forecast(arr) {
//     let newArr = arr.slice(2,4)
   
    
//      return newArr
//    }
   
   
//    console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
// --------------------------------------------------------------------------------------------------------------------

// We have defined a function, copyMachine which takes arr (an array) and num (a number) as arguments. The function is supposed to return a new array made up of num copies of arr. We have done most of the work for you, but it doesn't work quite right yet. Modify the function using spread syntax so that it works correctly (hint: another method we have already covered might come in handy here!).

// function copyMachine(arr, num) {
//     let newArr = [];
//     while (num >= 1) {
//       let ourArr = [...arr]
//      newArr.push(ourArr)
     
//       num--;
//     }
//     return newArr;
//   }
  
//   console.log(copyMachine([true, false, true], 2));
// ---------------------------------------------------------------------------------------------------------------------

// We have defined a function spreadOut that returns the variable sentence. Modify the function using the spread operator so that it returns the array ['learning', 'to', 'code', 'is', 'fun'].

// function spreadOut() {
//     let fragment = ['to', 'code'];
//     let sentence = ['learning', ...fragment, 'is', 'fun'  ]
//     return sentence;
//   }
  
//   console.log(spreadOut());
// -------------------------------------------------------------------------------------------------------------
// indexOf() can be incredibly useful for quickly checking for the presence of an element on an array. We have defined a function, quickCheck, that takes an array and an element as arguments. Modify the function using indexOf() so that it returns true if the passed element exists on the array, and false if it does not.
// function quickCheck(arr, elem) {
//     return arr.indexOf(elem)>=0
//   }
  
//   console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
// ----------------------------------------------------------------------------------------------------------------

// We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, and returns a new array. elem represents an element that may or may not be present on one or more of the arrays nested within arr. Modify the function, using a for loop, to return a filtered version of the passed array such that any array nested within arr containing elem has been removed.

// function filteredArray(arr, elem) {
//     let newArr = [];
//     // for (let i = 0; i < arr.length; i++){
//     //   if (!arr[i].includes(elem)){
//     //     newArr.push(arr[i])
//     //   }
//     // }
//     arr.forEach((item)=>{
//       if (!item.includes(elem)){
//         newArr.push(item)
//       }
//     })
//     return newArr;
//   }
  
//   console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
// ---------------------------------------------------------------------------------------------------------------------

// We have defined a variable, myNestedArray, set equal to an array. Modify myNestedArray, using any combination of strings, numbers, and booleans for data elements, so that it has exactly five levels of depth (remember, the outer-most array is level 1). Somewhere on the third level, include the string deep, on the fourth level, include the string deeper, and on the fifth level, include the string deepest.
// let myNestedArray = [
  
//     ['unshift', false, 1, 2, 3, 'complex', 'nested',['deep',['deeper', ['deepest']]]],
//     ['loop', 'shift', 6, 7, 1000, 'method'],
//     ['concat', false, true, 'spread', 'array'],
//     ['mutate', 1327.98, 'splice', 'slice', 'push'],
//     ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
    
//   ];
// -------------------------------------------------------------------------------------------------