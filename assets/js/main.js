//Milestone 1
let i;

for (i = 1; i <= 100; i++) {
    // display FizzBuzz in the console if the number is a multiple of 3 and 5
    if ( ( i % 3 == 0) && ( i % 5 == 0) ){
        
        console.log("FizzBuzz")

    // display Fizz in the console if the number is a multiple of 3 
    } else if (i % 3 == 0){

        console.log("Fizz")

    // display Buzz in the console if the number is a multiple of 5
    } else if ( i % 5 == 0){

        console.log("Buzz")

    } else{

        console.log(i)

    }

}