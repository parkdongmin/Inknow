import React from 'react';  
import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import firstpage from './first-view';
import main from './main';
import ourmislist from './ourmislist';
import sololist from './sololist';
import Join from './join';
import Login from './login';


const App = createStackNavigator(
    {
        Home: { screen: firstpage },
        Main: { screen: main },
        MistakeBoard: { screen: ourmislist },
        MistakeNote: { screen: sololist },
        Join: { screen: Join },
        Login: { screen: Login },
    },

    { initialRouteName: 'Home', headerMode: "float", defaultNavigationOptions: {headerStatusBarHeight : 25}}
);

export default createAppContainer(App);