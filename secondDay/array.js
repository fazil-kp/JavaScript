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


// slice and splise 

// slice will cut on the index value
// splice will cut o the count


const arr = [12,14,87,67,89,87,65,43]

const sl=arr.slice(1,5) //print 89
console.log('slice',sl);

const sp=arr.slice(1,6) //print 6 counts in 1 st index
console.log('splice',sp);



// push (adding elemnt in last)
// unshift (adding element in first)
// pop (deleting last element)
// shift (deleting first element)
// some (in any condition is true that will true)
// every (all condtn true) 

const arry=[12,45,67,89,56,57,46,57]
arry.push(99)
console.log(arry);
arry.unshift(87)
console.log(arry);
arry.pop()
arry.shift()
console.log(arry);

const smev = arry.some((li)=>{
    return li>12 // any cndtn is true then true
})
console.log(smev);

const evsm = arry.some((li)=>{
    return li>12 // all cndtn is true then true
})
console.log(evsm);

// sort we can sort the array

const srt = arry.sort((a,b)=>{
    return a-b
})
console.log(srt);

//includes the value is in the array or not

const inc=[1,6,8,9,19,76]
const inclu= inc.includes(8) // 8 in the array so true
console.log(inclu);

// join we can join the array in any format

// const jo=[1,4,5,6,7,8]
// const joi=jo.join(' + ')
// console.log(joi);
const jo=[1,4,5,6,7,8]
const joi=jo.join(' + ')
console.log(typeof(joi));


// reverse we can write array in reverse format

const re=[3,7,8,6,9,5,6,4]
const rev = re.reverse()
console.log(rev);

// flat removing nested arrays in one array

const f= [2,3,[3,4],5,[5,7,9],[9]]
const fl=f.flat(3)
console.log(fl);
