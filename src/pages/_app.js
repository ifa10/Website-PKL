import React from "react";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="bg-green-100 min-h-screen">
      <Head>
        <title>MI MAA'RIF NAILUL HUDA</title>
      </Head>
      
      {/* Header */}
      <header className="bg-green-600 text-white p-4 text-center text-xl font-bold">
        MI MAA'RIF NAILUL HUDA
      </header>

      {/* Navbar */}
      <nav className="bg-green-500 text-white p-3 flex justify-center space-x-4">
        <a href="/" className="hover:underline">Home</a>
        <a href="/profil" className="hover:underline">Profil</a>
        <a href="/ppdb" className="hover:underline">PPDB</a>
        <a href="/galeri" className="hover:underline">Galeri</a>
        <a href="/berita" className="hover:underline">Berita</a>
        <a href="/kontak" className="hover:underline">Kontak</a>
      </nav>

      {/* Main Content */}
      <main className="p-6">
        <h1 className="text-green-700 text-3xl font-bold text-center">Selamat Datang di MI MAA'RIF NAILUL HUDA</h1>
        <p className="text-center text-gray-700 mt-4">
          Menyediakan pendidikan berkualitas dengan fasilitas lengkap dan berbagai kegiatan ekstrakurikuler menarik.
        </p>

        {/* Profil Sekolah */}
        <section className="mt-8 bg-white p-6 rounded shadow-md">
          <h2 className="text-green-700 text-2xl font-bold">Profil Sekolah</h2>
          <p className="text-gray-700 mt-2">
            MI MAA'RIF NAILUL HUDA adalah lembaga pendidikan Islam yang memiliki fasilitas lengkap serta kegiatan ekstrakurikuler menarik untuk pengembangan siswa.
          </p>
        </section>

        {/* PPDB Section */}
        <section className="mt-8 bg-white p-6 rounded shadow-md">
          <h2 className="text-green-700 text-2xl font-bold">Pendaftaran Peserta Didik Baru (PPDB)</h2>
          <p className="text-gray-700 mt-2">
            Silakan isi formulir pendaftaran online untuk menjadi bagian dari keluarga besar MI MAA'RIF NAILUL HUDA.
          </p>
          <a href="/ppdb" className="mt-4 inline-block bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">Daftar Sekarang</a>
        </section>

        {/* Galeri Sekolah */}
        <section className="mt-8 bg-white p-6 rounded shadow-md">
          <h2 className="text-green-700 text-2xl font-bold">Galeri Foto</h2>
          <p className="text-gray-700 mt-2">Lihat berbagai kegiatan dan fasilitas di MI MAA'RIF NAILUL HUDA.</p>
          <a href="/galeri" className="mt-4 inline-block bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">Lihat Galeri</a>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
