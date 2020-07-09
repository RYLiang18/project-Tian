import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextBase
} from 'react-native'


const Header = () => {
    return (
        <View style={styles.view}>
            <Text style={styles.txt}>hello</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        height: 60,
        padding: 15,
        backgroundColor: 'darkslateblue',
        margin: 5,
        borderRadius: 10
    },
    txt: {
        color: 'white',
        fontSize: 23,
        textAlign: 'center'
    }
})

export default Header;