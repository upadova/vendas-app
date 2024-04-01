// import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import Login from './modules/login';
import store from './store';
import GlobalModal from './shared/components/modal/globalModal/globalModal';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './modules/home';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <GlobalModal />
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{headerShown: false }}/>
          <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
