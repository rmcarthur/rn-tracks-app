import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error': 
            return { ...state, errorMessage: action.payload }
        case 'signin':
            // rewrite entire state, since these are the only two objects in state
            return { token: action.payload, errorMessage: ''}
        case 'clear_error_message':
            return { ...state, errorMessage: ''}
        case 'signout':
            return { token: null, errorMessage: ''}
        default:
            return state;
    }
}

const clearErrorMessage = dispatch => () => {
    console.log("Called clearErrorMessage")
    dispatch({type: 'clear_error_message'});
};


// action functions to change state
const signup = (dispatch) => async ({ email, password }) => {
    // Make an api request to sign up
    try {
        const response = await trackerApi.post('/signup', { email, password });
        // Save the jwk token to the device
        await AsyncStorage.setItem('token', response.data.token);
        // if we sign up, modify our state, return jwk
        dispatch({ type: 'signin', payload: response.data.token})
        // Navigate to main flow using navigationRef object
        navigate('TrackList')
    } catch (err) {
        // if signing up fails, show error message
        console.log(err)
        dispatch({ type: 'add_error', payload: 'Invalid Email'});
    }
}
const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) { //is not null
        dispatch({ type: 'signin', payload: token})
        navigate('TrackList')
    } else {
        navigate('loginFlow')
    }
}
const signin = (dispatch) => async ({ email, password}) => {
    // Make an api requeset to sign in
    // Handle success by updating state
    // Handle failure by showing error
    try {
        const response = await trackerApi.post('/signin', {email, password});
        await AsyncStorage.setItem('token', response.data.token);

        dispatch({ type: 'signin', payload: response.data.token })
        navigate('TrackList')
    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Invalid Email or Password'})

    }
}

const signout = (dispatch) => async ({}) => {
    // Update state
    // navigate to loginFlow (or signINScreen?)
    await AsyncStorage.removeItem('token')
    dispatch({ type: 'signout'})
    navigate('loginFlow')
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup, clearErrorMessage, tryLocalSignin },
    {token: null, errorMessage: ''}
)