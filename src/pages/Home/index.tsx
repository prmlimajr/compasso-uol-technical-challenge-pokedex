import React, {useEffect, useState} from 'react';
import {View, Text, Image, SafeAreaView, FlatList} from 'react-native';
import api from '../../services/api';
import Searchbar from '../../components/Searchbar';
import {Container, TitleAndHeaderText, Title, HeaderText} from './styles';

interface Result {
  name: string;
  url: string;
}
interface PokemonListProps {
  count: number;
  next?: string;
  previous?: string;
  results: Result[];
}
interface PokemonProps {
  name: string;
  url: string;
  image: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png`;
}

export default function Home() {
  const [pokemonList, setPokemonList] = useState<PokemonProps[]>([]);

  useEffect(() => {
    async function getPokemons() {
      const response = await api.get('/');

      setPokemonList(response.data.results);
    }

    getPokemons();
  }, []);

  function PokemonCard(item: PokemonProps) {
    const {name, url} = item;

    return (
      <View>
        {/* <Image /> */}
        <Text>{name}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <Container>
        <TitleAndHeaderText>
          <Title>Pokedex</Title>
          <HeaderText>Tenha todos os Pokemons ao seu alcance.</HeaderText>
        </TitleAndHeaderText>

        <Searchbar />

        <FlatList
          data={pokemonList}
          keyExtractor={pokemon => pokemon.name}
          renderItem={({item}) => {
            return (
              <View>
                {/* <Image /> */}
                <Text>{item.name}</Text>
              </View>
            );
          }}
        />
      </Container>
    </SafeAreaView>
  );
}
