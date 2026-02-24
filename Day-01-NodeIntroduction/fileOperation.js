const fs=require("fs");
function fileOperation(){

    //write read
    //non blocking io
    fs.writeFile("file1.txt","writing data from node.js",()=>{
        console.log("data written successfully");
})
console.log("asmita")
fs.writeFile("file2.txt","replacing all content",()=>{
        
})

//blocking io
//  fs.writeFileSync("file1.txt", "writing data from node.js");
//     console.log("Sync: data written successfully");

//read
//non blocking io
fs.readFile("file1.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
});

//blocking  io
// const data = fs.readFileSync("file1.txt", "utf-8");
// console.log(data);

//update file 
//repalce all content
fs.writeFile("file2.txt", "Updated content from Node.js", (err) => {
    if (err) throw err;
    console.log("File updated successfully");
});

//2.Append (Add Data Without Deleting Old Data)
fs.appendFile("file2.txt", "\n New line added", (err) => {
    if (err) throw err;
    console.log("Data appended successfully");
});

//delete file
// fs.unlink("file1.txt", (err) => {
//     if (err) {
//         console.log("File not found");
//         return;
//     }
//     console.log("File deleted successfully");
// });
}
module.exports=fileOperation;