import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TouchableHighlight, Dimensions } from 'react-native';
import {SafeAreaView} from 'react-navigation'
import MyOrderList from './MyOrderList'
import IconI from 'react-native-vector-icons/Ionicons';


export default class MyOrder extends React.Component {

    static navigationOptions = {
        title: 'My Order',
        headerStyle: {
            backgroundColor: '#f9eeee',
            borderBottomWidth: 0,
            elevation: 0
        },
        headerTintColor: '#000',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        // header: null
    }

    state = {
        items: [
            { key: 0, orderId: 1, date: '20 Mar 2018', status: 1, time: '15:43', delivery: false, discount: 10, discount_type: 1, payment: 1, address: '227-229 Sap Road', phone_no: '0853651033' },
            { key: 1, orderId: 2, date: '21 Mar 2018', status: 2, time: '16:28', delivery: true, discount: 0, discount_type: 2, payment: 2, address: '227-229 Sap Road', phone_no: '0853651033' },
            { key: 2, orderId: 3, date: '22 Mar 2018', status: 3, time: '12:48', delivery: false, discount: 20, discount_type: 1, payment: 3, address: '227-229 Sap Road', phone_no: '0853651033' },
            { key: 3, orderId: 4, date: '23 Mar 2018', status: 4, time: '11:21', delivery: true, discount: 100, discount_type: 2, payment: 4, address: '227-229 Sap Road', phone_no: '0853651033' },
            { key: 4, orderId: 5, date: '23 Mar 2018', status: 5, time: '11:23', delivery: false, discount: 15, discount_type: 1, payment: 1, address: '227-229 Sap Road', phone_no: '0853651033' },
            { key: 6, orderId: 6, date: '20 Mar 2018', status: 1, time: '15:43', delivery: true, discount: 1000, discount_type: 2, payment: 2, address: '227-229 Sap Road', phone_no: '0853651033' },
            { key: 7, orderId: 7, date: '21 Mar 2018', status: 2, time: '16:28', delivery: false, discount: 50, discount_type: 1, payment: 3, address: '227-229 Sap Road', phone_no: '0853651033' },
            { key: 8, orderId: 8, date: '22 Mar 2018', status: 3, time: '12:48', delivery: true, discount: 550, discount_type: 2, payment: 4, address: '227-229 Sap Road', phone_no: '0853651033' },
            { key: 9, orderId: 9, date: '23 Mar 2018', status: 4, time: '11:21', delivery: false, discount: 40, discount_type: 1, payment: 1, address: '227-229 Sap Road', phone_no: '0853651033' },
            { key: 10, orderId: 10, date: '23 Mar 2018', status: 5, time: '11:23', delivery: true, discount: 1900, discount_type: 2, payment: 2, address: '227-229 Sap Road', phone_no: '0853651033' },
        ],
    };

    goToDetail = key => {
        let items = [...this.state.items]
        let index = items.findIndex(item => item.key === key)

        console.log('go to Noti Detail')
        this.props.navigation.navigate('MyOrderDetail', { item: this.state.items[index] })
    }

    render() {
        return (
            <SafeAreaView style={styles.safeArea} forceInset={{ bottom: 'never'}}>
                <View style={styles.container}>
                    <View style={styles.contentContainer}>
                        <MyOrderList
                            items={this.state.items}
                            onItemSelected={(this.goToDetail)}
                        />
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
        padding: 20,
        paddingBottom: 0,
        paddingTop: 10
    },
    contentContainer: {
        width: '100%',
        height: '100%',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    safeArea: {
        flex: 1,
        backgroundColor: "#f9eeee"
    },
})