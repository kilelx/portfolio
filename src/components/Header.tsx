import {useState, useRef, useEffect} from "react";
import gsap from "gsap";


export default function Header() {

  const [showMenu, setShowMenu] = useState(false);

  const charsContainerRef = useRef<HTMLUListElement>(null);
  // const chars2Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {

    console.log(charsContainerRef);

    charsContainerRef.querySelectorAll("a").forEach((link) => {
      const words = [...link.querySelectorAll(".word")].map((el) => el.children);
      const [chars, chars2] = words;
    })
    
    /*
document.querySelectorAll("a").forEach((link) => {
  // Go 2 levels deep in the span, to select all chars
  const words = [...link.querySelectorAll(".word")].map((el) => el.children)
  const [chars, chars2] = words;
  
  const tl = gsap.timeline({duration: .05, paused: true});
  tl
    .to(chars, {
      stagger: 0.025,
      y: "-100%",
      opacity: 0
    })
    .to(chars2, {
      stagger: 0.025,
      y: "0",
      opacity: 1
    }, "<");
  
  link.addEventListener("mouseenter", () => tl.play());
  link.addEventListener("mouseleave", () => tl.reverse());
})
    */
  }, []);
  return (
    <header className="font-playfair section-container py-[25px] relative md:flex md:justify-between">
      <div className="font-semibold text-xl">
        <a href="#hero_section">Kieran LELEUX</a>
      </div>

      <div className={`${showMenu ? "mob:flex mob:items-center mob:justify-center mob:w-full mob:h-[90vh]" : "mob:hidden"}`}>
        <nav className="text-lg flex flex-col items-center md:justify-between">
          <ul className="flex flex-col md:flex-row mob:gap-[30px] text-center md:absolute md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2  md:-translate-y-1/2" ref={charsContainerRef}>
            <li>
              <a href="" className="inline-block p-4">
                <div className="relative block overflow-hidden">
                  <span className="opacity-50">Home</span>
                  <span className="absolute t-0 l-0">Home</span>
                </div>
              </a>
            </li>
            <li>
              <a href="" className="inline-block p-4">
                <div className="relative block overflow-hidden">
                  <span className="opacity-50">About</span>
                  <span className="absolute t-0 l-0">About</span>
                </div>
              </a>
            </li>
            <li>
              <a href="" className="inline-block p-4">
                <div className="relative block overflow-hidden">
                  <span className="opacity-50">Projects</span>
                  <span className="absolute t-0 l-0">Projects</span>
                </div>
              </a>
            </li>
            <li>
              <a href="" className="inline-block p-4">
                <div className="relative block overflow-hidden">
                  <span className="opacity-50">Contact</span>
                  <span className="absolute t-0 l-0">Contact</span>
                </div>
              </a>
            </li>
          </ul>
          <div className="flex gap-[30px] mt-[20px] md:mt-0">
            <p className="w-[30px] h-[30px] bg-red-500">GH</p>
            <p className="w-[30px] h-[30px] bg-red-500">LK</p>
          </div>
        </nav>
      </div>

      <button
      onClick={() => setShowMenu(!showMenu)}
      className={`${showMenu ? "bg-red-200" : "bg-blue-200"} absolute right-0 top-[26px] md:hidden`}
      >Burger menu</button>
    </header>
  );
}
