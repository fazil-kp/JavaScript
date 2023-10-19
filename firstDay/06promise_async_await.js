
// function asyncawait(){
//     return new Promise ((res,rej)=>{
//         setTimeout(()=>{
//             let name = "Faz"
//         res(name)
//         },3000);
//     })
// }

// function asyncawait2(){
//     return new Promise ((res,rej)=>{
//         setTimeout(()=>{
//             let age = 30
//         res(age)
//         },3000);
//     },)
// }

// Promise.all([asyncawait(),asyncawait2()]).then((result)=>{
//     console.log(result);
// })

// async function display(){
//     let name = await asyncawait()
//     console.log(name);
//     let age = await asyncawait2()
//     console.log(age);
// }
// display()

setTimeout(function(){
    console.log("hai");
},1000)

const a = setInterval(function(){
    console.log('hello');
},1000)

setTimeout(()=>{
    clearInterval(a)
},4000)