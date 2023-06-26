import React, { Component } from "react";
import './detail.css'
import people1 from './../assets/image/people1.jpeg'
import makanan1 from './../assets/image/makanan1.jpg'
import langkah1 from './../assets/image/lang1.webp'
import langkah2 from './../assets/image/lang2.webp'
import langkah3 from './../assets/image/lang3.webp'
import langkah4 from './../assets/image/lang4.webp'
import langkah5 from './../assets/image/lang5.webp'
import langkah6 from './../assets/image/6.jpg'
import start from './../assets/image/star.png'
import StarRating from "./rating";
import detailrecookimg from "./../assets/image/detailrecookimg.png"

export default function Details () {
    
    return (
        <div className="body-resep ">
            <div className="card-title flex items-center justify-center">
                <div className="title-section">
                    Resep Ayam Bakar Madu
                </div>
            </div>
            <div className="img-detail flex items-center justify-center">
                <img src={makanan1} alt="" />
            </div>
            <div className="detail0 grid grid-cols-2">
                <div className="col-span-2 detail1  flex items-center justify-start">
                    <img src={people1} alt="" />
                    <div className="nama">
                       <h5>Bella Safira</h5> 
                    </div>
                    <div><strong>.</strong></div>
                    <div className="rating flex items-center justify-start">
                        &nbsp;&nbsp;
                        <img src={start} alt="" />
                        <h5>4.8 </h5>
                        <h6>&nbsp;&nbsp;&nbsp;&nbsp;(30 Rating)</h6>
                    </div>
                </div>
                <div className="col-span-2 detail2  flex items-center justify-start">
                    <div className="button">
                       <button type="submit">Simpan Resep</button>
                    </div>
                    <div className="button">
                       <button type="submit">Bagikan</button>
                    </div>
                </div>
            </div>
            <div className="detail3">
                <div className="title">
                    Bahan Bahan
                </div>
                <div className="bahan flex items-start justify-start ">
                    <ul>
                        <li style={{ listStyleType: "disc" }}>1 kg ayam paha bawah</li>
                        <li style={{ listStyleType: "disc" }}>5 sdm madu</li>
                        <li style={{ listStyleType: "disc" }}>1 sdm kecap manis</li>
                    </ul>
                </div>
            </div>
            <div className="detail3">
                <div className="title">
                    Cara Memasak
                </div>
                <div className="cara-memasak">
                    <ul type="circle">
                        <li className="flex items-start justify-start">
                            <img src={langkah1} alt="" />
                            <div className="langkah text-start">
                                <h1>Langkah 1</h1>
                                <h2>Ayam dicuci bersih lalu lumuri dengan bahan marinasi, diamkan.</h2>
                            </div>
                        </li>
                        <li className="flex items-start justify-start">
                            <img src={langkah2} alt="" />
                            <div className="langkah text-start">
                                <h1>Langkah 2</h1>
                                <h2>Lalu tumis bumbu sampai harum.</h2>
                            </div>
                        </li>
                        <li className="flex items-start justify-start">
                            <img src={langkah3} alt="" />
                            <div className="langkah text-start">
                                <h1>Langkah 3</h1>
                                <h2>Masukkan lengkuas, daun jeruk, dan daun salam, kemudian ayam. Beri air, kecap, dan madu. </h2>
                            </div>
                        </li>
                        <li className="flex items-start justify-start">
                            <img src={langkah4} alt="" />
                            <div className="langkah text-start">
                                <h1>Langkah 4</h1>
                                <h2>Siapkan panggangan atau bisa di oven. Panggang/bakar ayam, bolak balik sampai agak gosong/kering.</h2>
                            </div>
                        </li>
                        <li className="flex items-start justify-start">
                            <img src={langkah5} alt="" />
                            <div className="langkah text-start">
                                <h1>Langkah 5</h1>
                                <h2>Selamat Mencoba</h2>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="detail3">
                <div className="title">
                Atau kamu bisa mengikuti tutorialnya pada video dibawah ini:
                </div>
                <br />
                <div className="vidio flex items-center justify-center">
                <iframe width="640" height="360" src="https://www.youtube.com/embed/B12KV1qABKQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="detail4 ">
                    <div className="title">
                        Ayo Rating Resep Ini
                    </div>
                    <div className="bintang text-left">
                        Rating resep dari 5 bintang ini, ya.
                    </div>
                    <br />
                    <div className="rating flex items-start justify-start">
                        <StarRating/>
                    </div>
                    <div className="button-rating flex items-center justify-center">
                        <button type="submit">Beri Rating</button>
                    </div>
                </div>
            </div>
            <br />
            <div className="title">
                    Recook
                </div>
            <div className="detail5 flex items-center justify-center">
                <img src={detailrecookimg} alt="" />
                <div className="detail-recook">
                    <div className="title">
                        Belum Ada Recook Pada Resep Ini
                    </div>
                    <div className="deksipsi-detail-resep-recook">
                        Yuk coba masak dan jadilah yang pertama memberikan recook!
                    </div>
                    <br />
                    <div className="button-recook flex items-center justify-center">
                        <button type="submit">Bagikan Hasil recook</button>
                    </div>
                </div>
            </div>
            <br /><br />
            <div className="title">
                    Diskusi
            </div>
            <div className="detail5 flex items-center justify-center">
                <img src={detailrecookimg} alt="" />
                <div className="detail-recook">
                    <div className="title">
                        Belum Ada Diskusi Pada Resep Ini
                    </div>
                    <div className="deksipsi-detail-resep-recook">
                        Yuk coba masak dan jadilah yang pertama berdikusi dengan pengguna lainnya
                    </div>
                    <br />
                    <div className="button-recook flex items-center justify-center">
                        <button type="submit">Mulai Berdiskusi</button>
                    </div>
                </div>
            </div>

            <br /><br />
            <div className="title">
                    Kategori Resep
            </div>
            <div className="details-kategori-button flex item-center">
                <button type="submit">Makanan Pembuka</button>
                <button type="submit">Goreng</button>
                <button type="submit">Lumpia</button>
                <button type="submit">Tepung</button>

            </div>
        </div>
    );    
  }