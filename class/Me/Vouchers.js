import React, { Component } from 'react';
import {View, StyleSheet, Text, SafeAreaView, Alert, Clipboard} from 'react-native';
import VoucherList from './VoucherList';

export default class Voucher extends React.Component {

    state = {
        items: [
            { key: 0, code: "FIRSTTIME", des: '20% Off for first login', date: '20 Mar - 15 Apr 2019'},
            { key: 1, code: "ICECREAM", des: '35% Off for ice cream', date: '2 Mar - 8 Mar 2019'},
            { key: 2, code: "TAKEHOME", des: '50% Off for ice Cream size XL', date: '3 Apr - 2 May 2019'},
            { key: 3, code: "ILIKETHIS", des: '10% Off for any menu', date: '8 Apr - 9 May 2019'},
            { key: 4, code: "COUPLE", des: '15% Off for couple package', date: '7 May - 8 June 2019'},
            { key: 5, code: "FEMALE", des: '25% Off for Female', date: '18 May - 31 May 2019'},
        ],
    };

    copyCode = key => {
        
        let items = [...this.state.items]
        let index = items.findIndex(item => item.key === key)

        Clipboard.setString(items[index].code);

        Alert.alert(
            'Copied to Clipboard',
            'You can use ' + items[index].code + ' in your cart',
            [
              {
                text: 'Close',
                onPress: () => console.log('Close Pressed'),
                style: 'destructive',
              },
              {text: 'Go to Cart', onPress: () => console.log('Go to Cart')},
            ],
            {cancelable: false},
        );
    }

    static navigationOptions = {
        title: 'My Vouchers',
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
    render(){
        return(
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <View style={styles.contentContainer}>
                        <VoucherList
                        items={this.state.items}
                        onItemSelected={(this.copyCode)}
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9eeee',
        padding: 10,
    },
    contentContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,
        shadowColor: '#bbb',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
    },
    safeArea: {
        flex: 1,
        backgroundColor: "#f9eeee"
    },
})