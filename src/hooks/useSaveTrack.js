import { useContext } from 'react';
import { Context as TrackContext } from '../context/TrackContext';
import { Context as LocationContext } from '../context/LocationContext';
import { navigate } from '../navigationRef';


// Used to share information between two contexts, 
// make referecnes with useContext hook from react

export default () => {
    // pull in both context info
    const { createTrack } = useContext(TrackContext);
    const { state: { locations, name }, reset } = useContext(LocationContext);

    const saveTrack = async () => {
        await createTrack(name, locations)
        reset();
        navigate('TrackList')

    };

    // Returned so we can expose it to all componenets and be called
    // The array exposes a callable hook
    // array is convention for hooks
    return [saveTrack]

};  
