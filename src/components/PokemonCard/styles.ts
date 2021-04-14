import styled from 'styled-components/native';

export const Container = styled.View`
  height: 120px;
  background-color: #f0f0f0;
  border-radius: 10;
  margin-bottom: 20px;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PokemonName = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const PokemonImage = styled.Image`
  width: 140px;
  height: 140px;
`;
