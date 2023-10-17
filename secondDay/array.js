const a = [12,45,34,5,67,68,45,56]

// Map without return
a.map((data)=>{
    console.log("without return Map",data);
})


//Map return
var b= a.map((data)=>{
    return data
})

console.log("Return Map",b);

// forEach doesn't have return 

c=a.forEach((data)=>{
    console.log("foreach",data);
})


//filter we can filter 

var d = a.filter((data)=>{
    return data<10
})
console.log("filtered",d);
