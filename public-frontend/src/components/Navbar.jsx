import { ImCart } from "react-icons/im";

export default function Navbar() {
  return (
    <header
      id="header-container"
      className="flex flex-row justify-between items-center pt-2 pl-6 pr-6 max-h-20"
    >
      <section
        id="section-logo"
        className="flex w-1/3 max-h-20 justify-start items-center"
      >
        <img
          className="size-20"
          src="https://freesvg.org/img/Tribal-Kitten-2.png"
          alt=""
        />
      </section>
      <section id="section-nav-container" className="w-1/3 justify-center">
        <nav>
          <ul className="flex flex-row justify-center items-center gap-12">
            <li className="text-2xl">Our Products</li>
          </ul>
        </nav>
      </section>
      <section
        id="section-cart-container"
        className="flex flex-row items-center justify-end gap-3 w-1/3"
      >
        <div className="flex min-w-20 min-h-20 justify-center items-center">
          <ImCart />
        </div>
      </section>
    </header>
  );
}
