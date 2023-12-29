import react from '/assets/logo_1.png'
import tailwind from '/assets/logo_2.png'
import threejs from '/assets/logo_3.png'
import typescript from '/assets/logo_4.png'
import gsap from '/assets/logo_5.png'
import github from '/assets/logo_6.png'

export default function Project({name, desc, link, img, stack, id}) {

  return (
    <li>
        <img src={img} alt={name}></img>
        <div className="mt-3 mb-20">
            <div className="flex justify-between">
                <div className="flex">
                    {
                        stack.forEach(logo => {
                            console.log(logo);
                        })
                    }
                </div>
                <a href={link}>View the project</a>
            </div>
            <h3 className="text-lg mt-3 mb-2 font-semibold">{name}</h3>
            <p>{desc}</p>
        </div>
    </li>
  )
}
