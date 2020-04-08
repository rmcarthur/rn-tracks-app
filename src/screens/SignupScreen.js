import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../Components/AuthForm'
import NavLink from '../Components/NavLink'

const SignupScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage, tryLocalSignin } = useContext(AuthContext);
    // Use Effect calls things a single time

    useEffect(() => {
        tryLocalSignin();
    }, []);


    return (
    <KeyboardAvoidingView 
        style={ styles.container }
        behavior={Platform.OS === 'ios' ? 'padding': undefined}
        keyboardVerticalOffset={Platform.OS ==='ios' ? 40 : 0}
    >
    <NavigationEvents 
        onWillFocus={clearErrorMessage} // Called when beginning render of screen
        //onDidFocus={clearErrorMessage} // Called when rendered
        //onWillBlur={clearErrorMessage} // Called when removing screen. Not working rn
        //onDidBlur={clearErrorMessage} // Called when removed
    />
    <AuthForm
        headerText="Sign up for Tracker"
        submitText="Sign Up"
        errorMessage={state.errorMessage}
        onSubmit={signup}
    />
    <NavLink
        LinkText="Already a member? Sign-in here!"
        LinkScreen="Signin"
    />
    </KeyboardAvoidingView>
    )
};

SignupScreen.navigationOptions = () => {
    return { headerShown: false };
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'red',
        borderWidth: 10,
        flex: 1,
        justifyContent: 'center',
        marginBottom:270
    },
});
export default SignupScreen;
