import React from 'react'
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    Alert
} from 'react-native'


export default class ParkItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    Alert.alert("bruh")
                }}
            >
                <Text style={styles.txt}>{this.props.parkName.item}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {

    },
    button: {
        marginTop: 2.5,
        marginBottom: 2.5,
        marginLeft: 5,
        marginRight: 5,
        borderWidth: 3,
        borderRadius: 4,
        backgroundColor: "#DDDDDD"
    },
    txt: {
        textAlign: "center",
        fontSize: 20
    }
})