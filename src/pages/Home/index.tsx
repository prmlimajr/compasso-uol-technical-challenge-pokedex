import React, {useEffect, useState} from 'react';
import Loader from '../../components/Loader';
import {SafeAreaView, FlatList, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../../services/api';
import Searchbar from '../../components/Searchbar';
import PokemonCard from '../../components/PokemonCard';
import {
  Container,
  TitleAndHeaderText,
  Title,
  HeaderText,
  ListContainer,
  NavigationButtons,
  PreviousPage,
  NextPage,
} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

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
  const [nextPage, setNextPage] = useState('');
  const [previousPage, setPreviousPage] = useState('');

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

      setNextPage(response.data.next);
      setPreviousPage(response.data.previous);

      const pokemons = response.data.results;
      setPokemonList(pokemons);
    }
  }, []);

  const handlePreviousPage = async () => {
    try {
      setIsLoading(true);

      if (!previousPage) {
        return;
      }

      const data = await fetch(previousPage);
      const response = await data.json();

      console.log(response);
    } catch (err) {
      Alert.alert('Falha na requisição! :(');
    } finally {
      setIsLoading(false);
    }
  };

  const handleNextPage = async () => {
    try {
      setIsLoading(true);

      if (!nextPage) {
        return;
      }
    } catch (err) {
      Alert.alert('Falha na requisição! :(');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      {isLoading && <Loader />}
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
            // onEndReached={loadNextPage}
            renderItem={({item}) => {
              return (
                <PokemonCard name={item.name.toUpperCase()} url={item.url} />
              );
            }}
          />
        </ListContainer>

        <NavigationButtons>
          <PreviousPage>
            <TouchableOpacity onPress={handlePreviousPage}>
              <Icon
                name="arrow-circle-o-left"
                size={60}
                color={previousPage ? 'tomato' : '#f0f0f0'}
              />
            </TouchableOpacity>
          </PreviousPage>
          <NextPage>
            <TouchableOpacity onPress={handleNextPage}>
              <Icon
                name="arrow-circle-o-right"
                size={60}
                color={nextPage ? 'tomato' : '#f0f0f0'}
              />
            </TouchableOpacity>
          </NextPage>
        </NavigationButtons>
      </Container>
    </SafeAreaView>
  );
}
