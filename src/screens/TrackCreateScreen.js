import React, { useContext, useCallback } from 'react';
import useLocation from '../hooks/useLocation';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import { Text } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import Map from '../Components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import TrackForm from '../Components/TrackForm'
import { FontAwesome } from '@expo/vector-icons'

const TrackCreateScreen = ({ isFocused }) => {
    const { state: { recording }, addLocation } = useContext(LocationContext)
    const callback = useCallback(location => {
        addLocation(location, recording);
    }, [recording]);
    
    const [err] = useLocation(isFocused || recording, callback)

    return (
    <SafeAreaView forceInset={{top: 'always'}}> 
    <Text h2>Create a Track</Text>
    <Map/>
    {err ? < Text> Please enable location services </Text> : null } 
    <TrackForm />
    </SafeAreaView>
    )

};

TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <FontAwesome name="plus" size={18}/>
}

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen) ;