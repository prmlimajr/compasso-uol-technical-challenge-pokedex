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
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    try {
      console.log('fetch');
      setIsLoading(true);
      getPokemons();
    } catch (err) {
      Alert.alert('Falha na requisição. :(');
    } finally {
      setIsLoading(false);
    }

    async function getPokemons() {
      const response = await api.get(
        offset ? `/?offset=${offset}&limit=20` : '/',
      );

      setNextPage(response.data.next);
      setPreviousPage(response.data.previous);

      const pokemons = response.data.results;
      setPokemonList(pokemons);
    }
  }, [offset]);

  const handlePreviousPage = async () => {
    if (!previousPage) {
      return;
    }

    setOffset(offset => offset - 20);
  };

  const handleNextPage = async () => {
    if (!nextPage) {
      return;
    }

    setOffset(offset => offset + 20);
  };

  console.log(offset);
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
