import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../pages/Home";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";
import { Icon } from 'react-native-elements';
import { Text, View } from "react-native";
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();

const isDarkTheme = () => {
    const theme = useSelector((state) => state.themeReducer.theme);
    if (theme.mode === 'dark') {
        return true;
    } else {
        return false;
    }
}

const MainPages = () => (
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
