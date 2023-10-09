// it is reducing the callback complexity 




function promise(n1,n2){
    return new Promise((res,rej)=>{
        res(n1+n2)
    })
}

function hai(n1,n2){
    return new Promise((res,rej)=>{
        res(n1*n2)
    })
}
function hello(n1,n2){
    return new Promise((res,rej)=>{
        res(n1-n2)
    })
}


promise(10,12).then((data)=>{
    console.log(data);
    return hai(data,10)
}).then((value)=>{
    console.log(value);
    return hello(value,28)
}).then((result)=>{
    console.log(result);
})