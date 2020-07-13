import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput
} from 'react-native'
import { SearchableFlatList } from 'react-native-searchable-list'

// component imports
import ParkItem from './ParkItem'

export default class Parks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "",
        }
    }

    render() {
        return (
            <View style={styles.flexContainer}>
                <View style={styles.txtView}>
                    <TextInput
                        style={styles.txtIn}
                        placeholder={"Search Parks"}
                        onChangeText={(input) => this.setState({
                            searchTerm: input
                        })}
                    />
                </View>
                <View style={styles.list}>
                    <SearchableFlatList
                        data={this.props.npsParkNames}
                        searchTerm={this.state.searchTerm}
                        // flatlist props
                        renderItem={
                            ({ item }) => (
                                <ParkItem parkName={{ item }} />
                            )
                        }
                        keyExtractor={item => item}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flexContainer: {
        flex: 1,
        flexDirection: "column"
    },
    txtView: {
        borderWidth: 3,
        borderRadius: 10,
        flex: 1
    },
    txtIn: {
        marginLeft: 2
    },
    list: {
        flex: 6,
        borderWidth: 3,
        borderRadius: 10,
        marginTop: 5,
        overflow: "hidden"
    }
})