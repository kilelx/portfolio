import { useRef, useEffect } from "react";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Title({content, negative, subtitle}) {

  const lenisRef = useRef(null);

  useEffect(() => {

    if(lenisRef) {

      let tl = gsap.timeline({paused: true});

      if (window.matchMedia("(max-width: 767px)").matches) {
        negative ? tl.fromTo(lenisRef.current, {x: '-50px'}, {x: '-200%', ease: 'none'}, 0) : tl.fromTo(lenisRef.current, {x: '-200%'}, {x: '-50px', ease: 'none'}, 0)
      } else {
        negative ? tl.fromTo(lenisRef.current, {x:0}, {x: '-60%', ease: 'none'}, 0) : tl.fromTo(lenisRef.current, {x:'-60%'}, {x: '0', ease: 'none'}, 0)
      }

      const scrollTitle = ScrollTrigger.create({
        animation: tl,
        trigger: lenisRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.5
      })

    }
  }, []);

  return (
    <>
      <h2
      className={`text-mob-title md:text-title font-playfair text-brown mt-40 whitespace-nowrap select-none transform
      ${negative ? "-rotate-little" : "rotate-little"}
      `}
      ref={lenisRef}
      >&nbsp;{content} - {content} - {content}</h2>
      <h3 className='text-brown text-center md:text-lg'>{subtitle}</h3>
    </>
  )
}
