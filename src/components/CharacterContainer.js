import React from 'react';
import { CardGroup, Container } from 'reactstrap';
import CharacterCard from './CharacterCard'

const CharacterContainer = (props) => {
  return (
    <section id={props.id}>
      <Container>
        <h1 style={{textAlign: "center"}}>Character List</h1>
        <CardGroup>
          { props.characters.map((value, index)=>{
            return (
              <CharacterCard
                key={index}
                name={value.name}
                age={value.age}
                ability={value.ability}
              />
            );
          })}
        </CardGroup>
      </Container>
    </section>
    
  );

}

export default CharacterContainer;