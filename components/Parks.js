import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Parks = () => {
    return (
        <View style={styles.parksView}>
            <Text style={styles.txt}>Parks List Placeholder</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    parksView: {
        borderRadius: 10,
        borderWidth: 4,
        backgroundColor: 'lightgrey',
        flex: 1, // fills all available space in the flex
        justifyContent: 'space-around'
    },
    txt: {
        fontWeight: 'bold',
        textAlign: "center",
        fontSize: 23
    }
})

export default Parks;