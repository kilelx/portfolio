import react from '/assets/logo_react.svg'
import tailwind from '/assets/logo_tailwind.svg'
import threejs from '/assets/logo_threejs.svg'
import typescript from '/assets/logo_typescript.svg'
import gsap from '/assets/logo_gsap.svg'
import github from '/assets/logo_github.svg'
import sass from '/assets/logo_sass.svg'

export default function Project({name, desc, link, img, stack}) {

    const logoMappings = {
        react: react,
        tailwind: tailwind,
        threejs: threejs,
        typescript: typescript,
        gsap: gsap,
        github: github,
        sass: sass
    };

  return (
    <li className='md:w-col5'>
        <img src={img} alt={name} className='w-full'></img>
        <div className="mt-3 mb-20">
            <div className="flex justify-between">
                <div className="flex gap-3">
                    {stack.map((logo) => (
                        <img
                        key={logo}
                        src={logoMappings[logo]}
                        alt={logo}
                        className='object-contain w-[20px] md:w-[30px]'
                        />
                    ))}
                </div>
                <a href={link} className='text-sm'>View the project</a>
            </div>
            <h3 className="text-lg mt-3 mb-2 font-semibold">{name}</h3>
            <p className='text-sm'>{desc}</p>
        </div>
    </li>
  )
}
