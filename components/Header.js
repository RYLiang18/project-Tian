import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'


const Header = () => {
    return (
        <View style={styles.view}>
            <Text style={styles.txt}>Project 天</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: 'skyblue',
        borderRadius: 10,
        borderWidth: 4,
        flex: 1,
        justifyContent: "space-around"
    },
    txt: {
        color: 'white',
        fontSize: 23,
        fontWeight: "bold",
        textAlign: 'center',
    }
})

export default Header;