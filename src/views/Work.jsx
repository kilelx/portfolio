import Title from "../components/Title";

export default function Work() {

  const projects = [
    {
      name: "iPod - 1’000 songs in your pocket",
      desc: "CSS-designed first Apple’s iPod, first creation for a Discord Contest.",
      link: "",
      img: "",
      stack: ["react", "sass"],
      id: 1
    },
    {
      name: "Galaxy generator",
      desc: "Galaxy generator made in ThreeJs, developed during the ThreeJS Journey.",
      link: "",
      img: "",
      stack: ["threejs"],
      id: 2
    },
    {
      name: "Metropolis",
      desc: "Animation challenge from the french Youtuber Benjamin Code..",
      link: "",
      img: "",
      stack: ["gsap", "sass"],
      id: 3
    },
  ]
  return (
    <section className="section-container">
        <Title
        content="Selected works"
        subtitle="A quick overview of some projects I've worked on!"
        negative={false}
        />
        <div>
            
        </div>
    </section>
  )
}
