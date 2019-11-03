import React, { Component } from 'react';
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
import colors from './../../src/color/color'

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default class PaymentMethod extends React.Component {

    static navigationOptions = {
        title: 'Payment',
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
            { key: 0, action: "Get Point", date: '20 Mar 2018   Time 16:38', points: 12, unit: 'Points' },
            { key: 1, action: "Get Point", date: '20 Mar 2018   Time 16:38', points: 10, unit: 'Points' },
            { key: 2, action: "Redeem", date: '20 Mar 2018   Time 16:38', points: -4, unit: 'Points' },
            { key: 3, action: "Redeem", date: '20 Mar 2018   Time 16:38', points: -50, unit: 'Points' },
        ],
    };

    render() {
        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <View style={styles.contentContainer}>
                        <View style={styles.section1}>
                            <TouchableOpacity style={styles.cash}>
                                <Text style={styles.confirmText}>Confirm</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.transfer}>
                                <Text style={styles.confirmText}>Bank Transfer</Text>
                            </TouchableOpacity>


                        </View>
                        <View style={styles.section2}>
                            <TouchableOpacity style={styles.creditCard}>
                                <Text style={styles.confirmText}>Credit Card</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.rabbit}>
                                <Text style={styles.confirmText}>Rabbit Line Pay</Text>
                            </TouchableOpacity>

                        </View>


                    </View>
                    <TouchableOpacity style={styles.confirm}>
                        <Text style={styles.confirmText}>Confirm</Text>
                    </TouchableOpacity>
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
        backgroundColor: colors.title,
        padding: 20
    },
    contentContainer: {
        width: '100%',
        padding: 20,
        // height: '80%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#ffcbcb',
        borderRadius: 15
    },
    safeArea: {
        flex: 1,
        backgroundColor: "#f9eeee",
    },
    section1: {
        width: '100%',
        height: deviceHeight / 5,
        flexDirection: 'row'
    },
    section2: {
        width: '100%',
        height: deviceHeight / 5,
        flexDirection: 'row',
        marginTop: 5
    },
    cash: {
        flex: 1,
        backgroundColor: '#a1a1a1',
        width: '50%',
        height: '100%',
        borderRadius: 15,
        fontWeight: 'bold'
    },
    transfer: {
        flex: 1,
        backgroundColor: '#3694be',
        width: '50%',
        height: '100%',
        borderRadius: 15,
        marginLeft: 5,
        fontWeight: 'bold'
    },
    creditCard: {
        flex: 1,
        backgroundColor: '#fcc900',
        width: '50%',
        height: '100%',
        borderRadius: 15,
        fontWeight: 'bold'
    },
    rabbit: {
        flex: 1,
        backgroundColor: '#35b24a',
        width: '50%',
        height: '100%',
        borderRadius: 15,
        marginLeft: 5,
        fontWeight: 'bold'
    },
    confirm: {
        width: '60%',
        height: 50,
        marginBottom: 10,
        backgroundColor: '#000',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',


    },
    confirmText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 15
    },
})