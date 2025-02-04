import {StoreProvider} from './store/context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Welcome} from './screen/stack';
import TabMenuNav from './screen/menu/TabMenuNav';
import Introduction from './screen/stack/Introduction';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <StoreProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Introduction" component={Introduction} />
          <Stack.Screen name="TabMenuNav" component={TabMenuNav} />
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
}

export default App;
