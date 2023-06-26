import React, { Component } from "react";
import './index.css'
import logo from './../assets/image/zyro-image.png'

export default class Section extends Component {
  render() {
    return (
      <div>
        <section className="section">
          <div className="section-content">
            <img src={logo} alt="Logo" className="logo" />
            <div className="text-container">
              <p>
                <strong>Selamat datang</strong> di <span>Savoricious</span>, sumber utama Anda untuk inspirasi resep masakan yang lezat dan mudah diikuti. Kami berkomitmen untuk memberikan panduan langkah demi langkah yang jelas dan rinci untuk memastikan Anda berhasil dalam menciptakan hidangan yang lezat.
                </p>
                <br />
                <p>Di <span>Savoricious</span>, kami percaya bahwa memasak adalah seni yang memadukan kreativitas dengan keahlian teknis. Kami didedikasikan untuk membagikan pengetahuan dan pengalaman kami dalam dunia kuliner kepada Anda, agar Anda dapat menguasai seni memasak di dapur Anda sendiri.
              </p>
            </div>
          </div>
          <div className="section-content">
            <div className="text-container">
              <strong>Apa yang kami tawarkan:</strong>
              <br />
              <br />
              <ol className="numbered-list">
                <li style={{ listStyleType: "decimal" }}>Ragam Masakan: Dari kategori masakan pembuka hingga khusus, kami menawarkan beragam resep masakan dari berbagai metode memasak. Anda dapat menjelajahi berbagai jenis masakan.</li>
                <li style={{ listStyleType: "decimal" }}>Tutorial Langkah demi Langkah: Setiap resep dilengkapi dengan tutorial langkah demi langkah yang jelas dan mudah diikuti. Kami menyajikan instruksi yang rinci beserta gambar yang memperjelas setiap tahapan, sehingga Anda dapat mengikuti dengan percaya diri.</li>
                <li style={{ listStyleType: "decimal" }}>Tips: Di samping resep yang lengkap, kami juga membagikan tips yang berguna untuk membantu Anda meningkatkan keterampilan memasak melalui berbagai artikel.</li>
              </ol>
              <br />
              <p>
                Kami berharap <span>Savoricious</span> dapat menjadi sumber inspirasi utama Anda dalam memasak. Apakah Anda seorang pemula yang ingin belajar memasak atau seorang ahli yang mencari tantangan baru, kami memiliki sesuatu yang cocok untuk Anda. Selamat memasak dan selamat menikmati hidangan lezat yang Anda ciptakan!
              </p>
              <br />
              <p>Jika Anda memiliki pertanyaan lebih lanjut atau ingin berbagi saran, jangan ragu untuk menghubungi kami.</p>
              <br />
              <p>Terima kasih telah mengunjungi <span>Savoricious</span>!</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
