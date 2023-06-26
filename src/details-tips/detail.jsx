import React, { Component } from "react";
import './index.css'
import people1 from './../assets/image/people1.jpeg'
import makanan1 from './../assets/image/tips1.jpg'


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
                <ul>
                    <li style={{ listStyleType: "disc", marginLeft:"20px"}}>Kalori: 157</li>
                    <li style={{ listStyleType: "disc", marginLeft:"20px" }}>Protein: 5 gr</li>
                    <li style={{ listStyleType: "disc", marginLeft:"20px" }}>Lemak: 12 gr </li>
                    <li style={{ listStyleType: "disc", marginLeft:"20px" }}>Karbohidrat: 9 gr</li>
                    <li style={{ listStyleType: "disc", marginLeft:"20px" }}>Serat: 1 gr</li>
                    <li style={{ listStyleType: "disc", marginLeft:"20px" }}>Tembaga: 69 persen dari angka kecukupan gizi harian</li>
                    <li style={{ listStyleType: "disc", marginLeft:"20px" }}>Magnesium: 20 persen dari angka kecukupan gizi harian</li>
                    <li style={{ listStyleType: "disc", marginLeft:"20px" }}>Mangan: 20 persen dari angka kecukupan gizi harian</li>
                    <li style={{ listStyleType: "disc", marginLeft:"20px" }}>Seng: 15 persen dari angka kecukupan gizi harian</li>
                    <li style={{ listStyleType: "disc", marginLeft:"20px" }}>Fosfor: 13 persen dari angka kecukupan gizi harian</li>
                    <li style={{ listStyleType: "disc", marginLeft:"20px" }}>Besi: 11 persen dari angka kecukupan gizi harian</li>
                    <li style={{ listStyleType: "disc", marginLeft:"20px" }}>Selenium: 10 persen dari angka kecukupan gizi harian</li>
                    <li style={{ listStyleType: "disc", marginLeft:"20px" }}>Tiamin: 10 persen dari angka kecukupan gizi harian</li>
                    <li style={{ listStyleType: "disc", marginLeft:"20px" }}>Vitamin K: 8 persen dari angka kecukupan gizi harian</li>
                    <li style={{ listStyleType: "disc", marginLeft:"20px" }}>Vitamin B6: 7 persen dari angka kecukupan gizi harian</li>
                </ul>
                 <br />
                <b>Cara menggoreng kacang mete</b><br />
                Setelah mengetahui nutrisi yang terkandung dalam kacang mete, selanjutnya adalah cara menggoreng kacang mete. Melansir IDN Times, kamu bisa dapatkan kacang mete yang gurih, renyah, dan tidak pahit menggunakan cara berikut. Siapkan dahulu bahan-bahan yang dibutuhkan! <br />
                <ol>
                    <li style={{ listStyleType: "decimal", marginLeft:"20px"}}>1/2 kg kacang mete</li>
                    <li style={{ listStyleType: "decimal", marginLeft:"20px"}}>1/2 sdm garam halus</li>
                    <li style={{ listStyleType: "decimal", marginLeft:"20px"}}>Air hangat secukupnya</li>
                </ol>
                <br />
                    &nbsp;Bumbu: <br />
                    <ol>
                    <li style={{ listStyleType: "decimal", marginLeft:"20px"}}>3 siung bawang putih </li>
                    <li style={{ listStyleType: "decimal", marginLeft:"20px"}}>1/2 sdt gula</li>
                    <li style={{ listStyleType: "decimal", marginLeft:"20px"}}>1/2 sdm garam</li>
                    <li style={{ listStyleType: "decimal", marginLeft:"20px"}}>1/4 sdt kaldu jamur</li>
                    </ol>
                    <br />
                <b>1. Rendam dengan garam</b> <br /> <br />
                Pertama-tama, masukkan kacang mete ke dalam wadah yang telah berisikan air hingga terendam. Kemudian, tambahkan garam. Aduk hingga merata. Biarkan selama 5 menit. <br /> 
                <br /> Langkah ini akan membantu kacang mete meluruhkan getah yang ada di dalamnya. Nah, tahukah kamu, bahwa getah tersebut rasanya pahit. Jadi, jika tidak dibuang terlebih dahulu getahnya, rasa kacang metemu tidak sempurna. <br /> <br />
                <b>2. Bumbui kacang mete</b> <br /> <br />
                Setelah kamu melewati rendam, kemudian kamu bilas kacang mete tersebut dengan air bersih. Pastikan kamu telah meluruhkan seluruh getahnya. Langkah selanjutnya adalah bumbui kacang tersebut. <br />
                <br /> Masukkan bawang putih, gula, garam, kaldu jamur bubuk ke dalam wadah. Bumbui kacang mete hingga merata. Diamkan selama 1 jam untuk memastikan rasa bumbu meresap pada kacang. <br /><br />
                <b>3. Goreng kacang mete pada wajan</b><br /> <br />
                Setelah 1 jam dibumbui, goreng kacang metemu menggunakan wajan. Jangan lupa, panaskan terlebih dahulu minyak pada wajan. Setelah matang, angkat lalu tiriskan. Sebagai tips, masukkan kacang mete ke stoples saat sudah tidak panas, ya, Sobat Savoricious. Hal ini bagus untuk mempertahankan rasa renyahnya. <br />
                <br /> Kacang mete bisa disajikan saat momen-momen kebersamaan dengan keluarga. Misalnya, sebagai teman untuk minum teh dan kopi di sore hari. Kacang mete yang gurih, renyah, dan tidak pahit akan turut berkontribusi dalam meningkatkan kebahagiaanmu dengan orang terdekat.
Jika cara menggoreng kacang metemu sudah benar, maka kamu akan mendapatkan rasa yang gurih, renyah, dan tidak pahit. Terlebih, kacang akan lebih tahan lama saat disimpan. Simpan di wadah yang tertutup seperti stoples, ya, Sobat Savoricious. <br />
            </div>
        </div>
    );    
  }
}