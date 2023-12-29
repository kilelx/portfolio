import Title from '../components/Title'
import logo1 from '/assets/logo_1.png'
import logo2 from '/assets/logo_2.png'
import logo3 from '/assets/logo_3.png'
import logo4 from '/assets/logo_4.png'
import logo5 from '/assets/logo_5.png'
import logo6 from '/assets/logo_6.png'

export default function About() {

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
        <div className="flex flex-col md:items-center md:flex-row md:justify-between">
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
          <div className='md:w-col7'>
            <p>Blablabla self taught fond of creative developement pixel perfect animation blablaBlablabla self taught fond of creative developement pixel perfect animation blablaBlablabla self taught fond of creative developement pixel perfect animation blabla</p>
            <br></br>
            <p>Donec elementum eros semper sem consectetur, eu iaculis metus ultricies. Nullam vel neque placerat enim sodales euismod non quis urna. Aenean eget felis a quam dictum congue id quis ligula. Phasellus sodales ante egestas dolor feugiat, et iaculis orci cursus.</p>
          </div>
        </div>
    </section>
  )
}