import React, { useState } from 'react'; 
import { Text, Button, Input } from 'react-native-elements';
import { View, StyleSheet } from 'react-native'
import Spacer from './Spacer'

const AuthForm = ({ headerText, errorMessage, submitText, onSubmit }) => {
    const [email, setEmail ] = useState('');
    const [password, setPassword] = useState('');
    return (
        <>    
        <Spacer> 
            <Text h3>{headerText}</Text>
        </Spacer>
        <Input 
            label="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            autoCorrect={false}
        />
        <Spacer/>
        <Input 
            label="Password"
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
        />
        <Spacer>
            <Button title={submitText}
            onPress={() => onSubmit({ email, password})} />
        </Spacer>
        {errorMessage ? <Text style={ styles.errorMessage}> {errorMessage} </Text> : null }
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        borderColor: 'red',
        borderWidth: 10,
        flex: 1,
        justifyContent: 'center',
        marginBottom:270
    },
    errorMessage: {
        fontSize: 16, 
        color: 'red',
        justifyContent: 'center',
        textAlign: 'center'
    },
    signinLink: {
        color: 'blue',
        fontSize: 22,
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 25
    }
});

export default AuthForm;