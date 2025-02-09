export default function Navbar() {
    return (
      <nav className="bg-green-700 text-white py-4 px-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">MI MAA'RIF NAILUL HUDA</h1>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:text-gray-300">About</a></li>
            <li><a href="#facilities" className="hover:text-gray-300">Facilities</a></li>
            <li><a href="#extracurricular" className="hover:text-gray-300">Extracurricular</a></li>
            <li><a href="#gallery" className="hover:text-gray-300">Gallery</a></li>
            <li><a href="#news" className="hover:text-gray-300">News</a></li>
          </ul>
        </div>
      </nav>
    );
  }