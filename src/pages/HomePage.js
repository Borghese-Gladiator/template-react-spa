import React from 'react'
import { Link } from 'react-router-dom'
import Landing from '../components/Landing'
import CharacterContainer from '../components/CharacterContainer'
import Summary from '../components/Summary'
import Gallery from '../components/Gallery'

const headerStyle = {
  textAlign: "center"
}

const quote = '"The secret to getting ahead is getting started."'
const person = "Mark Twain"
const characters = [
  {
    name:"Kurosaki Ichigo",
    age:"19",
    ability:"Getsuga Tensha"
  },
  {
    name:"Kurosaki Ichigo",
    age:"19",
    ability:"Getsuga Tensha"
  },
  {
    name:"Kurosaki Ichigo",
    age:"19",
    ability:"Getsuga Tensha"
  },
  {
    name:"Kurosaki Ichigo",
    age:"19",
    ability:"Getsuga Tensha"
  }
]

export default function HomePage() {
  return (
    <div>
      <Landing quote={quote} person={person} />
      <h1 style={headerStyle}>Home Page</h1>
      <p>
        <Link to="/taniarascia">taniarascia</Link> on GitHub.
      </p>
      
      <CharacterContainer characters={characters}/>
      <Summary />
      <Gallery />
    </div>
  )
}