import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Alert
} from 'react-native'
import { SearchableFlatList } from 'react-native-searchable-list'

import Header from './Header';

import USStates from '../classes/USStates'

export default class IntroPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "",
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Header />
                </View>
                <View style={styles.listView}>
                    <Text style={styles.question}>Which State's National Parks?</Text>
                    <View style={styles.txtInView}>
                        <TextInput
                            style={styles.txtIn}
                            placeholder={"Search States"}
                            onChangeText={(input) => this.setState({
                                searchTerm: input
                            })}
                        />
                    </View>
                    <View style={styles.flatListView}>
                        <SearchableFlatList
                            data={states.getNames()}
                            searchTerm={this.state.searchTerm}
                            // flatlist props
                            renderItem={
                                ({ item, index }) => (
                                    <TouchableOpacity
                                        style={styles.button}
                                        onPress={() => {
                                            this.props.chooseState(
                                                states.getStateCode(index),
                                                states.getStateName(index)
                                            )
                                        }}
                                    >
                                        <Text style={styles.txt}>{{ item }.item}</Text>
                                    </TouchableOpacity>
                                )
                            }
                            keyExtractor={item => item}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    header: {
        flex: 2,
        marginTop: 2.5,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 2.5
    },
    listView: {
        flex: 20
    },
    question: {
        fontSize: 23,
        textAlign: "center"
    },
    txtInView: {
        borderWidth: 3,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 2.5,
        marginBottom: 2.5,
        borderRadius: 10
    },
    txtIn: {
        marginLeft: 2
    },
    button: {
        borderWidth: 3,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 2.5,
        marginBottom: 2.5,
        borderRadius: 10,
        backgroundColor: "#DDDDDD",
    },
    txt: {
        textAlign: "center",
        fontSize: 20
    },
    flatListView: {
        borderWidth: 3,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 2.5,
        marginBottom: 2.5,
        borderRadius: 10,
        backgroundColor: "skyblue"
    }
})

const states = new USStates()