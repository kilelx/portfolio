import React from 'react'

export default function Title({content, negative}) {
    console.log(content);
  return (
    <h2
    className={`text-title font-playfair text-brown mt-[200px] relative transform
    after:absolute after:block after:text-title
    ${negative ? "-rotate-little" : "rotate-little"}
    `}
    >&nbsp;{content} - {content} - {content}</h2>
  )
}
