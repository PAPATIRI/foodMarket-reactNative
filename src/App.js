import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, Text, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SignIn, SignUp, SignUpAddress, SplashScreen} from './pages';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <NavigationContainer>
            {/* <SplashScreen />
            <SignIn /> */}
            <Router />
            {/* <SignUp /> */}
            {/* <SignUpAddress /> */}
        </NavigationContainer>
    );
};

export default App;
