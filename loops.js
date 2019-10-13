function forLoop(array){

  for (var i = 1; i < 25; i++) {

  array.push("I am ${i} strange loop${i === 0 ? '' : 's'}.")

  }

  return array

}

var k=0;

function whileLoop(n){

  while (k<=n) {
    return(n-k)
    k++
  }
  return("done")
}

var  i=0;

function doWhileLoop(num){

  do {
    console.log ("I run once regardless.")
    i++;
  }
  while (i<=num);

}
