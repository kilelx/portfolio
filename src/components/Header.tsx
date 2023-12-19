import {useState} from "react";

export default function Header() {

  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="font-playfair section-container py-[25px] relative md:flex md:justify-between">
      <div className="font-semibold text-xl">
        {/* <a href="#hero_section" className="md:hidden">
          KL
        </a> */}
        <a href="#hero_section">Kieran LELEUX</a>
      </div>

      <div className={`${showMenu ? "mob:flex mob:items-center mob:justify-center mob:w-full mob:h-[90vh]" : "mob:hidden"}`}>
        <nav className="text-lg flex flex-col items-center md:justify-between">
          <ul className="flex flex-col md:flex-row gap-[30px] text-center md:absolute md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2  md:-translate-y-1/2">
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Contact</a></li>
          </ul>
          <div className="flex gap-[30px] mt-[20px] md:mt-0">
            <p className="w-[30px] h-[30px] bg-red-500">GH</p>
            <p className="w-[30px] h-[30px] bg-red-500">LK</p>
          </div>
        </nav>
      </div>
      {/* <div className={`${showMenu ? "flex flex-col items-center justify-center w-full h-screen" : "hidden"} md:flex md:flex-row md:justify-between`}>
        <nav className="text-lg md:flex md:justify-between">
          <ul className="flex flex-col md:flex-row gap-[30px] text-center">
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Contact</a></li>
          </ul>
          <div className="flex gap-[30px] mt-[20px] md:mt-0">
            <p className="w-[30px] h-[30px] bg-red-500">GH</p>
            <p className="w-[30px] h-[30px] bg-red-500">LK</p>
          </div>
        </nav>
      </div> */}

      <button
      onClick={() => setShowMenu(!showMenu)}
      className={`${showMenu ? "bg-red-200" : "bg-blue-200"} absolute right-0 top-[26px] md:hidden`}
      >Burger menu</button>
    </header>
  );
}
