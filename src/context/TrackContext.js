import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

// Token can be used in React by accessing it inside AuthContext and pass it in
// Or
// do it inside our axios file, which is easier. 


const trackReducer = (state, action ) => {
    switch (action.type) {
        case 'fetch_tracks':
            return action.payload;
        default: 
            return state;
        
    };

};

const fetchTracks = dispatch => async () => {
    const response = await trackerApi.get('/tracks')
    dispatch({ type: 'fetch_tracks', payload: response.data })

};

const createTrack = dispatch => async (name,locations) => {
    await trackerApi.post('/tracks', { name, locations })

};

export const { Context, Provider } = createDataContext(
    
    trackReducer,
    { fetchTracks, createTrack },
    []
)