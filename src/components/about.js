export default function About() {
  return (
    <section id="about" className="py-16 px-6 bg-gradient-to-b from-green-100 to-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        {/* Judul dengan tampilan lebih elegan */}
        <h2 className="text-4xl font-extrabold text-green-700 mb-6">
          About Us 🌿
        </h2>

        {/* Card dengan shadow lebih smooth */}
        <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-200">
          <p className="text-lg text-gray-700 leading-relaxed">
            <span className="font-semibold text-green-700">MI Kebonsari</span> didirikan pada tahun <span className="font-semibold">1994</span> oleh para tokoh masyarakat Kebonsari yang memiliki komitmen tinggi terhadap pendidikan. 
            Tujuannya adalah menyediakan fasilitas pendidikan berkualitas serta mencetak generasi unggul di berbagai bidang. 🎓
          </p>
          
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Saat ini, MI Kebonsari berada dalam satu atap dengan Pondok Pesantren 
            <span className="font-semibold text-green-700"> "Attaubah"</span>, yang diasuh oleh 
            <span className="font-semibold text-green-700"> KH. Nuriyadin, M.Fil.I</span>. Kolaborasi ini membantu peserta didik mendapatkan pembelajaran akademik berkualitas sekaligus pembinaan karakter berbasis nilai-nilai keislaman. 💡
          </p>
        </div>
      </div>
    </section>
  );
}
