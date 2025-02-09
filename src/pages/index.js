// src/pages/index.js
import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from "../components/footer";
import Hero from '../components/hero';
import About from '../components/about';
import Facilities from '../components/facilities';
import Extracurricular from '../components/extracurricular';
import Gallery from '../components/galery';
import News from '../components/news';

export default function Home() {
  return (
    <div className="bg-green-100 text-gray-800">
      <Head>
        <title>MI MAA'RIF NAILUL HUDA</title>
        <meta name="description" content="Website resmi MI MAA'RIF NAILUL HUDA" />
      </Head>
      <Navbar />
      <Hero />
      <About />
      <Facilities />
      <Extracurricular />
      <Gallery />
      <News />
      <Footer />
    </div>
  );
}
