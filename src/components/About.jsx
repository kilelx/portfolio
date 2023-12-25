import React from 'react'
import Title from './Title'
import logo1 from '/assets/logo_1.png'
import logo2 from '/assets/logo_2.png'
import logo3 from '/assets/logo_3.png'
import logo4 from '/assets/logo_4.png'
import logo5 from '/assets/logo_5.png'
import logo6 from '/assets/logo_6.png'

export default function About() {

  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

  return (
    <section>
        <Title
        content="About"
        subtitle=""
        negative={true}
        />
        <div>
          {logos.map((logo, index) => {
            return <img src={logo} alt="" key={index} />
          })}
        </div>
    </section>
  )
}
