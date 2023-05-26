# BCA e-settlement pdf converter
aplikasi node.js simple yang bisa mengubah PDF E-Settlement BCA menjadi file CSV dengan format yang mudah di baca (90% of the time)

Kamu pasti seorang akuntan yang lagi pusing. disuruh bos nelusurin balik rekening perusahaan dari 10 tahun yang lalu, terus jadiin excel, suruh kumpulin besok.

buanyak buangettt bosss!!! pas pake converter PDF berantakan pula hasilnya. gimana ini caranya bisa selesai besok???

gw juga ngerasain itu, jadi gw iseng iseng bikin PDF Converter ini. "Works 90% of the time, it works enough everytime!"

## Kenapa works 90% of the time?
Jadi karena naturenya PDF, dia kadang agak unpredictable. program ini cara ngambil data dari PDF adalah dengan nge cek apakah tulisan ini ada di koordinat yang udah ditentukan. kadang ada beberapa tulisan yang melenceng sedikit dari barisnya. misal ada transaksi yang cuman 1 digit. program ini bakal bingung dan gak kebaca. 

tapi selain itu, insyaa allah data lainnya bisa kebaca semua.

(kalau mau di improve, boleh banget kok!)

## Cara Install dan pakai 
(Work in progress)
1. Install Node.js, ini program yang dipakai untuk running programnya [Bisa download disini](https://nodejs.org/en/download)
2. Download repo ini dan extract di folder yang kamu suka

![image](https://github.com/swawif/bca-e-settlement-pdf-converter/assets/35835489/9a98b416-3955-437d-a480-ba20c9890f64)


3. sekarang klik kanan di dalam foldernya, dan klik Open in Terminal / Open in Command Prompt / Open in Powershell (windows)

![image](https://github.com/swawif/bca-e-settlement-pdf-converter/assets/35835489/a13183f9-33c4-4dff-9412-0171e96d7bf2)

4. Di Command prompt ketik `npm i`. ini untuk menyiapkan programnya untuk running pertama kali
5. buat 3 folder : `pdfs`, `csvs`, dan `tests` (huruf kecil semua, harus persis ya!)
6. masukin file e-settlement BCA di folder `pdfs`
7. buka file app.js dengan cara klik kanan terus edit 
8. di baris 4 atau 5, di tulisan `let fileName = "01-2018"` ganti `01-2018` jadi nama file pdfnya (harus pakai tanda kutip) (tanpa ada `.pdf` dibelakangnya)
9. di Command Prompt, ketik `node app.js` lalu enter
10. file CSV akan muncul di folder csvs

# Bisa di bank lain gak?
enggak, custom made untuk BCA. itu pun selama BCA gak ngerubah bentuk e-settlement mereka

# Tolong buatin dong untuk bank x
*kabur*
