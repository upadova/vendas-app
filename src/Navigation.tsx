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
import Product from './modules/product';
import Cart from './modules/cart';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: theme.colors.neutralTheme.white,
        tabBarInactiveTintColor: theme.colors.grayTheme.gray80,
        tabBarLabelStyle: {
          marginBottom: 8,
        },
        tabBarStyle: {
          height: 52,
          padding: 8,
          backgroundColor: theme.colors.purpleTheme.purple80,
        },
        tabBarIcon: ({ color }) => {
          let iconName: string;

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Carrinho':
              iconName = 'cart';
              break;
            case 'Orders':
              iconName = 'books';
              break;
            default:
              iconName = 'profile';
              break;
          }
          return <Icons name={iconName} color={color} size={20} />;
        },
      })}
    >
      <Tab.Screen name={MenuUrl.HOME} component={Home} options={{ headerShown: false }} />
      <Tab.Screen name={MenuUrl.CART} component={Cart} options={{ headerShown: false }} />
      <Tab.Screen
        name={MenuUrl.ORDERS}
        component={Orders}
        options={{ title: 'Pedidos', headerShown: false }}
      />
      <Tab.Screen
        name={MenuUrl.PERFIL}
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
        <Stack.Screen name={MenuUrl.PRODUCT} component={Product} />
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
