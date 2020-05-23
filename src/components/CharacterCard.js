import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const CharacterCard = (props) => {
  return (
    <Card>
      <CardImg top width="100%" src="https://reactstrap.github.io/assets/318x180.svg" alt="Card image cap" />
      <CardBody>
        <CardTitle>{props.name}</CardTitle>
        <CardSubtitle>{props.age}</CardSubtitle>
        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        <CardText>{props.key}</CardText>
        <Button>{props.ability}</Button>
      </CardBody>
    </Card>
  );
};

export default CharacterCard;