import {useState, useRef, useEffect} from "react";
import githubLogo from "/assets/logo_github.svg"
import linkedinLogo from "/assets/logo_linkedin.svg"
import gsap from "gsap";


export default function Header() {

  const [showMenu, setShowMenu] = useState(false);

  const charsContainerRef = useRef(null);
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const tlMenu = gsap.timeline();

  let headerHeight;

  useEffect(() => {

    if(charsContainerRef) {

      charsContainerRef.current.querySelectorAll("a").forEach(link => {
        // Select the words, and the span
        const words = [...link.querySelectorAll("span")].map(span => {
          // Wrap all letters in <span>
          const chars = Array.from(span.innerText).map(letter => {
            const spanElement = document.createElement("span");
            spanElement.textContent = letter;
            spanElement.classList.add('inline-block');
            return spanElement;
          });

          // Clear the content of the span
          span.innerHTML = '';

          // Append each created span to the span container
          chars.forEach(char => span.appendChild(char));

          return span.children;
        });

        const [chars, chars2] = words;

        const tlLinks = gsap.timeline({duration: .04, paused: true});
        tlLinks
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

        link.addEventListener("mouseenter", () => tlLinks.play());
        link.addEventListener("mouseleave", () => tlLinks.reverse());
      });
    }

  }, []);

  // disable scroll when menu is open
  useEffect(() => {
    showMenu ? document.body.style.overflow = "hidden" : document.body.style.overflow = "visible";
    headerHeight = headerRef.current.getBoundingClientRect().height;

    if(showMenu) {
      console.log(showMenu);
      tlMenu
      .to(menuRef.current, {
        display: "flex",
        height: `calc(100vh - ${headerHeight}px)`,
        duration: 0
      })
      .to('.clip-path', {
        "--clip": "150%",
        duration: 1
      })
    } else if(!showMenu) {
      tlMenu
      .to('.clip-path', {
        "--clip": "0%",
        duration: 1
      })
      .to(menuRef.current, {
        height: `fit-content`,
        display: 'none',
        duration: 0
      })
    }
  }, [showMenu])

  const handleClick = () => {
    if (window.matchMedia("(max-width: 767px)").matches) {
      setShowMenu(!showMenu);
    }
  }

  return (
    <header
    ref={headerRef}
    className="header font-playfair section-container h-fit py-[25px] relative md:flex md:justify-between">
      <div className="font-semibold text-xl">
        <a href="#hero_section">Kieran LELEUX</a>
      </div>
      {/* mob:h-[calc(100vh - ${headerHeight}px)] */}
      <div
      ref={menuRef}
      className={`${showMenu ? "flex" : ""} clip-path mob:absolute mob:bg-dark mob:w-screen mob:top-full mob:-left-[30px] mob:flex mob:items-center mob:justify-center`}>
      {/* className={`${showMenu ? `mob:absolute mob:bg-dark mob:w-screen mob:top-full mob:-left-[30px] mob:flex mob:items-center mob:justify-center` : ""} clip-path mob:hidden`}> */}
      {/* className={`${showMenu ? `clip-path mob:absolute mob:bg-dark mob:w-screen mob:top-full mob:-left-[30px] mob:flex mob:items-center mob:justify-center` : "mob:hidden"}`}> */}
      {/* className={`${showMenu ? "mob:flex mob:items-center mob:justify-center mob:h-[90vh]" : "mob:hidden"}`}> */}
        <nav className="text-lg flex flex-col items-center md:justify-between">
          <ul className="flex flex-col text-xl md:text-base md:flex-row mob:gap-[30px] text-center md:absolute md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2  md:-translate-y-1/2" ref={charsContainerRef}>
            <li>
              <a
              href="home"
              onClick={handleClick}
              className="inline-block p-4">
                <div className="relative block overflow-hidden">
                  <span className="md:opacity-50">Home</span>
                  <span className="absolute top-0 left-0">Home</span>
                </div>
              </a>
            </li>
            <li>
              <a
              href="#about"
              onClick={handleClick}
              className="inline-block p-4">
                <div className="relative block overflow-hidden">
                  <span className="md:opacity-50">About</span>
                  <span className="absolute top-0 left-0">About</span>
                </div>
              </a>
            </li>
            <li>
              <a
              href="#projects"
              onClick={handleClick}
              className="inline-block p-4">
                <div className="relative block overflow-hidden">
                  <span className="md:opacity-50">Projects</span>
                  <span className="absolute top-0 left-0">Projects</span>
                </div>
              </a>
            </li>
            <li>
              <a
              href="#contact"
              onClick={handleClick}
              className="inline-block p-4">
                <div className="relative block overflow-hidden">
                  <span className="md:opacity-50">Contact</span>
                  <span className="absolute top-0 left-0">Contact</span>
                </div>
              </a>
            </li>
          </ul>
          <div className="flex gap-[30px] mt-6 md:mt-0">
            <a href="https://github.com/kilelx" target="_blank">
              <img src={githubLogo} alt="Github logo" />
            </a>
            <a href="https://www.linkedin.com/in/kieran-leleux/" target="_blank">
              <img src={linkedinLogo} alt="Linkedin logo" />
            </a>
          </div>
        </nav>
      </div>

      <button
      // onClick={handleToggleMenu}
      onClick={() => setShowMenu(!showMenu)}
      className={`${showMenu ? "" : ""} absolute right-0 top-[26px] md:hidden`}
      >
        {showMenu ? "X" : "O"}
      </button>
    </header>
  );
}


// https://reactcommunity.org/react-transition-group/transition