import React from 'react'

const Landing = (props) => {
  return (
    <header
      style={{
        height: "100vh",
        width: "200vh",
        textAlign: "center",
        background: "url('https://images.ctfassets.net/p24lh3qexxeo/6pVwdeqsPhWgXTQ8jbsHnQ/33081906e5b4af1e8396a05a1a95b193/home_hero.svg')",
        /* Create the parallax scrolling effect */
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}>
        <div style={{display: "inline-block"}}>
          <h1>{ props.quote }</h1>
          <h2 align="right" >-{ props.person }</h2>
        </div>
    </header>
  )
}

export default Landing