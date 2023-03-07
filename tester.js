// tester
import fs from 'fs';
import { PdfReader } from "pdfreader";
const pdfReader = new PdfReader();

let currentLine = "";
let fileName = "01-2018"

fs.writeFileSync(`./tests/${fileName}-txtcapture.txt`, "Mulai Konversi...");

pdfReader.parseFileItems(`./pdfs/${fileName}.pdf`, (error, item) => {
    if (error) console.error("error:", error);
    else if (!item) console.log(`Selesai!, file di save sebagai : ${fileName}-txtcapture.txt`);
    else if (item.text) {
        if(item.y > 13.9 && item.y < 45.5){
            if(item.y !== currentLine.y){
                let output = `\ny(${currentLine.y}) - x(${currentLine.x}) ${currentLine.text}`
                fs.appendFileSync(`./tests/${fileName}-txtcapture.txt`, output, (err) => {
                    if(err) throw (err);
                })
                currentLine = item;
            } else {
                currentLine.text += ` x(${item.x})${item.text}`;
            }
        }
    }
});