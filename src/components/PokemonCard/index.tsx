import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Container, PokemonName, PokemonImage} from './styles';
import {getPokemonImage} from '../../utils';

interface Pokemon {
  name: string;
  url: string;
}

export default function PokemonCard({name, url}: Pokemon) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detalhe', {name, url})}>
      <Container>
        <PokemonName>{name}</PokemonName>
        <PokemonImage source={getPokemonImage(url)} />
      </Container>
    </TouchableOpacity>
  );
}
