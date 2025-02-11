import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Image src="/Logo.png" alt="Logo" width={50} height={50} />
        <h1 className="text-lg font-bold ml-2">MI MAA'RIF NAILUL HUDA</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/profile">Profile</Link></li>
          <li><Link href="/program">Program</Link></li>
          <li><Link href="/berita">Berita | Blog</Link></li>
          <li><Link href="/ppdb" className="text-green-600 font-bold">PPDB</Link></li>
        </ul>
      </nav>
    </header>
  );
}
