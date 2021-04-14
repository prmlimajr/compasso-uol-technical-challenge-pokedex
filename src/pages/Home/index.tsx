import React from 'react';
import Searchbar from '../../components/Searchbar';
import {Container, Title, HeaderText} from './styles';

export default function Home() {
  return (
    <Container>
      <Title>Pokedex</Title>
      <HeaderText>Tenha todos os Pokemons ao seu alcance.</HeaderText>

      <Searchbar />
    </Container>
  );
}
