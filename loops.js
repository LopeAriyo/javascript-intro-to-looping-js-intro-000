function forLoop(array){

  for (var i = 0; i < 25; i++) {


    if (i < 2 ) {
      array.push("I am " + i + " strange loop.")
    } else {
      array.push("I am " + i + " strange loops.")
    }

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



function doWhileLoop(num){
var  i=0;
  

  do {
    console.log ("I run once regardless.")
    i++;
  }
  while (i<=num);

} 
