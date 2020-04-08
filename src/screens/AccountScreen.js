import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../Components/Spacer'
import {Context as AuthContext } from '../context/AuthContext';
import { FontAwesome } from '@expo/vector-icons'



const AccountScreen = () => {
    const { signout } = useContext(AuthContext);
    return (
    <SafeAreaView forceInset={{ top: 'always' }}>
    <Text style={{ fontSize: 48 }}>AccountScreen</Text>
    <Spacer >
        <Button title="Sign Out" onPress={signout} />
    </Spacer>
    </SafeAreaView>
    )

};

const styles = StyleSheet.create({});

AccountScreen.navigationOptions = {
    title: 'Accont',
    tabBarIcon: <FontAwesome name="gear" size={18} />
}

export default AccountScreen;