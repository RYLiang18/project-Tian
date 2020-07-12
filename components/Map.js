import React from 'react'
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps'; // rendering Google Maps
import { View, StyleSheet } from 'react-native'

export default class Map extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container} >
                {/* default jsx from react-native-maps github installation instructions*/}
                <MapView
                    provider={PROVIDER_GOOGLE}
                    region={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                    style={styles.mapView}
                />
            </View>
        )
    }
}



// default styles from react-native-maps github intallation instructions
const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        borderWidth: 4,
        overflow: "hidden",
        flex: 1 // fills all available space in the flex
    },
    mapView: {
        ...StyleSheet.absoluteFillObject
    }
})
