import * as Location from 'expo-location';


const tenMetersWithDegress = 0.0001;

const getLocation = increment => { 
    return { 
        timestamp: 1000000,
        coords: {
            speed: 0,
            headin: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            longitude: -122.31814 + increment * tenMetersWithDegress,
            latitude: 37.572645 + increment * tenMetersWithDegress
        }
    };
};

let counter = 0;
setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    })
    counter++;
}, 1000)