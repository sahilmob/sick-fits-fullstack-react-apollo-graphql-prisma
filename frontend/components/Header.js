import Nav from "./Nav";

export default function Header() {
  return (
    <div>
      <div className="bar">
        <a href="">Sick Fits</a>
        <Nav />
        <div className="sub-bar">
          <p>Search</p>
        </div>
        <div>Cart</div>
      </div>
    </div>
  );
}
