export default function Extracurricular() {
  return (
    <section id="extracurricular" className="py-12 px-6 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700">
      <h2 className="text-4xl font-extrabold text-center text-white">Extracurricular Activities</h2>
      <p className="mt-4 text-center text-lg text-gray-200">Jelajahi berbagai kegiatan ekstrakurikuler yang kami tawarkan, termasuk:</p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition duration-300">
          <img src="/pramuka.jpg" alt="Pramuka" className="w-full h-40 object-cover rounded-t-lg" />
          <h3 className="mt-4 text-xl font-semibold">Pramuka</h3>
          <p className="mt-2 text-gray-600">Learn survival skills and leadership in the wild with our scouting activities.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition duration-300">
          <img src="/images/marching_band.jpg" alt="Marching Band" className="w-full h-40 object-cover rounded-t-lg" />
          <h3 className="mt-4 text-xl font-semibold">Marching Band</h3>
          <p className="mt-2 text-gray-600">Join the beat and show your spirit through music and performance.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition duration-300">
          <img src="/images/qiraah.jpg" alt="Qira'ah" className="w-full h-40 object-cover rounded-t-lg" />
          <h3 className="mt-4 text-xl font-semibold">Qira'ah</h3>
          <p className="mt-2 text-gray-600">Delve into the beautiful art of reciting and memorizing the Quran.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition duration-300">
          <img src="/images/olah_raga.jpg" alt="Olahraga" className="w-full h-40 object-cover rounded-t-lg" />
          <h3 className="mt-4 text-xl font-semibold">Olahraga</h3>
          <p className="mt-2 text-gray-600">Stay fit and active with our range of sports activities.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition duration-300">
          <img src="/images/silat.jpg" alt="Silat" className="w-full h-40 object-cover rounded-t-lg" />
          <h3 className="mt-4 text-xl font-semibold">Silat</h3>
          <p className="mt-2 text-gray-600">Master self-defense techniques and martial arts with Silat.</p>
        </div>
      </div>
    </section>
  );
}
