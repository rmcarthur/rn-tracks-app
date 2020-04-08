import React, { useState, useContext } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../Components/AuthForm'
import NavLink from '../Components/NavLink'


const SigninScreen = () => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext);

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
        headerText="Sign In to Tracker"
        submitText="Sign In"
        errorMessage={state.errorMessage}
        onSubmit={signin}
    />
    <NavLink
        LinkText="Not a member? Sign up here!"
        LinkScreen="Signup"
    />
    </KeyboardAvoidingView>
    )

};
SigninScreen.navigationOptions = () => {
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

export default SigninScreen;