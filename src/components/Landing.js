import React from 'react'

const Landing = (props) => {
  return (
    <header
      id={props.id}
      style={{
        height: "100vh",
        width: "200vh",
        background: "url('https://i.pinimg.com/originals/23/0f/af/230fafdbc613ff0cf6a80816b71f90c0.jpg')",
        /* Create the parallax scrolling effect */
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        /* Vertical and Horizontal Center */
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        /* Allow spaces */
        whiteSpace: "pre-wrap"
      }}>
        <h1>{ props.quote }</h1>
        <span>     </span>
        <h2 align="right">-{ props.person }</h2>
    </header>
  )
}

export default Landing