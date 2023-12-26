import React from 'react'

export default function Title({content, negative}) {
    console.log(content);
  return (
    <>
      <h2
      className={`text-mob-title md:text-title font-playfair text-brown mt-[200px] whitespace-nowrap transform
      ${negative ? "-rotate-little" : "rotate-little"}
      `}
      >&nbsp;{content} - {content} - {content}</h2>
      <h3 className='text-brown text-center md:text-lg'>Currently looking for a sanwdich course in creative development</h3>
    </>
  )
}
