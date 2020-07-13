import React from 'react'
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps'; // rendering Google Maps
import { View, StyleSheet } from 'react-native'

// component imports
import WeatherCallout from './WeatherCallout'

export default class Map extends React.Component {
    constructor(props) {
        super(props);
    }

    // render markers
    markers = () => {
        return this.props.filteredParkData.map(parkData => {
            return (
                <Marker
                    // title={parkData.name}
                    coordinate={parkData.getLatLong()}
                    identifier={parkData.name}
                    key={parkData.name}
                >
                    <Callout>
                        <WeatherCallout
                            title={parkData.name}
                            lat={parkData.lat}
                            long={parkData.long}
                        />
                    </Callout>
                </Marker>
            )
        })
    }

    render() {
        return (
            <View style={styles.container} >
                {/* default jsx from react-native-maps github installation instructions*/}
                <MapView
                    provider={PROVIDER_GOOGLE}
                    region={{
                        latitude: this.props.initLat,
                        longitude: this.props.initLong,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                    style={styles.mapView}
                >
                    {this.markers()}
                </MapView>
            </View>
        )
    }
}



// default styles from react-native-maps github intallation instructions
const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        borderWidth: 3,
        overflow: "hidden",
        flex: 1 // fills all available space in the flex
    },
    mapView: {
        ...StyleSheet.absoluteFillObject
    }
})
