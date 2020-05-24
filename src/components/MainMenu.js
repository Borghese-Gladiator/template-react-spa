import React, { Component } from "react";
import { Container } from "reactstrap";
import Filter from "./Filter";
import CardInfo from "./CardInfo";
import { CARDS } from "../non-components/cards";

class MainMenu extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      cards: CARDS,
      selectedCard: null,
      cardFilter: null
    };
  }
  cardSelect(cardId) {
    this.setState({ selectedCard: cardId });
  }
 
  cardFilterSelect(filterName) {
    this.setState({ cardFilter: filterName });
  }
  render() {
    return (
      <Container>
        <h1 style={{textAlign: "center"}}>Character List</h1>
        <Filter
          cards={this.state.cards}
          cardSelect={cardId => this.cardSelect(cardId)}
          filter={this.state.cardFilter}
          cardFilterSelect={filterName => this.cardFilterSelect(filterName)}
        />
        <CardInfo
          card={
            this.state.cards.filter(
              card => card.id === this.state.selectedCard
            )[0]
          }
        />
      </Container>
    );
  }
}
 
export default MainMenu;