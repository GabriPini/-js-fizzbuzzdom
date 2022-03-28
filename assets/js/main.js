//Milestone 1
const Box= document.getElementById('box')
const containerElement = document.getElementById('main_container')
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
    
    
    
    let objectBox;
    // display FizzBuzz in the page if the number is a multiple of 3 and 5 
    if ( ( i % 3 == 0) && ( i % 5 == 0) ){
        objectBox = "FizzBuzz"
        markupObject = `
        <div id="box" class=" p-2 d-flex square bg_red m-2 fw-bold">
        ${objectBox}
        </div>`
        containerElement.insertAdjacentHTML ('beforeend' , markupObject )
        
        // display Fizz in the Page if the number is a multiple of 3 
    } else if (i % 3 == 0){
        objectBox = "Fizz"
        markupObject = `
        <div id="box" class=" p-2 d-flex square bg_green m-2 fw-bold">
        ${objectBox}
        </div>`
        containerElement.insertAdjacentHTML ('beforeend' , markupObject )
        
        // display Buzz in the Page if the number is a multiple of 5
    } else if ( i % 5 == 0){
        objectBox = "Buzz"
        markupObject = `
        <div id="box" class=" p-2 d-flex square bg_yellow m-2 fw-bold">
        ${objectBox}
        </div>`
        containerElement.insertAdjacentHTML ('beforeend' , markupObject )
        
    } else{
        
        objectBox = i
        markupObject = `
        <div id="box" class=" p-2 d-flex square bg_blue m-2 fw-bold fs-5">
        ${objectBox}
        </div>`
        containerElement.insertAdjacentHTML ('beforeend' , markupObject )
    }
    
    
    
    //Display on page
}




