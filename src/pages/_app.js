import React from "react";
import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-green-100 min-h-screen">
      <Head>
        <title>MI MAA'RIF NAILUL HUDA</title>
        <meta name="description" content="Website resmi MI MAA'RIF NAILUL HUDA" />
      </Head>

      {/* Header tetap ada di semua halaman */}
      <header className="bg-green-600 text-white p-4 text-center text-xl font-bold">
        MI MAA'RIF NAILUL HUDA
      </header>

      {/* Navbar tetap ada di semua halaman */}
      <Navbar />

      {/* Main Content */}
      <main className="p-6">
        <Component {...pageProps} />
      </main>

      {/* Footer tetap ada di semua halaman */}
      <Footer />
    </div>
  );
}

export default MyApp;
