import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../pages/Home";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";
import { Icon } from 'react-native-elements';
import { Text, View } from "react-native";
import { useSelector } from 'react-redux';
import Post from "../pages/Post";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const isDarkTheme = () => {
    const theme = useSelector((state) => state.themeReducer.theme);
    if (theme.mode === 'dark') {
        return true;
    } else {
        return false;
    }
}

const MainPages = () => (
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
    }}>
        <Stack.Screen name="Main" component={TabsContainer} />
        <Stack.Screen name="Post" component={Post} />
    </Stack.Navigator>
)

const TabsContainer = () => (
    <Tab.Navigator
        screenOptions={{
            tabBarStyle: {
                position: "absolute",
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 0,
                borderRadius: 15,
                height: 90,
                backgroundColor: isDarkTheme() ? '#fff' : '#333',
            },
            tabBarShowLabel: false
            
        }}    
        initialRouteName="Home"
    >
        <Tab.Screen
            name="Settings"
            component={Settings}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignContent: 'center'}}>

                        <Icon
                            name={"settings"}
                            type='material'
                            color={ focused ? '#e32f45' : isDarkTheme() ? '#999999' : "#dbdbdb"}
                            size={50}
                        />
                    </View>
                ),
                headerShown: false, 
                
            }}
        />
        <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    headerShown: false, 
                    tabBarIcon: ({focused}) => (
                        <Icon
                        name={"home"}
                        type='material'
                        color={ focused ? '#e32f45' : isDarkTheme() ? '#999999' : "#dbdbdb"}
                        size={50}
                    />
                    )
                }}
        />
        
        <Tab.Screen
            name="Profile"    
            component={Profile}
            options={{
                headerShown: false, 
                tabBarIcon: ({focused}) => (
                    <Icon
                    name={"account-circle"}
                    type='material'
                    color={ focused ? '#e32f45' : isDarkTheme() ? '#999999' : "#dbdbdb"}
                    size={50}
                  />
                )
            }}
        />
        
    </Tab.Navigator>
)


export { MainPages };
