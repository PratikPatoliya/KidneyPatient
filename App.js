// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screen/Login';
import NewUserPage from './screen/NewUserPage';
import Activities from './screen/Activities';
import Profilepic from './screen/Profilepic';
import Diabetes from './screen/Diabetes';
import Exercise from './screen/Exercise';
import ExerciseOftenPage from './screen/ExerciseOftenPage';
import ExerciseTime from './screen/ExerciseTime';
import WaterInWholDay from './screen/WaterInWholDay';
import Meal from './screen/Meal';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Home from './screen/Home';
import ForgotPassword from './screen/ForgotPassword';
import Otp from './screen/Otp';
import PasswordChangeScreen from './screen/PasswordChangeScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="fPassword" component={ForgotPassword} options={{ title: 'Forgot Password' }}/>
          <Stack.Screen name="Otp" component={Otp} options={{ title: 'Otp Screen' }}/>
          <Stack.Screen name="PCS" component={PasswordChangeScreen} options={{ title: 'Password Change' }}/>
          <Stack.Screen name="NewUser" component={NewUserPage} />
          <Stack.Screen name="Activities" component={Activities} />
          <Stack.Screen name="ProfilePicture" component={Profilepic} />
          <Stack.Screen name="Diabetes" component={Diabetes} />
          <Stack.Screen name="Exercise" component={Exercise} />
          <Stack.Screen name="ExerciseOften" component={ExerciseOftenPage} />
          <Stack.Screen name="ExerciseTime" component={ExerciseTime} />
          <Stack.Screen name="WaterInWholDay" component={WaterInWholDay} />
          <Stack.Screen name="Meal" component={Meal} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;