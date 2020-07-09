import React from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // rendering Google Maps
import { View, StyleSheet } from 'react-native'

const Map = () => {
    return (
        <View style={styles.mapView} >
            <MapView
                provider={PROVIDER_GOOGLE}
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
                style={styles.map}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mapView: {
        height: 400,
        borderRadius: 10,
        margin: 5,
        borderWidth: 6
    },
    map: {
        ...StyleSheet.absoluteFillObject
    }
})

export default Map