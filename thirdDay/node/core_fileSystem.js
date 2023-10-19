const { log } = require('console');
const fs = require('fs')

// read file

fs.readFile("hai.txt",'utf-8',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})

// write file

fs.writeFile('data.txt','Hello Boys',(err)=>{
    console.log('success');
})

// create or update(overwrite)

// fs.appendFile('mfz.txt','\n Hello Hai' , (err)=>{
//     if (err){
//         console.log(err);
//     }else{
//         console.log("file created");
//     }
// })

// create file 
fs.appendFile('fazil.html','\n <h1>Hello Boys</h1>' , (err)=>{
    if (err){
        console.log(err);
    }else{
        console.log("file created");
    }
})

// // rename file

// fs.rename("./mfz.txt","faz.txt",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("file renamed");
//     }
// })


// deleted file

fs.unlink("./hai.txt",(err)=>{
    if(err){
        console.log(err);
    }else{
    console.log('file deleted');
    }
})

// simple method to delete a file

// fs.unlink("./hai.txt",()=>{
//     console.log('file deleted');
// })


