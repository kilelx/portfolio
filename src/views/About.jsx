import { useState, useEffect, useRef } from 'react'
import Title from '../components/Title'
import logo1 from '/assets/logo_1.png'
import logo2 from '/assets/logo_2.png'
import logo3 from '/assets/logo_3.png'
import logo4 from '/assets/logo_4.png'
import logo5 from '/assets/logo_5.png'
import logo6 from '/assets/logo_6.png'
import Splitting from "splitting"

export default function About() {

  const [lines, setLines] = useState([])
  const splitRef = useRef(null)

  useEffect(() => {
    if (splitRef) {
      let splitRes = Splitting({
        by: 'lines',
      })

      // Access to different lines
      console.log(splitRes[0].lines);
    }
  }, [splitRef])

  const logos = [
    {
      name: "React",
      src: logo1,
      id: 1,
      top: 20,
      left: 15
    },
    {
      name: "Tailwind CSS",
      src: logo2,
      id: 2,
      top: 50,
      left: 85
    },
    {
      name: "ThreeJS",
      src: logo3,
      id: 3,
      top: 70,
      left: 55
    },
    {
      name: "TypeScript",
      src: logo4,
      id: 4,
      top: 15,
      left: 62
    },
    {
      name: "GSAP",
      src: logo5,
      id: 5,
      top: 40,
      left: 40
    },
    {
      name: "Github",
      src: logo6,
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
        <div className="flex flex-col md:items-center md:flex-row md:justify-between mt-32">
          <div className='relative w-full my-8 md:w-col6 h-[275px] md:h-[350px] md:order-2'>
            {
              logos.map((logo) => {
                return(
                  <img
                  src={logo.src}
                  alt={`Logo ${logo.name}`}
                  key={logo.id}
                  className='absolute'
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
            {/* <SplittingParag /> */}
            <p ref={splitRef} data-splitting>As a junior developer, I'm passioned about web development and all the cool stuff apps can do.
            I am self-taught, and I try to learn a new thing everyday.
            I love traveling, cooking & eating, interactive websites, and sports.
            You won't believe the hours I've lost on Awwwards trying to crack the code behind those smooth animations.</p>
            {/* <p>As a junior developer, I'm passioned about web development and all the cool stuff apps can do.</p>
            <p>I am self-taught, and I try to learn a new thing everyday.</p>
            <p>I love traveling, cooking & eating, interactive websites, and sports.</p>
            <p>You won't believe the hours I've lost on Awwwards trying to crack the code behind those smooth animations.</p> */}
          </div>
        </div>
    </section>
  )
}