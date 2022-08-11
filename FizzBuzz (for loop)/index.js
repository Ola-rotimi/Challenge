function fizzbuzz(a){

    for (i = a; i > 0; i--){
        if(i % 3 == 0 && i % 5 == 0)
        console.log("Fizzbuzz")
        else if (i % 3 == 0)
        console.log("Fizz")
        else if (i % 5 == 0)
        console.log("Buzz")
        else
        console.log(i)
    }
    
    console.log(i)

}

fizzbuzz(prompt("Enter a Number"))