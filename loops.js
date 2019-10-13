function forLoop(array){

  array.push("I am 1 strange loop.")

  for (var i = 2; i < 25; i++) {

  array.push("I am " + i + " strange loops.")

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
