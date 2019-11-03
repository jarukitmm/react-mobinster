import React, { Component } from 'react';
import {View, StyleSheet, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import HistoryList from './HistoryList'


export default class History extends React.Component {

    static navigationOptions = {
        title: 'History',
        headerStyle: {
            backgroundColor: '#f9eeee',
            borderBottomWidth: 0,
            elevation: 0
        },
        headerTintColor: '#000',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }

    state = {
        items: [
            { key: 0, action: "Get Point", date: '20 Mar 2018   Time 16:38', points: 12, unit: 'Points'},
            { key: 1, action: "Get Point", date: '20 Mar 2018   Time 16:38', points: 10, unit: 'Points'},
            { key: 2, action: "Redeem", date: '20 Mar 2018   Time 16:38', points: -4, unit: 'Points'},
            { key: 3, action: "Redeem", date: '20 Mar 2018   Time 16:38', points: -50, unit: 'Points'},
            { key: 4, action: "Get Point", date: '20 Mar 2018   Time 16:38', points: 12, unit: 'Points'},
            { key: 5, action: "Get Point", date: '20 Mar 2018   Time 16:38', points: 10, unit: 'Points'},
            { key: 6, action: "Redeem", date: '20 Mar 2018   Time 16:38', points: -4, unit: 'Points'},
            { key: 7, action: "Redeem", date: '20 Mar 2018   Time 16:38', points: -50, unit: 'Points'},
        ],
    };

    render() {
        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <View style={styles.contentContainer}>
                        <HistoryList
                        items={this.state.items}

                        />
                    </View>
                    <View
                        style={styles.remaining}
                        underlayColor='#fff'
                        onPress={this.showSignUpInfo}
                    >
                        <Text style={[20, styles.remainingText]}>Remaining Points:</Text>
                        <Text style={[20, styles.remainingPointsText]}>{' 365'}</Text>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#f9eeee',
        padding: 10
    },
    contentContainer: {
        flex: 9,
        width: '100%',
        height: '80%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    safeArea: {
        flex: 1,
        backgroundColor: "#f9eeee"
    },
    remaining: {
        width: '65%',
        flex: 1,
        height: 50,
        marginTop: 10,
        backgroundColor: '#ffa3a3',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'


    },
    remainingText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 15
    },
    remainingPointsText: {
        color: '#038574',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold'
    },
})