let output = [];

function fibonacci(n) {
  if (n == 1){
    output = [0];
  } else if(n == 2){
    output = [0, 1]
  } else{
    output = [0, 1]
    for(i = 2; i < n; i++){
      output.push(output[output.length - 1] + output[output.length - 2])
    }
  }
  return output
}

output = fibonacci(prompt("Enter a number"));
console.log(output);
