// https://medium.com/@samuelafolabidev/create-engaging-mouse-move-effects-in-react-with-gsap-a-step-by-step-guide-fbff9b3acd22

import { useState, useEffect, useRef } from 'react'
import Title from '../components/Title'
import reactLogo from '/assets/logo_react.svg'
import tailwindLogo from '/assets/logo_tailwind.svg'
import threejsLogo from '/assets/logo_threejs.svg'
import typescriptLogo from '/assets/logo_typescript.svg'
import gsapLogo from '/assets/logo_gsap.svg'
import githubLogo from '/assets/logo_github.svg'
import SplitType from 'split-type'
import gsap from 'gsap'

export default function About() {

  const logosContainerRef = useRef(null);
  // const [mousePos, setMousePos] = useState({});
  // const tl = gsap.timeline();

  useEffect(() => {

    // === Text animation ===
    // Split the lines
    const text = new SplitType('#target', { types: 'lines' });

    // Lier la width au scroll, la faire descendre à zéro

    const allLines = document.querySelectorAll(".line");
    allLines.forEach((line) => {
      line.classList.add("relative")
      const divElement = document.createElement("div");
      divElement.classList.add("absolute", "bg-dark", "top-0", "right-0", "w-full", "h-full", "pointer-events-none", "opacity-50");

      line.appendChild(divElement);
    })

    // === Logos animation ===
    // // Floating
    // tl.to(".logo", {
    //   x: "random(-3, 3)",
    //   y: "random(-3, 3)",
    //   ease: 'none',
    //   duration: 1,
    //   repeat: -1,
    //   // repeatRefresh: true,
    // })

    // const handleMouseMove = (e) => {
    //   setMousePos({ x: e.offsetX, y: e.offsetY });
    // };


    // Hovering
    if(logosContainerRef.current) {

      const rect = logosContainerRef.current.getBoundingClientRect();

      // Mouse hover
      logosContainerRef.current.addEventListener("mousemove", (e) => {

        let mouseX = (Math.round(e.clientX - rect.left) * 100) / rect.width;
        let mouseY = (Math.round(e.clientY - rect.top) * 100) / rect.height;
        // clientY not working on scroll, because it's based on the viewport. look for a formula to calculate the top either from the top of the docs, or from the top of the section

        gsap.to('.logo', {
            top: mouseY + '%',
            left: mouseX + '%',
            // x: mouseX,
            // y: mouseY,
            ease: "power1.out",
            overwrite: "auto",
            stagger: 0.02,
          }
        )
      })
      logosContainerRef.current.addEventListener("mouseleave", (e) => {

        document.querySelectorAll('.logo').forEach((logo) => {
          gsap.to(logo, {
            top: logos[logo.id - 1].top + '%',
            left: logos[logo.id - 1].left + '%',
            delay: 1
          })
        })

      })
    }

  }, [])

  const logos = [
    {
      name: "React",
      src: reactLogo,
      id: 1,
      top: 20,
      left: 15
    },
    {
      name: "Tailwind CSS",
      src: tailwindLogo,
      id: 2,
      top: 50,
      left: 85
    },
    {
      name: "ThreeJS",
      src: threejsLogo,
      id: 3,
      top: 70,
      left: 55
    },
    {
      name: "TypeScript",
      src: typescriptLogo,
      id: 4,
      top: 15,
      left: 62
    },
    {
      name: "GSAP",
      src: gsapLogo,
      id: 5,
      top: 40,
      left: 40
    },
    {
      name: "Github",
      src: githubLogo,
      id: 6,
      top: 60,
      left: 5
    },
  ]

  return (
    <section className='section-container'>
        <Title
        content="About"
        subtitle="Currently looking for a sanwdich course in creative development"
        negative={true}
        />
        <div className="flex flex-col md:items-start md:flex-row md:justify-between md:mt-32">
          <div ref={logosContainerRef}
          className='relative w-full my-8 h-[275px] md:w-col6 md:h-screen md:my-0 md:order-2'>
            {
              logos.map((logo) => {
                return(
                  <img
                  src={logo.src}
                  alt={`Logo ${logo.name}`}
                  key={logo.id}
                  id={logo.id}
                  className='logo absolute md:w-12 object-contain'
                  style={
                    {
                      top: logo.top + "%",
                      left: logo.left + "%"
                    }
                  }
                  />
                )
              })
            }
          </div>
          <div className='md:w-col7 text-[calc(8000vw/1000)] md:text-[calc(4000vw/1000)]'>
            <p id='target' className='leading-snug'>As a junior developer, I'm passioned about web development and all the cool stuff apps can do. I am self-taught, and I try to learn a new thing everyday. I love traveling, cooking & eating, interactive websites, and sports. You won't believe the hours I've lost on Awwwards trying to crack the code behind those smooth animations.</p>
          </div>
        </div>
    </section>
  )
}