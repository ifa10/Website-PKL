export default function Facilities() {
  return (
    <section id="facilities" className="py-12 px-6 bg-gradient-to-r from-green-500 via-teal-600 to-blue-700">
      <h2 className="text-4xl font-extrabold text-center text-white">Our Facilities</h2>
      <p className="mt-4 text-center text-lg text-gray-200">Our school offers modern facilities to support students' growth and well-being, including:</p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition duration-300">
          <h3 className="text-xl font-semibold">Gedung yang Representatif</h3>
          <p className="mt-2 text-gray-600">A modern and spacious building designed to provide a comfortable learning environment.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition duration-300">
          <h3 className="text-xl font-semibold">Asrama Pondok Pesantren</h3>
          <p className="mt-2 text-gray-600">A well-equipped dormitory for students to live and study in a supportive and disciplined environment.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition duration-300">
          <h3 className="text-xl font-semibold">Yatim Piatu Gratis di Pondok Pesantren</h3>
          <p className="mt-2 text-gray-600">Free accommodation and care for orphans in a nurturing and compassionate environment.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition duration-300">
          <h3 className="text-xl font-semibold">Perpustakaan</h3>
          <p className="mt-2 text-gray-600">A well-stocked library providing access to a wide range of books and educational resources.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition duration-300">
          <h3 className="text-xl font-semibold">Laboratorium IPA</h3>
          <p className="mt-2 text-gray-600">State-of-the-art science laboratories for hands-on learning and experimentation.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition duration-300">
          <h3 className="text-xl font-semibold">Sarana Olahraga</h3>
          <p className="mt-2 text-gray-600">Comprehensive sports facilities to support physical fitness and recreational activities.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition duration-300">
          <h3 className="text-xl font-semibold">Koperasi</h3>
          <p className="mt-2 text-gray-600">A cooperative providing essential goods and services for students and staff.</p>
        </div>
      </div>
    </section>
  );
}
