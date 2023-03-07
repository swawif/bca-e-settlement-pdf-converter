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
1. Install Node.js
2. Download repo ini
2. Install dependencies (npm i)
3. buat 3 folder : `pdfs`, `csvs`, dan `tests` (huruf kecil semua, harus persis ya!)
4. masukin file e-settlement BCA di folder `pdfs`
5. buka file app.js
6. di baris 5, di tulisan `let fileName = "01-2018"` ganti `01-2018` jadi nama file pdfnya (harus pakai tanda kutip)
7. ketik node app.js
8. file CSV akan muncul di folder csvs

# Bisa di bank lain gak?
enggak, custom made untuk BCA. itu pun selama BCA gak ngerubah bentuk e-settlement mereka

# Tolong buatin dong untuk bank x
*kabur*
