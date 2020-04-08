import React, { useState, useContext } from 'react';
import { StyleSheet, TouchableOpacity , Text } from 'react-native';
import { navigate } from '../navigationRef';

const NavLink = ({LinkText, LinkScreen}) => {
return (<TouchableOpacity
        onPress={() => navigate(LinkScreen)} >
        <Text style={ styles.signinLink }>{LinkText}</Text>
        </TouchableOpacity>)
}
export default NavLink;

const styles = StyleSheet.create({
    signinLink: {
        color: 'blue',
        fontSize: 22,
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 25
    }
});