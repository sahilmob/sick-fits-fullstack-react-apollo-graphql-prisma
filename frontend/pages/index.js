import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>Hello World</p>
      <Link href="/sell">
        <a>Sell!</a>
      </Link>
    </div>
  );
}
