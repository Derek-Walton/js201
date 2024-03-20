/*
 * This is index.js
 *
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function id() {
  return "UP2124866";
}

function fn() {
  return 'Derek';
}

function sn() {
  return 'Walton';
}

function example() {
  // replace this example with
  // your first function then
  // add more below as necessary.

}

function add(a, b){
  return a + b;
}

function subtract(a, b){
  return a - b;
}

function checkObject(obj){
  obj['checked'] = true;
}

function checkObjectInside(obj){
  if ('data' in obj){
    obj.data.checked = true;
  }
}

function arraySet(arr, i, n){
  // console.log(arr, i, n)
  if (i <= arr.length - 1 && i >= 0 && Number.isInteger(i)){
    arr[i] = n;
  }
}

function addAll(arr){
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];

  }
  return sum
}

function larger(a, b){
  if (a > b){
    return a;
  } else {
    return b;
  }
}

function largest(arr){
  let largestNumber;
  if (arr.length == 0){
    return null;
  } else{
    for (let i = 0; i < arr.length; i++){
      largestNumber = larger(largestNumber, arr[i]);
    }

  }
  return largestNumber;
}

function compare(a, b){
  if (a.length == b.length){
    for (let i = 0; i < a.length; i++){
      if (a[i] != b[i]){
        return false
      }
    }  
    return true;
  }
  return false
  
}

function addToAll(arr, n){
  for (let i = 0; i < arr.length; i++){
    arr[i] = arr[i] + n;
  }
  return arr;
}

let remembered;

function rememberThis(keepsake){
  remembered = keepsake;
}

function nArray(n){
  let newArr = [];
  for (let i = 1; i < n + 1; i++){
    newArr[i-1] = i;
  }
  return newArr;
}

function addAllOpt(arr){
  let sum = 0;
  if (arr == null){
    return sum;
  }
  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}

function divisors(arr, div){
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i] % div == 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function multiples(n, m){
  let newArr = [];
  for (let i = m; i <= n*m; i += m){
    newArr.push(i);
  }
  return newArr;
}