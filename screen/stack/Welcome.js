import {Image, StyleSheet, Text, View} from 'react-native';
import {useEffect} from 'react';

const Welcome = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Introduction');
    }, 1500);
  }, []);

  return (
    <Image
      style={{width: '100%', height: '100%'}}
      source={require('../../assets/image/loader/loader.png')}
    />
  );
};

export default Welcome;

const styles = StyleSheet.create({});
