import React, {useState} from 'react';
import api from '../../services/api';
import {useRoute, useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Container, SearchArea, SearchField} from './styles';
import Toast from 'react-native-toast-message';
import {SafeAreaView} from 'react-native-safe-area-context';
import Loader from '../Loader';

interface Pokemon {
  name: string;
  url: string;
}

export default function Searchbar() {
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pokemon, setPokemon] = useState({} as Pokemon);

  const navigation = useNavigation();

  const route = useRoute();
  const routeParams = route.params as Params;

  const handleSearch = async () => {
    try {
      setIsLoading(true);

      const pokemonResponse: Pokemon = await api.get(
        `/${search.toLowerCase()}`,
      );

      setPokemon(pokemonResponse);

      navigation.navigate('Detalhe', {
        name: search.toLowerCase(),
        url: `https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`,
      });
    } catch (err) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Falha na requisição! :(',
        text2: 'Tente novamente.',
        visibilityTime: 4000,
        autoHide: true,
      });
    } finally {
      setIsLoading(false);
      setSearch('');
    }
  };

  return (
    <SafeAreaView>
      {isLoading && <Loader />}
      <Container>
        <SearchArea>
          <SearchField
            placeholder="Pesquisar"
            value={search}
            onChangeText={setSearch}
          />
          <TouchableOpacity onPress={handleSearch}>
            <Icon name="search" size={24} color="#6d6d6d" />
          </TouchableOpacity>
        </SearchArea>
      </Container>
    </SafeAreaView>
  );
}
