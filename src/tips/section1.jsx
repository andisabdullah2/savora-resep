import React, { Component } from "react";
import './index.css'
import tips1 from './../assets/image/tips1.jpg'
import tips2 from './../assets/image/tips2.jpg'
import tips3 from './../assets/image/tips3.jpg'
import tips4 from './../assets/image/tips4.jpg'
import tips5 from './../assets/image/tips5.jpg'
import tips6 from './../assets/image/tips6.jpg'
import tips7 from './../assets/image/tips7.jpg'
import tips8 from './../assets/image/tips8.jpg'
import tips9 from './../assets/image/tips9.jpg'


export default class Section1Tips extends Component {
  render() {
    return (
        <div className="body-resep">
            <div class="grid grid-cols-3 gap-4 pt-10 ">
                <div className="slide-item-section ">
                    <div className="card-tips drop-shadow-xl ">
                        <div class="grid grid-cols-2 gap-4">
                            <div class="col-span-2 detail-card-tips1">
                            <img src={tips1} alt="" />
                            </div>
                            <div class="col-span-2 detail-card-tips2 flex items-start text-justify">3 Cara Mudah Goreng Kacang Mete agar Gurih, Renyah, dan Tidak Pahit</div>
                        </div>
                    </div>
                </div>
                <div className="slide-item-section ">
                    <div className="card-tips drop-shadow-xl ">
                        <div class="grid grid-cols-2 gap-4">
                            <div class="col-span-2 detail-card-tips1">
                            <img src={tips2} alt="" />
                            </div>
                            <div class="col-span-2 detail-card-tips2 flex items-start text-justify">10 Buah yang Tidak Boleh Masuk Kulkas, Kamu Wajib Tahu</div>
                        </div>
                    </div>
                </div>
                <div className="slide-item-section ">
                    <div className="card-tips drop-shadow-xl ">
                        <div class="grid grid-cols-2 gap-4">
                            <div class="col-span-2 detail-card-tips1">
                            <img src={tips3} alt="" />
                            </div>
                            <div class="col-span-2 detail-card-tips2 flex items-start text-justify">Takaran Air Memasak Nasi Pulen Ada Beberapa Metode, Lho! Yuk Simak!</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-3 gap-4">
                <div className="slide-item-section ">
                    <div className="card-tips drop-shadow-xl ">
                        <div class="grid grid-cols-2 gap-4">
                            <div class="col-span-2 detail-card-tips1">
                            <img src={tips4} alt="" />
                            </div>
                            <div class="col-span-2 detail-card-tips2 flex items-start text-justify">Cara Tepat Menggunakan Minyak Zaitun untuk Memasak</div>
                        </div>
                    </div>
                </div>
                <div className="slide-item-section ">
                    <div className="card-tips drop-shadow-xl ">
                        <div class="grid grid-cols-2 gap-4">
                            <div class="col-span-2 detail-card-tips1">
                            <img src={tips5} alt="" />
                            </div>
                            <div class="col-span-2 detail-card-tips2 flex items-start text-justify">8 Kegunaan Minyak Wijen dan Tips Menggunakannya</div>
                        </div>
                    </div>
                </div>
                <div className="slide-item-section ">
                    <div className="card-tips drop-shadow-xl ">
                        <div class="grid grid-cols-2 gap-4">
                            <div class="col-span-2 detail-card-tips1">
                            <img src={tips6} alt="" />
                            </div>
                            <div class="col-span-2 detail-card-tips2 flex items-start text-justify">Pentingnya Table Manner, Etika Makan dalam Jamuan Formal</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-3 gap-4">
                <div className="slide-item-section ">
                    <div className="card-tips drop-shadow-xl ">
                        <div class="grid grid-cols-2 gap-4">
                            <div class="col-span-2 detail-card-tips1">
                            <img src={tips7} alt="" />
                            </div>
                            <div class="col-span-2 detail-card-tips2 flex items-start text-justify">Wajib Tahu Cara Memilih Telur yang Baik, untuk Dapatkan Kualitasnya!</div>
                        </div>
                    </div>
                </div>
                <div className="slide-item-section ">
                    <div className="card-tips drop-shadow-xl ">
                        <div class="grid grid-cols-2 gap-4">
                            <div class="col-span-2 detail-card-tips1">
                            <img src={tips8} alt="" />
                            </div>
                            <div class="col-span-2 detail-card-tips2 flex items-start text-justify">15 Jenis Pisau Dapur Beserta Fungsinya</div>
                        </div>
                    </div>
                </div>
                <div className="slide-item-section ">
                    <div className="card-tips drop-shadow-xl ">
                        <div class="grid grid-cols-2 gap-4">
                            <div class="col-span-2 detail-card-tips1">
                            <img src={tips9} alt="" />
                            </div>
                            <div class="col-span-2 detail-card-tips2 flex items-start text-justify">7 Cara Memilih Semangka Manis dan Matang Super Gampang!</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center">
                <div className="button-lebih-banyak flex items-center justify-center mt-10">
                    <button>Lihat lebih banyak</button>
                </div>
            </div>
        </div>
    );    
  }
}