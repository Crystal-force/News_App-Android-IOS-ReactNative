import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import CiudadNewsScreen from './src/screens/CiudadNewsScreen';
import AddNewsScreen from './src/screens/AddNewsScreen';
import RegisterVerifyScreen from './src/screens/RegisterVerifyScreen';
import NewsViewScreen from './src/screens/NewsViewScreen';
import PublishVerifyScreen from './src/screens/PublishVerifyScreen';
import HelpScreen from './src/screens/HelpScreen';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        // headerShown: false
      }}>
        <Stack.Screen name="Login" component={LoginScreen}  options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Register Verify" component={RegisterVerifyScreen} options={{headerShown: false}}/>
        <Stack.Screen name="News List" component={CiudadNewsScreen} options={{headerShown: false}}/>
        <Stack.Screen name="News Detail" component={NewsViewScreen} />
        <Stack.Screen name="Add News" component={AddNewsScreen} />
        <Stack.Screen name="Pubish News" component={PublishVerifyScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Help" component={HelpScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;