import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MenuUrl } from './enums/menuUrl';
import Home from './modules/home';
import Login from './modules/login';
import Splash from './modules/splash';
import CreateUser from './modules/createUser';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={MenuUrl.SPLASH} component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name={MenuUrl.LOGIN} component={Login} options={{ headerShown: false }} />
        <Stack.Screen name={MenuUrl.CREATE_USER} component={CreateUser} options={{ title: MenuUrl.CREATE_USER}} />
        <Stack.Screen name={MenuUrl.HOME} component={Home} options={{ title: 'Home' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
