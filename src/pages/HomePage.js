import React from 'react'
import Landing from '../components/Landing'
import CharacterContainer from '../components/CharacterContainer'
import Summary from '../components/Summary'
import Gallery from '../components/Gallery'
import Clips from '../components/Clips'

import MainMenu from '../components/MainMenu'

const quote = '"The secret to getting ahead is getting started."'
const person = "Mark Twain"
const characters = [
  {
    name:"Kurosaki Ichigo",
    age:"19",
    ability:"Getsuga Tensha",
    image: "images/id5.jpg",
    description: "A monster from the cloud region."
  },
  {
    name:"Rukia Kuchiki",
    age:"19",
    ability:"Getsuga Tensha",
    image: "images/id5.jpg",
    description: "A monster from the cloud region."
  },
  {
    name:"Yoruichi Shihouin",
    age:"19",
    ability:"Getsuga Tensha",
    image: "images/id5.jpg",
    description: "A monster from the cloud region."
  },
  {
    name:"Sui Feng",
    age:"19",
    ability:"Getsuga Tensha",
    image: "images/id5.jpg",
    description: "A monster from the cloud region."
  }
]

export default function HomePage() {
  return (
    <div>
      <Landing id="" quote={quote} person={person} />
      <br />
      <MainMenu />
      <br />
      <CharacterContainer id="characters" characters={characters}/>
      <br />
      <Summary id="summary" />
      <br />
      <Gallery id="gallery" />
      <br />
      <Clips id="clips" />
      
    </div>
  )
}