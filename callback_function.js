// callback function

function callback(a,b,cb){
cb(a+b)
}
function callback2(a,b,cb){
    cb(a*b)
    }

callback(10,15,(sum)=>{
    console.log(sum);
    callback2(sum,10,(mul)=>{
        console.log(mul);
    })
})