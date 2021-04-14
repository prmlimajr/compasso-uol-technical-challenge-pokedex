import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Container, PokemonName, PokemonImage} from './styles';
import {getPokemonImage} from '../../utils';

interface Pokemon {
  name: string;
  url: string;
}

export default function PokemonCard({name, url}: Pokemon) {
  return (
    <TouchableOpacity>
      <Container>
        <PokemonName>{name}</PokemonName>
        <PokemonImage source={getPokemonImage(url)} />
      </Container>
    </TouchableOpacity>
  );
}
