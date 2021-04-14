import React from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';

export function Splash() {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: '#e3342f'}}>
      <LottieView
        source={require('./assets/splash.json')}
        autoPlay
        loop={false}
        onAnimationFinish={() => navigation.navigate('Início')}
      />
    </View>
  );
}
