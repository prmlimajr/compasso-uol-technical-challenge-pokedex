import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Container, SearchArea, SearchField} from './styles';

export default function Searchbar() {
  const [search, setSearch] = useState('');

  return (
    <Container>
      <SearchArea>
        <SearchField
          placeholder="Pesquisar"
          value={search}
          onChangeText={setSearch}
        />
        <TouchableOpacity>
          <Icon name="search" size={24} color="#6d6d6d" />
        </TouchableOpacity>
      </SearchArea>
    </Container>
  );
}
