import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Loader from '../../components/Loader';
import * as Progress from 'react-native-progress';
import Toast from 'react-native-toast-message';
import {SafeAreaView, View} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import api from '../../services/api';
import {
  Container,
  Header,
  PokemonName,
  PokemonImage,
  PokemonID,
  PokemonData,
  PokemonStatus,
  PokemonIngame,
  PokemonImagesView,
  PokemonIngameView,
  Types,
  PokemonType,
  StatView,
  StatName,
} from './styles';
import {padToThree} from '../../utils';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';

interface Pokemon {
  id: number;
  name: string;
  url: string;
  moves: Array<MoveProps>;
  stats: Array<StatsProps>;
  sprites: {
    back_default: string;
    front_default: string;
    other: {
      ['official-artwork']: {
        front_default: string;
      };
    };
  };
  types: Array<TypesProps>;
}

interface TypesProps {
  type: {
    name: string;
  };
}

interface StatsProps {
  base_state: number;
  stat: {
    name: string;
  };
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
  const navigation = useNavigation();

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
    }
  }

  console.log(routeParams);

  return (
    pokemon.hasOwnProperty('id') && (
      <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
        {isLoading && <Loader />}
        <ScrollView>
          <Container>
            <Header>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="arrow-left" size={24} color="#000" />
              </TouchableOpacity>
              <PokemonName>{routeParams.name.toUpperCase()}</PokemonName>
            </Header>
            <PokemonID>#{padToThree(pokemon.id)}</PokemonID>

            <PokemonImagesView>
              <PokemonImage
                source={{
                  uri: pokemon.sprites.other['official-artwork'].front_default,
                }}
              />

              <PokemonIngameView>
                {pokemon.sprites ? (
                  <PokemonIngame
                    source={{uri: pokemon.sprites.front_default}}
                  />
                ) : null}
                {pokemon.sprites ? (
                  <PokemonIngame source={{uri: pokemon.sprites.back_default}} />
                ) : null}
              </PokemonIngameView>
            </PokemonImagesView>

            <PokemonData>
              <Types>
                {pokemon.types.map(t => {
                  return <PokemonType>{t.type.name.toUpperCase()}</PokemonType>;
                })}
              </Types>
              <PokemonStatus>
                <FlatList
                  data={pokemon.stats}
                  keyExtractor={stat => stat.stat.name}
                  renderItem={({item}) => {
                    return (
                      <StatView>
                        <StatName>{item.stat.name.toUpperCase()}:</StatName>
                        <View>
                          <Progress.Bar
                            progress={item.base_stat / 100}
                            width={200}
                            animated
                            height={20}
                            borderRadius={10}
                            color="#3fca95"
                          />
                        </View>
                      </StatView>
                    );
                  }}
                />
              </PokemonStatus>
            </PokemonData>

            {/* <MoveList>Golpes:</MoveList>
          <FlatList
            data={pokemon.moves}
            keyExtractor={move => move.name}
            renderItem={({item}) => {
              return <Text>{item.move.name}</Text>;
            }}
          /> */}
          </Container>
        </ScrollView>
      </SafeAreaView>
    )
  );
}
