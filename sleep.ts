// כתבי פונקציה שמחזירה promise, תפקיד הפונקציה "להכניס למצב שינה" את הפונקציה שקוראת לו, למשך זמן שמתקבל כפרמטר, 
// השתמשי בפונקציה והדפיסי למסך את הזמן לפני השימוש בה ואחריה.
// בדקי שאכן היתה המתנה כפי שהוגדר.


const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function example() {
  console.log("Before sleep");
  await sleep(2000); // Pauses execution for 2000 milliseconds (2 seconds)
  console.log("After sleep");
}

example();


// כתבי פונקציה שעוברת בלולאה על קבצים בתיקיה, ומדפיסה למסך את התוכן שלהם.
// יש להשתמש ב Async/ Await
// אתגר: כתבי 2 פונקציות נוספות המבצעות את אותו דבר באמצעות callback & promises

import fs from 'fs/promises';
import path from 'path';
async function readFilesInDirectory(directoryPath: string) {
  try {
    const files = await fs.readdir(directoryPath);
    for (const file of files) {
      const filePath = path.join(directoryPath, file);
      const content = await fs.readFile(filePath, 'utf-8');
      console.log(`Content of ${file}:`, content);
    }
  } catch (error) {
    console.error("Error reading directory:", error);
  }
}

const directoryPath = './files';
readFilesInDirectory(directoryPath);
