import {StoreProvider} from './store/context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  MoodLoading,
  SelectedMoodTask,
  TrackMood,
  Welcome,
} from './screen/stack';
import TabMenuNav from './screen/menu/TabMenuNav';
import Introduction from './screen/stack/Introduction';
import {
  pauseBackgroundMusic,
  playBackgroundMusic,
  setupPlayer,
} from './component/soundSetUp/SetSound';
import {useAppContext} from './store/context';
import {useState, useEffect} from 'react';
import { AppState } from 'react-native';

const Stack = createNativeStackNavigator();

function App() {
  const [isPlayMusic, setIsPlayMusic] = useState(false);
  const {isMusicEnable} = useAppContext();

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (nextAppState === 'active' && isPlayMusic && isMusicEnable) {
        playBackgroundMusic();
      } else if (nextAppState === 'inactive' || nextAppState === 'background') {
        pauseBackgroundMusic();
      }
    });

    const initMusic = async () => {
      await setupPlayer();
      if (isMusicEnable) {
        await playBackgroundMusic();
        setIsPlayMusic(true);
      }
    };
    initMusic();

    return () => {
      subscription.remove();
      pauseBackgroundMusic();
    };
  }, [isMusicEnable]);

  return (
    <StoreProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Introduction" component={Introduction} />
          <Stack.Screen name="TabMenuNav" component={TabMenuNav} />
          <Stack.Screen name="MoodLoading" component={MoodLoading} />
          <Stack.Screen name="SelectedMoodTask" component={SelectedMoodTask} />
          <Stack.Screen name="TrackMood" component={TrackMood} />
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
}

export default App;
