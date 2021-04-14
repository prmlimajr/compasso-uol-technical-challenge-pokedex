import React, {useEffect, useState} from 'react';
import {View, Text, Image, SafeAreaView, FlatList, Alert} from 'react-native';
import api from '../../services/api';
import Searchbar from '../../components/Searchbar';
import PokemonCard from '../../components/PokemonCard';
import {
  Container,
  TitleAndHeaderText,
  Title,
  HeaderText,
  ListContainer,
} from './styles';

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
  image: string;
}

export default function Home() {
  const [pokemonList, setPokemonList] = useState<PokemonProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    try {
      setIsLoading(true);
      getPokemons();
    } catch (err) {
      Alert.alert('Falha na requisição. :(');
    } finally {
      setIsLoading(false);
    }

    async function getPokemons() {
      const response = await api.get('/');

      const pokemons = response.data.results.map(pokemon => {
        return {
          name: pokemon.name,
          url: pokemon.url,
        };
      });

      setPokemonList(pokemons);
    }
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <Container>
        <TitleAndHeaderText>
          <Title>Pokedex</Title>
          <HeaderText>Tenha todos os Pokemons ao seu alcance.</HeaderText>
        </TitleAndHeaderText>

        <Searchbar />

        <ListContainer>
          <FlatList
            data={pokemonList}
            keyExtractor={pokemon => pokemon.name}
            renderItem={({item}) => {
              return (
                <PokemonCard name={item.name.toUpperCase()} url={item.url} />
              );
            }}
          />
        </ListContainer>
      </Container>
    </SafeAreaView>
  );
}
