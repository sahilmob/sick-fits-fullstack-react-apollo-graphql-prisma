import Link from "next/link";

export default function Nav() {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/sell">
        <a>Sell!</a>
      </Link>
    </div>
  );
}
