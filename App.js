import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useState} from 'react';
import HomeScreen from './src/screens/HomeScreen';
import SignInScreen from './src/screens/SignInScreen';
import SplashScreen from './src/screens/SplashScreen';

const App = () => {
  const Stack = createNativeStackNavigator();
  const initialState = {
    isLoading: true,
    userToken: null,
  };
  const [state, setState] = useState(initialState);

  const loaded = data => {
    if (data === '') {
      setState(prev => {
        return {...prev, isLoading: false};
      });
    } else {
      setState(prev => {
        return {isLoading: false, userToken: data};
      });
    }
  };

  const signIn = data => {
    setState(prev => {
      return {...prev, userToken: data};
    });
  };

  const signOut = () => {
    setState(prev => {
      return {isLoading: true, userToken: null};
    });
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {state.isLoading ? (
          <Stack.Screen name="Splash">
            {props => <SplashScreen {...props} loaded={loaded} />}
          </Stack.Screen>
        ) : state.userToken == null ? (
          // Usuário não autenticado
          <Stack.Screen name="SignIn">
            {props => <SignInScreen {...props} sigIn={signIn} />}
          </Stack.Screen>
        ) : (
          // Usuário autenticado
          <Stack.Screen name="Home">
            {props => <HomeScreen {...props} signOut={signOut} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
