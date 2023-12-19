import React, {useRef, useEffect} from 'react'

export default function Hero() {

  const titleRef = useRef<HTMLSpanElement>(null);
  let maxWidth = window.innerWidth;

  window.addEventListener("resize", () => {maxWidth = window.innerWidth});

  const handleMouseMove = (e: MouseEvent) => {
    if(titleRef.current) {
      let mouseX = e.clientX;
      // Get the percentage on X of the mouse
      let xPercentage = (mouseX * 100) / maxWidth;
      // Produit en croix, and add +100 to get a range between 100 and 900
      let progress = ((xPercentage * 800) / 100) + 100;

      titleRef.current.style.fontVariationSettings = `'wght' ${Math.round(progress)}`;
    }
  }

  useEffect(() => {
    document.body.addEventListener("mousemove", handleMouseMove);

    return () => {document.body.removeEventListener("mousemove", handleMouseMove);}
  }, [])


  return (
    <section className='section-container md:ml-psh1' id='hero_section'>
      <p className='text-[30px] md:text-[50px]'>👋</p>
      <h1>
        <span  className="text-mob-intro md:text-intro text-white font-normal">I'm Kieran,</span>
        <br className='md:mt-[calc(-1500vw/1000)]'></br>
        <span ref={titleRef} className="outlined-hero text-dark font-bold text-mob-mammoth md:text-mammoth">Creative developer</span>
      </h1>

      <a href="" className='inline-flex items-center border border-white text-white p-[10px]'>No time? Let's get in touch
      <svg className='ml-[20px] md:ml-[30px]' width="26" height="13" viewBox="0 0 26 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 6.23026H25C21.9298 5.82091 15.7895 4.01974 15.7895 0.0899124M0 6.76974H25C21.9298 7.17909 15.7895 8.98026 15.7895 12.9101" stroke="#F7F7F7" stroke-width="2"/>
      </svg>

      </a>
    </section>
  )
}