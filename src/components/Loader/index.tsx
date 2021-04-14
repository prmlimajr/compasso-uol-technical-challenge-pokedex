import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Container, LoadingMessage} from './styles';

export default function Loader() {
  return (
    <Container>
      <ActivityIndicator size="large" color="red" />
      <LoadingMessage>Carregando...</LoadingMessage>
    </Container>
  );
}
