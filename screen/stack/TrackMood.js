import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import MainLayout from '../../component/Loyout/MainLayout';
import LinearGradient from 'react-native-linear-gradient';

const TrackMood = ({route, navigation}) => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [description, setDescription] = useState('');

  // Get data passed from SelectedMoodTask
  const {selectedAnimal, completedAt, taskCompleted, taskDuration} = route.params || {};

  const moods = [
    {id: 'negative', icon: require('../../assets/image/icons/thumbsDown.png')},
    {id: 'neutral', icon: require('../../assets/image/icons/neutral.png')},
    {id: 'positive', icon: require('../../assets/image/icons/thumbsUp.png')},
  ];

  const handleSave = () => {
    const moodData = {
      animal: selectedAnimal,
      completedAt: completedAt,
      taskCompleted: taskCompleted,
      taskDuration: taskDuration,
      mood: selectedMood,
      description: description,
    };
    
    console.log('Saving mood data:', moodData);
    // TODO: Save mood data
    navigation.replace('TabMenuNav', {screen: 'Mood'});
  };

  return (
    <MainLayout>
      <View style={styles.container}>
        <Image
          source={require('../../assets/image/logo/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Finish</Text>
        <Text style={styles.subtitle}>Track your mood</Text>

        <View style={styles.moodSelector}>
          {moods.map(mood => (
            <Pressable
              key={mood.id}
              onPress={() => setSelectedMood(mood.id)}
              style={[
                styles.moodButton,
                selectedMood === mood.id && styles.selectedMoodButton,
              ]}>
              <Image source={mood.icon} style={styles.moodIcon} />
            </Pressable>
          ))}
        </View>

        <TextInput
          style={styles.input}
          placeholder="describe your emotions(optional)"
          value={description}
          onChangeText={setDescription}
          multiline
          placeholderTextColor="#666"
        />

        <Pressable
          onPress={handleSave}
          style={({pressed}) => [
            styles.pressable,
            {transform: [{scale: pressed ? 0.95 : 1}]},
          ]}>
          <LinearGradient
            colors={['#FF64FF', '#D45579']}
            style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Save and exit</Text>
          </LinearGradient>
        </Pressable>
      </View>
    </MainLayout>
  );
};

export default TrackMood;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    paddingTop: 40,
  },
  logo: {
    width: '100%',
    height: 350,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#80213C',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#80213C',
    marginBottom: 30,
  },
  moodSelector: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 30,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 30,
  },
  moodButton: {
    padding: 10,
    borderRadius: 20,
  },
  selectedMoodButton: {
    backgroundColor: '#FFC1FF',
  },
  moodIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  input: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 20,
    marginBottom: 30,
    color: '#666',
    fontSize: 16,
  },
  pressable: {
    width: '100%',
  },
  saveButton: {
    borderRadius: 30,
    alignItems: 'center',
},
saveButtonText: {
      padding: 20,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
