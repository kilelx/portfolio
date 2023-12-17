import React, {useRef, useEffect} from 'react'

export default function Hero() {

  const titleRef = useRef<HTMLSpanElement>(null);
  const maxWidth = window.innerWidth;

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
    <h1 className="">
      <span  className="text-white font-normal">I'm Kieran,</span><br></br>
      <span ref={titleRef} className="outline-title text-dark font-bold">Creative developer</span>
    </h1>
  )
}


  /*
  const body = document.body;
  const maxWidth = window.innerWidth;
  const h1 = document.querySelector("h1");

  body.addEventListener("mousemove", (e) => handleMouseMove(e));

  function handleMouseMove(e) {
    let mouseX = e.clientX;
    // Get the percentage on X of the mouse
    let xPercentage = (mouseX * 100) / maxWidth;
    // Produit en croix, and add +100 to get a range between 100 and 900
    let progress = ((xPercentage * 800) / 100) + 100;
    console.log(xPercentage)

    h1.style.fontVariationSettings = `'wght' ${Math.round(progress)}`;
}

  */