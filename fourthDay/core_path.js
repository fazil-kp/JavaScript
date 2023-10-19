// path Module
// interact with file

var path= require('path')

const a ='/desktop/homes/data/files/datas/hello.js'

console.log(path.basename(a));
const b = path.basename(a)

const c = path.dirname(a)
console.log(path.dirname(a));
console.log(path.join(c,'/files','impfiles','datas','data'));
console.log(path.parse(a));