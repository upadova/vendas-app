import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MenuUrl } from './enums/menuUrl';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icons } from './shared/icon/icon';
import { theme } from './shared/themes/themes';
import Home from './modules/home';
import Login from './modules/login';
import Splash from './modules/splash';
import CreateUser from './modules/createUser';
import Orders from './modules/Orders';
import Profile from './modules/profile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName: string;

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Orders':
              iconName = 'cart';
              break;
            default:
              iconName = 'profile';
              break;
          }
          // You can return any component that you like here!
          return <Icons name={iconName} color={color} size={20} />;
        },
        tabBarActiveTintColor: theme.colors.mainTheme.error,
        tabBarInactiveTintColor: theme.colors.grayTheme.gary100,
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{ title: 'Pedidos', headerShown: false }}
      />
      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{ title: 'Perfil', headerShown: false }}
      />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={MenuUrl.SPLASH} component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name={MenuUrl.LOGIN} component={Login} options={{ headerShown: false }} />
        <Stack.Screen
          name={MenuUrl.CREATE_USER}
          component={CreateUser}
          options={{ title: MenuUrl.CREATE_USER }}
        />
        <Stack.Screen
          name={MenuUrl.HOME}
          component={TabNavigation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
