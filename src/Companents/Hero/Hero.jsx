import React from 'react'
import "../Hero/Hero.css"

function Hero({ children, className }) {
  return (
    <>
      <section className={`hero ${className}`}>{children}</section>
    </>
  )
}

export default Hero
