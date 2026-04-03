import "./Navbar.css";
export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <p className=" logo">Ultimate gym</p>

        <div className="link">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </>
  );
}
