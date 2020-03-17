import Link from 'next/link';

export default function Header() {


  return (
    <div className="nav justify-content-end bg-light">
      <div className="nav-item">
      <Link href="/" >
        <a  title="Home Page" className="nav-link" >Home Page</a>
      </Link>
      </div>
      <div className="nav-item">
      <Link href="/about" >
        <a title="About Page" className="nav-link">About Page</a>
      </Link>
      </div>
      <div className="nav-item">
      <Link href="/shop" >
        <a title="Shop Page" className="nav-link">Shop Page</a>
      </Link>
      </div>
      <div className="nav-item">
      <Link href="/art" >
        <a title="All Works" className="nav-link">All Works</a>
      </Link>
      </div>
      <div className="nav-item">
      <Link href="/contact" >
        <a title="Contact Me" className="nav-link">Contact Me</a>
      </Link>
      </div>
    </div>
  );
}
