import { useEffect, useRef } from 'react'
import Title from '../components/Title'
import reactLogo from '/assets/logo_react.svg'
import tailwindLogo from '/assets/logo_tailwind.svg'
import threejsLogo from '/assets/logo_threejs.svg'
import typescriptLogo from '/assets/logo_typescript.svg'
import gsapLogo from '/assets/logo_gsap.svg'
import githubLogo from '/assets/logo_github.svg'
import SplitType from 'split-type'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger);

export default function About() {

  const logosContainerRef = useRef(null);
  const lenisRef = useRef(null)
  const logoTl = gsap.timeline();

  useEffect(() => {

    // === Text animation ===
    if(lenisRef) {

      // Split the lines
      const text = new SplitType('#target', { types: 'lines' });

      // Lier la width au scroll, la faire descendre à zéro
      const allLines = document.querySelectorAll(".line");
      allLines.forEach((line) => {
        line.classList.add("relative")
        const divElement = document.createElement("div");
        divElement.classList.add("overlay", "absolute", "bg-dark", "top-0", "right-0", "w-0", "h-full", "pointer-events-none", "opacity-75");

        line.appendChild(divElement);

        gsap.from(divElement, {
          scrollTrigger: {
            trigger: line,
            start: 'top center',
            end: 'bottom center',
            scrub: true,
          },
          width: '100%'
        })
      });
    }

    // === Logos animation ===
    // // Floating
    logoTl.to(".logo", {
      x: "random(-3, 3)",
      y: "random(-3, 3)",
      ease: 'none',
      duration: 1,
      repeat: -1,
      repeatRefresh: true,
    })

    // Logo section
    if(logosContainerRef.current) {

      // Fixed position or not
      // gsap.from(logosContainerRef.current, {
      //   scrollTrigger: {
      //     trigger: lenisRef.current,
      //     start: "top top",
      //     end: "bottom bottom",
      //   },
      //   position: 'relative'
      // })

      // Hovering section
      const rect = logosContainerRef.current.getBoundingClientRect();

      // Mouse hover
      logosContainerRef.current.addEventListener("mousemove", (e) => {

        // Calculate the mouse position in percentage
        let mouseX = Math.floor((e.offsetX * 100) / rect.width);
        let mouseY = Math.floor((e.offsetY * 100) / rect.height);

        gsap.to('.logo', {
            top: mouseY + '%',
            left: mouseX + '%',
            ease: "power1.out",
            overwrite: "auto",
            stagger: 0.02,
          }
        )
      })

      // When the mouse leave the hover, reset the positon
      logosContainerRef.current.addEventListener("mouseleave", (e) => {
        // Enable floating effect
        logoTl.play();

        // For each logo, get the default positions
        document.querySelectorAll('.logo').forEach((logo) => {
          gsap.to(logo, {
            top: Math.round(logos[logo.id - 1].top) + '%',
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
        <div
        ref={lenisRef}
        className="flex flex-col md:items-start md:flex-row md:justify-between md:mt-32">
          <div
          ref={logosContainerRef}
          className='sticky w-full my-8 h-[275px] md:w-col6 md:h-screen md:my-0 md:order-2'>
            {
              logos.map((logo) => {
                return(
                  <img
                  src={logo.src}
                  alt={`Logo ${logo.name}`}
                  key={logo.id}
                  id={logo.id}
                  className='logo absolute md:w-12 object-contain pointer-events-none'
                  style={
                    {
                      top: logo.top + "%",
                      left: logo.left + "%",
                      zIndex: logo.id
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