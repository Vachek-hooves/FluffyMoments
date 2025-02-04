import React from 'react';
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
import LinearGradient from 'react-native-linear-gradient';

const SelectedMoodTask = ({route}) => {
  const selectedMoodId = route.params?.selectedMoodId;
  const selectedAnimal = mood.find(animal => animal.id === selectedMoodId);

  return (
    <MainLayout>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image source={selectedAnimal?.image} style={styles.animalImage} />
          </View>

          <Text style={styles.title}>
            {`Fluffy ${selectedAnimal?.name?.split(' ')[1]} (${
              selectedAnimal?.power
            })`}
          </Text>

          <View style={styles.progressBar}>
            <View style={styles.progress} />
          </View>

          <View style={styles.taskCard}>
            <View style={styles.timerContainer}>
              <Image
                source={require('../../assets/image/icons/timer.png')}
                style={styles.timerIcon}
              />
              <Text style={styles.timerText}>05:00</Text>
            </View>
            <Text style={styles.taskTitle}>
              Daily Task for Self-Improvement:
            </Text>
            <Text style={styles.taskDescription}>
              {selectedAnimal?.dailyTask}
            </Text>
          </View>

          <View style={styles.buttonGroup}>
            <Pressable
              style={({pressed}) => [
                styles.startButton,
                {transform: [{scale: pressed ? 0.95 : 1}]},
              ]}>
              <LinearGradient
                colors={['#FF64FF', '#D45579']}
                style={styles.gradientButton}>
                <Text style={styles.buttonText}>Start task</Text>
              </LinearGradient>
            </Pressable>

            <View style={styles.iconButtons}>
              <Pressable style={styles.iconButton}>
                <Image
                  source={require('../../assets/image/icons/bookmark.png')}
                  style={styles.icon}
                />
              </Pressable>
              <Pressable style={styles.iconButton}>
                <Image
                  source={require('../../assets/image/icons/share.png')}
                  style={styles.icon}
                />
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default SelectedMoodTask;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  imageContainer: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  animalImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    color: '#80213C',
    textAlign: 'center',
    marginVertical: 20,
  },
  progressBar: {
    width: '100%',
    height: 8,
    backgroundColor: '#FFF',
    borderRadius: 4,
    marginVertical: 10,
  },
  progress: {
    width: '50%',
    height: '100%',
    backgroundColor: '#FF64FF',
    borderRadius: 4,
  },
  timerContainer: {
    flexDirection: 'row',
    
    backgroundColor: '#FFC1FF',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginVertical: 10,
    width: '30%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerIcon: {
    width: 30,
    height: 30,
    marginRight: 8,
  },
  timerText: {
    color: '#80213C',
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskCard: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 20,
    width: '100%',
    marginVertical: 20,
    borderWidth: 1,
    borderColor: '#822E46',
  },
  taskTitle: {
    fontSize: 18,
    color: '#80213C',
    marginBottom: 10,
    alignSelf: 'center',
  },
  taskDescription: {
    fontSize: 18,
    color: '#666',
    lineHeight: 24,
    textAlign: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  startButton: {
    flex: 1,
    marginRight: 10,
  },
  gradientButton: {
    borderRadius: 25,
    alignItems: 'center',
    borderRadius: 32,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 24,
  },
  iconButtons: {
    flexDirection: 'row',
  },
  iconButton: {
    width: 65,
    height: 65,
    backgroundColor: '#FFF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  icon: {
    width: 32,
    height: 32,
  },
});
