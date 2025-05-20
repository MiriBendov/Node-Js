//1.	פעולה סינכרונית של הדפסה
//2.	setTimeout – עם Timeout של 5 שניות
//3.	פעולה סינכרונית של הדפסה
//4.	setInterval – עם Interval של שניה- יש להדפיס כאן 3 מספרים
//5.	read file – יש לכתוב בקובץ את המספר הנדרש
//6.	פעולה סינכרונית של הדפסה

// const fs = require('node:fs');
import { promises } from "fs";
console.log(1);
setTimeout(() => {
    console.log();
}, 5000);
console.log(2);
let count = 5;
const interval = setInterval(() => {
 console.log(count);
 count++;
 if (count > 8) clearInterval(interval);
}, 1000); 
// const callback = function (err: any, data: Buffer) 
// {
//         if(err)
//                 console.log("Can't read the file", err);
//         else console.log(data.toString());
// }
// fs.readFile('file.txt', callback);
async function readFileAsync(filePath: string): Promise<void> {
        try {
            const content = await promises.readFile(filePath, 'utf8');
            console.log(content);
            promises.writeFile("output.txt", content).catch(()=> console.log("fail to write"));
        } catch (err) {
            console.log("Failed reading file:", err);
        }
    }
    readFileAsync("file.txt");
console.log(3);
