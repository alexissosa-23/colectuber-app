import React from 'react';
import { View, Text, Button } from 'react-native';
import AuthService from 'src/services/auth-service';
import ActivationButton from './activation-button';

const Home = ()=>{
    return <View>
        <Text>
            Home
        </Text>
        <ActivationButton/>
    </View>
}

export default Home;