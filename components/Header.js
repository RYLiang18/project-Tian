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
        height: 60,
        padding: 10,
        backgroundColor: 'skyblue',
        margin: 5,
        borderRadius: 10,
        borderWidth: 4
    },
    txt: {
        color: 'white',
        fontSize: 23,
        textAlign: 'center'
    }
})

export default Header;