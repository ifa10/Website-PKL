import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import About from '../components/about';
import Facilities from '../components/facilities';
import Extracurricular from '../components/extracurricular';
import Gallery from '../components/galery';
import News from '../components/news';

export default function HomePage() {
  return (
    <div className="bg-green-100 text-gray-800">
      <Head>
        <title>MI MAA'RIF NAILUL HUDA</title>
        <meta name="description" content="Website resmi MI MAA'RIF NAILUL HUDA" />
      </Head>

      {/* Content Sections */}
      <About />
      <Facilities />
      <Extracurricular />
      <Gallery />
      <News />

      {/* Hero Section */}
      <section className="text-center p-10 bg-gray-100">
        <h2 className="text-3xl font-bold">MI MAA'RIF NAILUL HUDA</h2>
        <p className="text-gray-600">Mencetak Generasi Mandiri, Berprestasi, dan Islami</p>
        <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded">Selengkapnya</button>
      </section>

      {/* Program Unggulan */}
      <section className="p-10">
        <h3 className="text-2xl font-bold text-center mb-6">Program Unggulan</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {["Live In", "Tahfidzul Qur'an", "Islamic Character Building", "Agropreneur"].map((program, index) => (
            <div key={index} className="border p-4 rounded shadow">
              <h4 className="text-xl font-bold">{program}</h4>
              <p className="text-gray-600 mt-2">Deskripsi singkat tentang program ini...</p>
              <button className="mt-4 text-green-600 font-bold">Detail</button>
            </div>
          ))}
        </div>
      </section>

      {/* Berita */}
      <section className="p-10 bg-gray-100">
        <h3 className="text-2xl font-bold text-center mb-6">Berita Terbaru</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="border p-4 rounded shadow">
              <Image src={`/news-${item}.jpg`} alt="Berita" width={300} height={200} />
              <h4 className="text-xl font-bold mt-2">Judul Berita {item}</h4>
              <p className="text-gray-600 mt-2">Ringkasan berita...</p>
            </div>
          ))}
        </div>
      </section>

      {/* PPDB */}
      <section className="p-10 text-center">
        <h3 className="text-2xl font-bold">Informasi PPDB Th. 2024/2025</h3>
        <div className="flex justify-center gap-6 mt-6">
          <Image src="/ppdb-1.png" alt="PPDB 1" width={300} height={200} />
          <Image src="/ppdb-2.png" alt="PPDB 2" width={300} height={200} />
        </div>
        <Link href="/ppdb">
          <span className="mt-4 bg-green-600 text-white px-6 py-2 rounded inline-block cursor-pointer">
            Daftar Sekarang
          </span>
        </Link>
      </section>
    </div>
  );
}
