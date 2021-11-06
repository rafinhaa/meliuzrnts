import React from "react";
import {View, Text} from "react-native";


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Home from '../../Screens/Home';
import Contact from "../../Screens/Contact";
import List from "../../Screens/List";

const Tabs = createBottomTabNavigator();

const NavigationTabs = () => {
    return (
        <Tabs.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'red',
            }}
        >
            <Tabs.Screen 
                name="Home" 
                component={Home} 
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({color,size}) => (
                        <FontAwesome5 name="home" size={size} color={color} />
                    ) 
                }} 
            />
            <Tabs.Screen 
                name="Contact" 
                component={Contact} 
                options={{
                    tabBarLabel: 'Contact',
                    tabBarIcon: ({color,size}) => (
                        <FontAwesome5 name="address-book" size={size} color={color} />
                    ) 
                }} 
            />
            <Tabs.Screen 
                name="List" 
                component={List} 
                options={{
                    tabBarLabel: 'list',
                    tabBarIcon: ({color,size}) => (
                        <FontAwesome5 name="list" size={size} color={color} />
                    ) 
                }} 
            />
        </Tabs.Navigator>
    );
}

const BottomNavigation = () => {
    
    return (
        <NavigationContainer>
            <NavigationTabs/>
        </NavigationContainer>
    );
};

export default BottomNavigation;