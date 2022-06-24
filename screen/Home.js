import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from './HomePage';
import { Button, View } from 'react-native';
import Password from './Password';
import CustomSidebarMenu from './CustomSidebarMenu';
import App from '../App';

const Drawer = createDrawerNavigator();


const Home = () => {
    return (
        <NavigationContainer independent={true}>
            <Drawer.Navigator initialRouteName='Home' drawerContent={(props) => <CustomSidebarMenu {...props} />} >
                <Drawer.Screen name="Home" component={HomePage} /* options={{ headerShown: false }} */ />
                <Drawer.Screen name="Password" component={Password}  />
                <Drawer.Screen name="App" component={App}  options={{ headerShown: false }}  />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default Home;
