import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  SafeAreaView,ScrollView
} from 'react-native';
import {useState} from 'react';
import MainLayout from '../../component/Loyout/MainLayout';

const pages = [
  {
    title: 'Welcome to the app',
    description: 'This is the first slide of the introduction',
  },
];

const Introduction = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  return (
    <MainLayout>
      {/* <SafeAreaView style={styles.container}> */}
        <ScrollView
          // style={styles.container}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{flex: 1,paddingTop:40}}>
          <Image
            source={require('../../assets/image/logo/logo.png')}
            style={styles.logo}
          />
          <View style={styles.content}>

          </View>
        </ScrollView>
      {/* </SafeAreaView> */}
    </MainLayout>
  );
};

export default Introduction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFC1FF',
    borderRadius: 20,
  },

});
