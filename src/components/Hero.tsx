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

      titleRef.current.style.fontVariationSettings = `'wght' ${progress}`;
    }
  }

  useEffect(() => {
    document.body.addEventListener("mousemove", handleMouseMove);

    return () => {document.body.removeEventListener("mousemove", handleMouseMove);}
  }, [])


  return (
    <section className='section-container'>
      <h1 className="">
        <span  className="text-white font-normal">I'm Kieran,</span><br></br>
        <span ref={titleRef} className="outlined-hero text-dark font-bold">Creative developer</span>
      </h1>
      <a href="" className='border border-white text-white p-[10px] pr-[90px]'>No time? Let's get in touch</a>
    </section>
  )
}