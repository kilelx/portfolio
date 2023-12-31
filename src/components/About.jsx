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
      id: 1,
      top: 20,
      left: 15
    },
    {
      name: "Tailwind CSS",
      src: logo2,
      id: 2,
      top: 50,
      left: 80
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
      left: 10
    },
  ]

  // useEffect(() => {
  //   const offset = 40;
  //   const xMax = imgContainerRef.current.getBoundingClientRect().width - offset;
  //   const yMax = imgContainerRef.current.getBoundingClientRect().height - offset;

  //   placeLogos(xMax, yMax);

  //   function placeLogos(xMax, yMax) {
  //     const placedLogos = logos.map((logo) => {
  //         // console.log(Math.floor(xMax));
  //         // console.log(Math.floor(Math.random() * xMax));

  //         // Empêcher superposition d'éléments
  //         logo.x = Math.floor(Math.random() * xMax);
  //         logo.y = Math.floor(Math.random() * yMax);

  //         // create the img element and add it to the DOM
  //         let img = document.createElement("img");
  //         img.src=logo.src;
  //         img.classList.add("absolute");
  //         img.style.top = logo.y + "px";
  //         img.style.left = logo.x + "px";
  //         imgContainerRef.current.appendChild(img);

  //         console.log(logo);
  //     })
  //   }
  // }, [])

  return (
    <section className='w-col-12'>
        <Title
        content="About"
        subtitle=""
        negative={true}
        />
        <div className="flex justify-between items-center section-container">
          <div className='w-col6'>
            <p>Blablabla self taught fond of creative developement pixel perfect animation blablaBlablabla self taught fond of creative developement pixel perfect animation blablaBlablabla self taught fond of creative developement pixel perfect animation blabla</p>
            <p>Donec elementum eros semper sem consectetur, eu iaculis metus ultricies. Nullam vel neque placerat enim sodales euismod non quis urna. Aenean eget felis a quam dictum congue id quis ligula. Phasellus sodales ante egestas dolor feugiat, et iaculis orci cursus.</p>
            <p>Aenean sapien augue, mollis non accumsan at, rutrum et augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus dapibus ultrices lectus et ullamcorper.</p>
          </div>
          <div ref={imgContainerRef} className='relative w-col6 h-[275px] md:h-[350px]'>
            {
              logos.map((logo) => {
                console.log(logo);

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
        </div>
    </section>
  )
}
