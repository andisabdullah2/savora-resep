import React, { Component } from "react";
import './index.css'
import people1 from './../assets/image/people1.jpeg'
import makanan1 from './../assets/image/makanan1.jpg'


export default class DetailsTips extends Component {
    
  render() {
    return (
        <div className="body-resep ">
            <div className="title-tips text-left">
                3 Cara Mudah Goreng Kacang Mete agar Gurih, Renyah, dan Tidak Pahit
            </div>
            <div className="deksipsi-singkat text-left">
                Pecinta kacang mete harus tahu ini!
            </div>
            <div className="gambar-detail-tips">
                <img src={makanan1} alt="" />
            </div>
            <div className="akun-tips flex items-center">
                <img src={people1} alt="" />
                <div className="nama-akun">
                    Saskia Adinda 
                </div>
                <div className="tgl-publis-tips">
                    04 Juni 2023
                </div>
            </div>
            <div className="isi-tips text-left">
                Krenyes-krenyes, kriuk-kriuk. Kacang mete sangat pas dijadikan teman sambil ngopi atau ngeteh di sore hari. Rasa gurih dan renyahnya kacang ini mampu menggoyang lidah, terutama saat lagi iseng. <br /><br />
                Sobat Savoricious mungkin pernah mendengar jenis tanaman jambu monyet atau jambu mete yang berbuah kacang mete. Ternyata, tanaman tersebut aslinya berasal dari Brasil, namun saat masa penjajahan, biji tanaman jambu monyet dibawa hingga ke Indonesia. Bukan sembarang makanan. Kacang mete mengandung nutrisi yang baik untuk tubuh, loh, Sobat Savoricious! <br /><br /><br />
                <b>Segudang nutrisi pada kacang mete</b><br /><br />
                Melansir Healthline, berikut nutrisi yang terkandung pada kacang mete: <br />
                    &nbsp; 1. Kalori: 157 <br />
                    &nbsp; 2. Protein: 5 g <br />
                    &nbsp; 3. Lemak: 12 g <br />
                    &nbsp; 4. Karbohidrat: 9 g <br />
                    &nbsp; 5. Serat: 1 gr <br />
                    &nbsp; 6. Tembaga: 69 persen dari angka kecukupan gizi harian <br />
                    &nbsp; 7. Magnesium: 20 persen dari angka kecukupan gizi harian <br />
                    &nbsp; 8. Mangan: 20 persen dari angka kecukupan gizi harian <br />
                    &nbsp; 9. Seng: 15 persen dari angka kecukupan gizi harian <br />
                    &nbsp; 10. Fosfor: 13 persen dari angka kecukupan gizi harian <br />
                    &nbsp; 11. Besi: 11 persen dari angka kecukupan gizi harian <br />
                    &nbsp; 12. Selenium: 10 persen dari angka kecukupan gizi harian <br />
                    &nbsp; 13. Tiamin: 10 persen dari angka kecukupan gizi harian <br />
                    &nbsp; 14. Vitamin K: 8 persen dari angka kecukupan gizi harian <br />
                    &nbsp; 15. Vitamin B6: 7 persen dari angka kecukupan gizi harian <br /><br /><br />
                <b>Cara menggoreng kacang mete</b><br />
                Setelah mengetahui nutrisi yang terkandung dalam kacang mete, selanjutnya adalah cara menggoreng kacang mete. Melansir IDN Times, kamu bisa dapatkan kacang mete yang gurih, renyah, dan tidak pahit menggunakan cara berikut. Siapkan dahulu bahan-bahan yang dibutuhkan! <br />
                    &nbsp;1/2 kg kacang mete <br />
                    &nbsp;1/2 sdm garam halus <br />
                    &nbsp;Air hangat secukupnya <br /> <br />
                    &nbsp;Bumbu: <br />
                    &nbsp;3 siung bawang putih <br />
                    &nbsp;1/2 sdt gula <br />
                    &nbsp;1/2 sdm garam <br />
                    &nbsp;1/4 sdt kaldu jamur <br />
                    <br />
                <b>1. Rendam dengan garam</b> <br />
                Pertama-tama, masukkan kacang mete ke dalam wadah yang telah berisikan air hingga terendam. Kemudian, tambahkan garam. Aduk hingga merata. Biarkan selama 5 menit. <br /> 
                Langkah ini akan membantu kacang mete meluruhkan getah yang ada di dalamnya. Nah, tahukah kamu, bahwa getah tersebut rasanya pahit. Jadi, jika tidak dibuang terlebih dahulu getahnya, rasa kacang metemu tidak sempurna. <br /> <br />
                <b>2. Bumbui kacang mete</b>
                Setelah kamu melewati rendam, kemudian kamu bilas kacang mete tersebut dengan air bersih. Pastikan kamu telah meluruhkan seluruh getahnya. Langkah selanjutnya adalah bumbui kacang tersebut. <br />
                Masukkan bawang putih, gula, garam, kaldu jamur bubuk ke dalam wadah. Bumbui kacang mete hingga merata. Diamkan selama 1 jam untuk memastikan rasa bumbu meresap pada kacang. <br /><br />
                <b>3. Goreng kacang mete pada wajan</b><br />
                Setelah 1 jam dibumbui, goreng kacang metemu menggunakan wajan. Jangan lupa, panaskan terlebih dahulu minyak pada wajan. Setelah matang, angkat lalu tiriskan. Sebagai tips, masukkan kacang mete ke stoples saat sudah tidak panas, ya, Sobat Savoricious. Hal ini bagus untuk mempertahankan rasa renyahnya. <br />
                Kacang mete bisa disajikan saat momen-momen kebersamaan dengan keluarga. Misalnya, sebagai teman untuk minum teh dan kopi di sore hari. Kacang mete yang gurih, renyah, dan tidak pahit akan turut berkontribusi dalam meningkatkan kebahagiaanmu dengan orang terdekat.
Jika cara menggoreng kacang metemu sudah benar, maka kamu akan mendapatkan rasa yang gurih, renyah, dan tidak pahit. Terlebih, kacang akan lebih tahan lama saat disimpan. Simpan di wadah yang tertutup seperti stoples, ya, Sobat Savoricious. <br />
            </div>
        </div>
    );    
  }
}