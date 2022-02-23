// const fs = require('fs');
// fs.readFile("./double.js","utf-8" ,(err, data) => {
//     console.log(data)
// })
// const niceQuote="be yourself, Be happy!"
// fs.writeFile("./cool.txt", niceQuote, (err) => {
//     console.log(err)
// })
// const niceQuote="Be yourself, Be happy!"
// fs.writeFile("./backup/text5.txt/text6.txt", niceQuote, (err) => {
//     console.log(err)
// })

// const niceQuote = "Be yourself, Be happy!";

// const [, , noOfFiles] = process.argv;

// for (let i = 1; i <= noOfFiles; i++) {
//     fs.writeFile(`./backup/text-${i}.txt`, niceQuote, (err) => {
//         console.log(err)
//     });
// }

// fs.unlink(".backup/text-2.txt", (err) => {
//     console.log("delete successfull");
// })

// fs.readdir("./backup", (err, data) => {
//     data.forEach((fileName) => {
//         fs.unlink(`./backup/${fileName}`, (err) => {
//             console.log("delete successfull", fileName);
//         });
//     });
// });

const fs = require('fs');
// const path = require('path');

const files = fs.readdirSync(__dirname);

console.log(files);
// path.extname(files)

// const path = require('path');
// const fs = require('fs');
// //joining path of directory

// const directoryPath = path.join(__dirname, '');
// //passsing directoryPath and callback function
// fs.readdir(directoryPath, function (err, files) {
//     //handling error
//     if (err) {
//         return console.log('Unable to scan directory: ' + err);
//     }
//     //listing all files using forEach
//     files.forEach(function (file) {
//         // Do whatever you want to do with the file
//         console.log(file);
//     });
// });





const fs = require('fs');
// const path = require('path');

const files = fs.readdirSync(`${__dirname}/${process.argv[2]}`,{withFileTypes:true});
console.log(process.argv)
console.log(files);




const fs = require('fs');
// const path = require('path');

// const files = fs.readdir();
console.log(process.argv)
// console.log(files);

fs.readdir(`${__dirname}/${process.argv[2]}`, (err, files) => {
    if (err) {
        console.log("error occured",err)
    } else {
        console.log(files);
       
    }
})