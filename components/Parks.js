import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput
} from 'react-native'
import { SearchableFlatList } from 'react-native-searchable-list'

export default class Parks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "",
        }
    }

    render() {
        return (
            <View>
                <TextInput
                    placeholder={"Search Parks"}
                    onChangeText={(input) => this.setState({
                        searchTerm: input
                    })}
                />
                <SearchableFlatList
                    data={this.props.npsParkNames}
                    searchTerm={this.state.searchTerm}
                    // flatlist props
                    renderItem={
                        ({ item }) => (
                            <Text>{item}</Text>
                        )
                    }
                    keyExtractor={item => item}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flexContainer: {
        // pass
    },
    txtIn: {
        // pass
    },
    list: {
        // pass
    }
})