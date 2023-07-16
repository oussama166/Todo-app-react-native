import { Provider } from 'react-redux';
import { store } from './store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import HomeScreens from './Home/HomeScreens';
import LogChoices from './Home/LogChoices';
import Registration from './Connection/Registration';
import Connection from './Connection/Connection';



export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          {/* Home Screens */}
          <Stack.Screen
            name="Home"
            component={HomeScreens}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Log"
            component={LogChoices}
            options={{
              headerShown: false,
            }}
          />
          {/* Registrations screens */}
          <Stack.Screen
            name="Login"
            component={Connection}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Registration"
            component={Registration}
            options={{
              headerShown: false,
            }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider >
  );
}

