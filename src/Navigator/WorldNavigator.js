import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WorldHome from '../Container/WorldHome';
import WorldCharts from '../Container/WorldCharts';

const Stack = createStackNavigator();

const WorldNavigator = () => {
    return (
        <Stack.Navigator 
            initialRouteName="Home" 
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen 
                name="Home"
                component={WorldHome} />
            <Stack.Screen 
                name="Charts" 
                component={WorldCharts} />
        </Stack.Navigator>
    );
}

export default WorldNavigator;
