import Project from "../components/Project";
import Title from "../components/Title";
import imgProjet1 from "/assets/project1.png"
import imgProjet2 from "/assets/project2.png"
import imgProjet3 from "/assets/project3.png"

export default function Work() {

  const projects = [
    {
      name: "iPod - 1’000 songs in your pocket",
      desc: "CSS-designed first Apple’s iPod, first creation for a Discord Contest.",
      projectLink: "",
      img: imgProjet1,
      stack: ["react", "sass"],
      id: 1
    },
    {
      name: "Galaxy generator",
      desc: "Galaxy generator made in ThreeJs, developed during the ThreeJS Journey.",
      projectLink: "",
      img: imgProjet2,
      stack: ["threejs"],
      id: 2
    },
    {
      name: "Metropolis",
      desc: "Animation challenge from the french Youtuber Benjamin Code.",
      projectLink: "",
      img: imgProjet3,
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
        <div className="mt-12 md:mt-32">
            <ul
            className="projects md:px-[calc((100vw-60px)/18)] md:flex md:justify-between md:flex-wrap">
              {projects.map((project) => (
                <Project
                  name={project.name}
                  desc={project.desc}
                  link={project.link}
                  img={project.img}
                  stack={project.stack}
                  key={project.id}
                />
              ))}
            </ul>
        </div>
    </section>
  )
}
