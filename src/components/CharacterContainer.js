import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import CharacterCard from './CharacterCard'

const CharacterContainer = (props) => {
  return (
    <ListGroup>
      <ListGroupItem>Cras justo odio</ListGroupItem>
      <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem>Morbi leo risus</ListGroupItem>
      <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
      <ListGroupItem>Vestibulum at eros</ListGroupItem>
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
    </ListGroup>
  );

}

export default CharacterContainer;