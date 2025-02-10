import {Image, StyleSheet, Text, View, ImageBackground} from 'react-native';
import {useEffect} from 'react';

const Welcome = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Introduction');
    }, 1500);
  }, []);

  return (
    <ImageBackground
      style={{width: '100%', height: '100%'}}
      source={require('../../assets/image/bg/bg.png')}>
      <Image
        source={require('../../assets/image/logo/logo.png')}
        style={{marginTop: '20%'}}
      />
    </ImageBackground>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
