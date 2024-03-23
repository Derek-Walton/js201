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

function add(a, b){
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function checkObject(obj){
    obj['checked'] = true;
}

function checkObjectInside(obj){
    if ('data' in obj){
        obj['data'].checked = true;
    }
}

function arraySet(arr, i, n){
    if (i + 1 <= arr.length && i >= 0 && Number.isInteger(i)){
        arr[i] = n;
    }
}

function addAll(arr){
    let total = 0;
    for (let number of arr) {
        total += number;
    }
    return total;
}

function larger(a, b){
    return(Math.max(a, b));
}

function largest(arr){
    if (arr.length > 0){
        let currentLargest = arr[0];
        for (let number of arr){
            currentLargest = larger(currentLargest, number);
        }
        return currentLargest
    } else {
        return null;
    }
}

function compare(a, b) {
    if (a.length != b.length) {
        return false;
    }
    for (let i = 0; i < a.length; i++){
        if (a[i] != b[i]) {
            return false;
        }
    }
    return true
}

function addToAll(arr, n){
    for (let i = 0; i < arr.length; i++){
        arr[i] += n
    }
    return arr;
}

let remembered;

