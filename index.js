var kittens = ["Milo","Otis","Garfield"]; //define your array here
var array2=new array();
// Add your functions and code here
function destructivelyAppendKitten(name){
return kittens.push(name);
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  return kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift();
}

function appendKitten(name){
  array2=kittens.push(name);
  return array2;
}

function prependKitten(name){
  array2=kittens.unshift(name);
  return array1;
}

function removeLastKitten(name){
  array2=kittens.pop();
  return array1;
}

function removeFirstKitten(name){
array2=kittens.shift();
return array1;
}
