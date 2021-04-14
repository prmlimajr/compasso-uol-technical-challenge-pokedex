import React, {useState} from 'react';
import api from '../../services/api';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Container, SearchArea, SearchField} from './styles';
import {Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Loader from '../Loader';

export default function Searchbar() {
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigation = useNavigation();

  const handleSearch = async () => {
    try {
      setIsLoading(true);

      const pokemon = await api.get(`/${search.toLowerCase()}`);

      // navigation.navigate('Detalhe', {name: pokemon?.name, url});
    } catch (err) {
      Alert.alert('Falha na requisição! :(');
    } finally {
      setIsLoading(false);
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
