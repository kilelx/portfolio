import React from 'react'
import Title from '../components/Title'
import linkedinIcon from "/assets/logo_linkedin.svg"
import emailIcon from "/assets/logo_email.svg"
import githubIcon from "/assets/logo_github.svg"

export default function Contact() {

  const links = [
    {
      name: "Linkedin",
      text: "Kieran LELEUX",
      link: "https://www.linkedin.com/in/kieran-leleux/",
      img: linkedinIcon
    },
    {
      name: "Mail",
      text: "llx.kieran@gmail.com",
      link: "mailto:llx.kieran@gmail.com?subject:You%20are%20hired!",
      img: emailIcon
    },
    {
      name: "Github",
      text: "@kilelx",
      link: "https://github.com/kilelx",
      img: githubIcon
    },
  ]
  return (
    <footer>
        <Title
        content="Contact"
        subtitle="Did I convince you? Not yet? Feel free if you want to discuss!"
        negative={false}
        />
        <ul>
          {links.map(link => (
            <li>
              <a
              href={link.link}
              target='_blank'>
                <img src={link.img} alt={`${link.name} icon`} />
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <div className=" text-xs text-center">
          <p>Developed & designed with 💖 by Kieran L.</p>
          <p className='mt-1'>&copy; 2024 Kieran LELEUX - All rights reserved</p>
        </div>
    </footer>
  )
}
