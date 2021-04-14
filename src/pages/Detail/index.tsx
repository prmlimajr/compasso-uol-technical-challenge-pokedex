import React, {useState, useEffect} from 'react';
import Loader from '../../components/Loader';
import {SafeAreaView, Alert} from 'react-native';
import {useRoute} from '@react-navigation/native';
import api from '../../services/api';
import {Container} from './styles';

interface Pokemon {
  name: string;
  url: string;
}

interface Params {
  name: string;
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
        <PokemonName>
          <PokemonImage />
        </PokemonName>
      </Container>
    </SafeAreaView>
  );
}
