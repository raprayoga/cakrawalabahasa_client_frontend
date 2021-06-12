import React, { Component } from "react";
import { Link } from "react-router-dom";
import { faChevronRight, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Header from "components/parts/header/Header";
import Footer from "components/parts/footer/Footer";

import Program1 from "assets/images/ourPrograms/our_program1.png";
import Program2 from "assets/images/ourPrograms/our_program2.png";
import Program3 from "assets/images/ourPrograms/our_program3.png";
import Program4 from "assets/images/ourPrograms/our_program4.png";
import Program5 from "assets/images/ourPrograms/our_program5.png";
import "components/pages/ourProgram/ourPrograms.css";

export default class OurProgram extends Component {
  render() {
    return (
      <>
        <Header {...this.props}></Header>

        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon={faHome} />
                </Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faChevronRight} className="mx-3" />
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Programs
              </li>
            </ol>
          </nav>

          <h1 className="mb-5">Our Programs</h1>

          <h2>Language Courses</h2>

          <div className="row my-4">
            <h3 className="h3-mobile">Privat Bahasa</h3>
            <div className="col-lg-4 col-md-6">
              <img
                src={Program1}
                className="img-fluid"
                alt="program privat bahasa"
              />
            </div>
            <div className="col-lg-8 col-md-6">
              <h3 className="h3-desktop">Privat Bahasa</h3>
              <p>
                Belajar bahasa secara privat secara online atau offline dengan
                berbagai pilihan paket dan sesi yang memudahkan pembelajaran.
                Tutor berpengalaman dengan materi yang fun sertamenyesuaikan
                kemampuan siswa. Fasilitas dan kurikulum yang lengkap,
                menekankan metode <span>Real Life Experience</span>, melibatkan
                <span>Native Speaker</span> dan disertai 20 pilihan bahasa.
              </p>
            </div>
          </div>
          <div className="row my-4">
            <h3 className="h3-mobile">Kelas Reguler</h3>
            <div className="col-lg-4 col-md-6">
              <img
                src={Program2}
                className="img-fluid"
                alt="program kelas reguler"
              />
            </div>
            <div className="col-lg-8 col-md-6">
              <h3 className="h3-desktop">Kelas Reguler</h3>
              <p>
                Program kelas bahasa secara online selama 8 kali pertemuan dalam
                satu bulan. Tutor berpengalaman dengan materi fun dan berbagai
                pilihan kelas menyesuaikan kemampuan siswa. Kurikulum yang
                lengkap, menekankan metode <span>Real Life Experience</span>,
                melibatkan <span>Native Speaker</span> dsertai22 pilihan bahasa
                dan sertifikat keikutsertaan.
              </p>
            </div>
          </div>
          <div className="row my-4">
            <h3 className="h3-mobile">Kelas Intensif</h3>
            <div className="col-lg-4 col-md-6">
              <img
                src={Program3}
                className="img-fluid"
                alt="program kelas intensif"
              />
            </div>
            <div className="col-lg-8 col-md-6">
              <h3 className="h3-desktop">Kelas Intensif</h3>
              <h4>a. Online</h4>
              <p>
                Program kelas belajar bahasa intensif secara <span>Online</span>{" "}
                selama 18 kali pertemuan dalam dua bulan. Tutor merupakan{" "}
                <span>Native Speaker</span> berpengalaman dengan materi yang fun
                dan berbagai tingkatan kelas sesuai kemampuan siswa. Fasilitas
                dan kurikulum yang lengkap, menekankan metode{" "}
                <span>Real Life Experience</span>, melibatkan{" "}
                <span>Native Speaker</span> disertai 22 pilihan bahasa dan
                sertifikat keikutsertaan.
              </p>
              <h4>b. Offline</h4>
              <p>
                Program kelas belajar bahasa intensif secara{" "}
                <span>Offline</span> selama 8 kali pertemuan dalam satu bulan.
                Tutor merupakan <span>Native Speaker</span> berpenglaman dengan
                materi yang fun dan berbagai tingkatan kelas sesuai kemampuan
                siswa. Fasilitas sangat lengkap, lingkungan belajar yang nyaman
                di dalam kampus Universitas Indonesia dan kurikulum terbaik
                menekankan metode <span>Real Life Experience</span>, dengan 5
                pilihan bahasam, yaitu TOEFL/IELTS, Bahasa Arab, Bahsa Turki,
                Bahasa Cina, dan BIPA disertai sertifikat keikutsertaan dan
                sertifikat resmi kemahiran bahasa.
              </p>
            </div>
          </div>
          <div className="row my-4">
            <h3 className="h3-mobile">Camp Bahasa Reguler</h3>
            <div className="col-lg-4 col-md-6">
              <img
                src={Program4}
                className="img-fluid"
                alt="program Camp Bahasa Reguler"
              />
            </div>
            <div className="col-lg-8 col-md-6">
              <h3 className="h3-desktop">Camp Bahasa Reguler</h3>
              <p>
                Program kelas belajar bahasa disertai karantina di negara
                penuturnya selama 14 hari dan 10 pertemuan. Tutor merupakan
                <span>Native Speaker</span> berpengalaman deengan materi yang
                fun. Fasilitas dan kurkulum yang lengkap, menekankan metode
                <span>Reak Life Experience</span> dengan pilihan bahasa yaitu
                TOEFL/IELTS, Bahasa Arab, Bahasa Turki, Bahas cina, dan BIPA
                disertai sertifikat resmi.
              </p>
            </div>
          </div>
          <div className="row my-4">
            <h3 className="h3-mobile">Camp Bahasa Intensif</h3>
            <div className="col-lg-4 col-md-6">
              <img
                src={Program5}
                className="img-fluid"
                alt="program Camp Bahasa Intensif"
              />
            </div>
            <div className="col-lg-8 col-md-6">
              <h3 className="h3-desktop">Camp Bahasa Intensif</h3>
              <p>
                Program kelas belajar dan persiapan studi yang disertai
                karantina di negara penuturnya selama 14 hari dan 10 pertemuan
                sekaligus ekskursike berabagai kampus di Negara tujuan. Tutor
                merupakan <span>Native Speaker</span> berpengalaman dengan
                materi yang fun. Fasilitas dan kurikulum yang lengkap,
                menekankan metode <span>Real Life Experience</span> dengan
                pilihan bahasa yaitu TOEFL/IELTS, Bahasa Arab, Bahasa Turki,
                Bahasa Cina, dan BIPA disertai sertifikast resmi.
              </p>
            </div>
          </div>

          <h2 className="mt-5">Other</h2>

          <div className="row my-4">
            <h3 className="h3-mobile">Membership Program</h3>
            <div className="col-lg-4 col-md-6">
              <img
                src={Program1}
                className="img-fluid"
                alt="Membership Program"
              />
            </div>
            <div className="col-lg-8 col-md-6">
              <h3 className="h3-desktop">Membership Program</h3>
              <p>
                Kami memperlakukan customer dan calon customer dengan pendekatan
                emosionalbukan sekadar transaksional. Oleh karena itu, kami
                menyediakan berbagai kegiatan menarik kepada customer dan calon
                customer melalui Membership Program Cakrawala Bahasa.
              </p>
            </div>
          </div>
          <div className="row my-4">
            <h3 className="h3-mobile">Merchandise</h3>
            <div className="col-lg-4 col-md-6">
              <img src={Program2} className="img-fluid" alt="Merchandise" />
            </div>
            <div className="col-lg-8 col-md-6">
              <h3 className="h3-desktop">Merchandise</h3>
              <p>
                Kami menyediakan barbagai merchandise Cakrawala Bahasa, UI, dan
                souvenir dari berbagai Negara.
              </p>
            </div>
          </div>
        </div>

        <Footer {...this.props}></Footer>
      </>
    );
  }
}
