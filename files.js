const fs = require('fs');
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

fs.readdir("./backup", (err, data) => {
    data.forEach((fileName) => {
        fs.unlink(`./backup/${fileName}`, (err) => {
            console.log("delete successfull", fileName);
        });
    });
});