import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import MainLayout from '../../component/Loyout/MainLayout';
import {mood} from '../../data/mood';

const Mood = () => {
  const [selectedMood, setSelectedMood] = useState(null);

  return (
    <MainLayout>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../../assets/image/appName/appName.png')}
            style={styles.appName}
          />
        </View>
        <Text style={styles.title}>Choose Your Fluffy Friend</Text>
        <Text style={styles.subtitle}>
          Select a companion to guide your day's journey
        </Text>
        <View style={styles.grid}>
          {mood.map((animal) => (
            <Pressable
              key={animal.id}
              onPress={() => setSelectedMood(animal.id)}
              style={({pressed}) => [
                styles.animalCard,
                selectedMood === animal.id ? styles.selectedCard : styles.normalCard,
                {transform: [{scale: pressed ? 0.95 : 1}]},
              ]}>
              <View style={styles.imageContainer}>
                <Image 
                  source={animal.image}
                  style={styles.animalImage} 
                />
              </View>
              <Text style={styles.animalName}>{animal.name}</Text>
              <Text style={styles.animalTrait}>{animal.trait}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default Mood;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#80213C',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 20,
  },
  animalCard: {
    width: '47%',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
  },
  normalCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#822E46',
  },
  selectedCard: {
    backgroundColor: '#FFC1FF',
    borderWidth: 3,
    borderColor: '#822E46',
  },
  imageContainer: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  animalImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  animalName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#80213C',
    marginBottom: 5,
  },
  animalTrait: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  appName: {
    width: '100%',
    resizeMode: 'contain',
  },
});
