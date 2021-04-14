import React, {useState, useEffect} from 'react';
import Loader from '../../components/Loader';
import {SafeAreaView, Alert, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
import api from '../../services/api';
import {Container, PokemonName, PokemonImage} from './styles';
import {getPokemonImage} from '../../utils';
import {FlatList} from 'react-native-gesture-handler';

interface Pokemon {
  name: string;
  url: string;
  moves: Array<MoveProps>;
}

interface MoveProps {
  name: string;
}

interface Params {
  name: string;
  url: string;
}

export default function Detail({name, url}: Pokemon) {
  const [pokemon, setPokemon] = useState({} as Pokemon);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const route = useRoute();
  const routeParams = route.params as Params;

  useEffect(() => {
    getPokemonData();
  }, []);

  async function getPokemonData() {
    try {
      setIsLoading(true);
      const response = await api.get(`/${routeParams.name.toLowerCase()}`);

      setPokemon(response.data);
    } catch (err) {
      Alert.alert('Falha na requisição! :(');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      {isLoading && <Loader />}
      <Container>
        <PokemonName>{routeParams.name}</PokemonName>
        <PokemonImage source={getPokemonImage(routeParams.url)} />

        <FlatList
          data={pokemon.moves}
          keyExtractor={move => move.name}
          renderItem={({item}) => {
            return <Text>{item.name}</Text>;
          }}
        />
      </Container>
    </SafeAreaView>
  );
}
