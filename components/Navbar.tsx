import Link from 'next/link';

export default function Navbar () {
  return (
    <nav className="bg-white text-blue-500 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="font-bold">DEK Innovations</div>
        <div>
          <Link href="/">
            <span className="cursor-pointer mr-4">Home</span>
          </Link>
          <Link href="/about">
            <span className="cursor-pointer mr-4">About</span>
          </Link>
          <Link href="/services">
            <span className="cursor-pointer mr-4">Services</span>
          </Link>
          <Link href="/contact">
            <span className="cursor-pointer">Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};