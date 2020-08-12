import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import KoreaCorona from './src/Container/KoreaCorona';
import WorldCorona from './src/Container/WorldCorona';
import Home from './src/Component/Home';
import Icon from 'react-native-vector-icons/Fontisto';
import Setting from './src/Component/Setting';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/SplashScreen';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const AppContainers = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Splash" 
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="App" component={App} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const App = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" size={size} color={color} />
                    ),
                    tabBarLabel: '홈'}}/>
            <Tab.Screen 
                name="국내현황" 
                component={KoreaCorona} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="wink" size={size} color={color} />
                    ),
                    tabBarLabel: '국내현황'}}
                />
            <Tab.Screen 
                name="세계현황" 
                component={WorldCorona} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="world-o" size={size} color={color} />
                    ),
                    tabBarLabel: '세계현황'}}/>
            <Tab.Screen 
                name="설정" 
                component={Setting}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="move-h-a" size={size} color={color} />
                    ),
                    tabBarLabel: '설정'}} />
            
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

export default AppContainers;