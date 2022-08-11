output = []

function fizzbuzz(a){

    for (i = 1; i <= a; i++){
        if(i % 3 == 0 && i % 5 == 0)
        output.push("Fizzbuzz")
        else if (i % 3 == 0)
        output.push("Fizz")
        else if (i % 5 == 0)
        output.push("Buzz")
        else
        output.push(i)
    }
    
    console.log(output)

}

fizzbuzz(prompt("Enter a Number"))