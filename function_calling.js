// function add(){ this function name is normal function declaration   // this is an hoisting function

//     console.log("Normal Function Declaration");
//     console.log("hei");
// }

// add()


// fun()    // this is an error that is called hoisting 

// hoisting is we can initialize before the function declaring



// const fun=function add(){  //this function name is => function expression     // this is not hoisting function
//     console.log("Function Expression");
//     console.log("hei");
// }

// fun()  



const mul=(a,b)=>{   // this function name is => arrow function   // this is not hoisting function   always assign to any variables

    console.log("Arrow Function");
    return a+b;
}

console.log(mul(2,3));