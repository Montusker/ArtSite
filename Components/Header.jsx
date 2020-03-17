import Link from 'next/link';

export default function Header() {


  return (
    <div className="nav justify-content-end bg-light">
      <div className="nav-item">
      <Link href="/index" title="Home Page">
        <a className="nav-link" >Home Page</a>
      </Link>
      </div>
      <div className="nav-item">
      <Link href="/about" title="About Page">
        <a className="nav-link">About Page</a>
      </Link>
      </div>
      <div className="nav-item">
      <Link href="/shop" title="Shop Page">
        <a className="nav-link">Shop Page</a>
      </Link>
      </div>
      <div className="nav-item">
      <Link href="/art" title="All Works">
        <a className="nav-link">All Works</a>
      </Link>
      </div>
      <div className="nav-item">
      <Link href="/contact" title="Contact Me">
        <a className="nav-link">Contact Me</a>
      </Link>
      </div>
    </div>
  );
}
