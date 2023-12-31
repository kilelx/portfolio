import {useRef, useEffect} from 'react'
import pictureHero from "../assets/picture_hero.jpg"

export default function Hero() {

  // const titleRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef(null);
  let maxWidth = window.innerWidth;

  // const handlePointerMove = (clientX: number) => {
  const handlePointerMove = (clientX) => {
    if(titleRef.current) {
      // Get the percentage on X of the mouse
      let xPercentage = (clientX * 100) / maxWidth;
      // Produit en croix, and add +100 to get a range between 100 and 900
      let progress = ((xPercentage * 800) / 100) + 100;

      titleRef.current.style.fontVariationSettings = `'wght' ${Math.round(progress)}`;
    }
  }

  useEffect(() => {

    handleResize(maxWidth);

    window.addEventListener('resize', () => {
      maxWidth = window.innerWidth;
      handleResize(maxWidth);
    });

    // function handleResize(maxWidth: number) {
    function handleResize(maxWidth) {
      if(maxWidth > 768) {
        document.body.addEventListener("mousemove", (e) => handlePointerMove(e.clientX));
      } else {
        document.body.addEventListener("touchmove", (e) => handlePointerMove(e.touches[0].clientX));
      }
    }

    return () => {
      document.body.removeEventListener("mousemove", (e) => handlePointerMove(e.clientX));
      document.body.removeEventListener("touchmove", (e) => handlePointerMove(e.touches[0].clientX))
      window.removeEventListener('resize', () => {
        maxWidth = window.innerWidth;
        handleResize(maxWidth);
      });
    }
  }, [])


  return (
    <section className='section-container flex flex-col md:flex-row md:justify-between mt-36 md:mt-[200px] md:pl-psh1' id='hero_section'>
      <div>
        <p className='text-5xl md:text-[50px] -ml-2 mb-3'>👋</p>
        <h1>
          <span  className="text-mob-intro md:text-intro text-white font-normal">I'm Kieran,</span>
          <br className='md:mt-[calc(-1500vw/1000)]'></br>
          <span ref={titleRef} className="outlined-hero text-dark font-bold text-mob-mammoth md:text-mammoth mob:transition mob:delay-1000">Creative developer</span>
        </h1>

        <a
        href=""
        className='inline-flex items-center border border-white text-white py-2 px-3 mt-8 md:mt-12'>
          No time? Let's get in touch
          <svg className='ml-[20px] md:ml-[30px]' width="25" height="13" viewBox="0 0 26 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 6.23026H25C21.9298 5.82091 15.7895 4.01974 15.7895 0.0899124M0 6.76974H25C21.9298 7.17909 15.7895 8.98026 15.7895 12.9101" stroke="#F7F7F7" strokeWidth="2"/>
          </svg>
        </a>
      </div>

      <div>
        <img src={pictureHero} alt="Picture of Kieran, the portfolio's owner" className='block w-full mt-[50vw] md:mt-0 h-auto md:w-[250px] md:h-[275px] object-cover rounded-t-full md:mr-psh1'/>
      </div>
    </section>
  )
}