import fs from 'fs';
import { PdfReader } from "pdfreader";

//*********  GANTI fileName DIBAWAH INI ************* */
let fileName = "01-2018"

//*********  JANGAN GANTI YANG DIBAWAH INI ************* */
// Read PDF file and parse it line by line
const pdfReader = new PdfReader();
let object = {}
let line = 0
let currentLine = 0;


//make new csv file and add header.
let csvHeader = "tanggal,kategori,keterangan,debit,kredit,mutasi";
fs.writeFileSync(`./csvs/${fileName}.csv`, csvHeader);

//start processing PDF
pdfReader.parseFileItems(`./pdfs/${fileName}.pdf`, (error, item) => {
    if (error) console.error("error:", error);
    else if (!item) {
        console.warn("Akhir dari file");
        //write last line to file
        addToCsv(object);
        console.info(`Selesai! file di save sebagai ${fileName}.pdf`)

    } else if (item.text){
        
        if(item.y > 13.9 && item.y < 45.5){ // filter header dan footer

            let text = item.text;
            text = text.replace(/,/g, '');  // hapus koma dari text.

            if(item.x > 2 && item.x < 3) {  //tgl
                // push object to result array
                if(line > 0) {
                    // write to file
                    addToCsv(object);
                }
                object = {};            // reset cache object
                line++                  // inc  line count
                currentLine = item.y    // set currentLine as now
                object.tgl = text;

            } else if(item.x > 5 && item.x < 5.9){ // kategori
                if(object.kategori == undefined){
                    object.kategori = text;
                } else {
                    object.kategori += text;
                }

            } else if (item.x > 11.8 && item.x < 12.2){ //keterangan
                if(object.keterangan == undefined){
                    object.keterangan = text;
                } else {
                    object.keterangan += ' ' + text;
                }

            } else if (item.x > 23 && item.x < 25.2 && item.y == currentLine) { // Nominal Transaksi
                object.nominalTrx = parseFloat(text);

            } else if (item.x > 27 && item.x < 28) {  // jenis transaksi
                object.jenisTrx = text;

            } else if (item.x > 31 && item.x < 31.5 && line == 1) { //special case untuk saldo awal
                object.nominalTrx = parseFloat(text);
            }
        }
    }
});

function addToCsv (obj) {
    let debit = 0;
    let credit = 0;
    if(obj.jenisTrx == "DB") {
        debit = obj.nominalTrx
    } else {
        credit = obj.nominalTrx
    }

    let output = `\n${obj.tgl},${obj.kategori},${obj.keterangan},${debit},${credit}`;
    fs.appendFileSync(`./csvs/${fileName}.csv`,output, (err)=>{
        if(err) throw (err);
    });

}