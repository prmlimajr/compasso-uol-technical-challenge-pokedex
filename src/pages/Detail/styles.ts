import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 18px;
  background-color: #fff;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PokemonName = styled.Text`
  font-weight: bold;
  font-size: 30px;
  margin-left: 10px;
`;

export const PokemonImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const MoveList = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const PokemonID = styled.Text``;

export const PokemonData = styled.View`
  margin: 20px 0;
`;

export const PokemonStatus = styled.View`
  flex-direction: row;
`;

export const Stat = styled.View`
  font-weight: bold;
`;

export const PokemonIngame = styled.Image`
  width: 140px;
  height: 140px;
`;

export const PokemonImagesView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const PokemonIngameView = styled.View`
  justify-content: center;
  align-items: center;
`;

export const StatView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const StatName = styled.Text`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Types = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const PokemonType = styled.Text`
  margin-right: 10px;
  padding: 5px 10px;
  border-radius: 20px;
  border: 2px solid #f0f0f0;
  color: #c4c4c4;
`;
