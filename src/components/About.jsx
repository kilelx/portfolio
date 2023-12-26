import {useState, useRef, useEffect} from 'react'
import Title from './Title'
import logo1 from '/assets/logo_1.png'
import logo2 from '/assets/logo_2.png'
import logo3 from '/assets/logo_3.png'
import logo4 from '/assets/logo_4.png'
import logo5 from '/assets/logo_5.png'
import logo6 from '/assets/logo_6.png'

export default function About() {

  const imgContainerRef = useRef(null)
  // const {xPositions, setXPositions} = useState([]);
  // const {yPositions, setYPositions} = useState([]);

  const logos = [
    {
      name: "React",
      src: logo1,
      id: 1
    },
    {
      name: "Tailwind CSS",
      src: logo2,
      id: 2
    },
    {
      name: "ThreeJS",
      src: logo3,
      id: 3
    },
    {
      name: "TypeScript",
      src: logo4,
      id: 4
    },
    {
      name: "GSAP",
      src: logo5,
      id: 5
    },
    {
      name: "Github",
      src: logo6,
      id: 6
    },
  ]

  useEffect(() => {
    const offset = 40;
    const xMax = imgContainerRef.current.getBoundingClientRect().width - offset;
    const yMax = imgContainerRef.current.getBoundingClientRect().height - offset;

    placeLogos(xMax, yMax);

    function placeLogos(xMax, yMax) {
      const placedLogos = logos.map((logo) => {
          // console.log(Math.floor(xMax));
          // console.log(Math.floor(Math.random() * xMax));

          // Empêcher superposition d'éléments
          logo.x = Math.floor(Math.random() * xMax);
          logo.y = Math.floor(Math.random() * yMax);

          // create the img element and add it to the DOM
          let img = document.createElement("img");
          img.src=logo.src;
          img.classList.add("absolute");
          img.style.top = logo.y + "px";
          img.style.left = logo.x + "px";
          imgContainerRef.current.appendChild(img);

          console.log(logo);
      })
    }
  }, [])

  return (
    <section>
        <Title
        content="About"
        subtitle=""
        negative={true}
        />
        <div ref={imgContainerRef} className='relative h-[275px] md:h-[350px] mt-8'></div>
        <p>Hello</p>
    </section>
  )
}
