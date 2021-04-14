import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #f0f0f0;
  border-radius: 10;
  padding: 0 20px;
`;

export const SearchArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SearchIcon = styled.Image`
  width: 30px;
  height: 30px;
  z-index: 10;
`;

export const SearchField = styled.TextInput`
  width: 90%;
`;
