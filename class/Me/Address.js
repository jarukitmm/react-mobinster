//jarukit
import React, { Component } from 'react';
import { View, StyleSheet, SafeAreaView, } from 'react-native';
import colors from '../../src/color/color';
import AddressList from './AddressList';
import Colors from '../../src/color/color';

export default class Address extends React.Component {

    static navigationOptions = {
        title: 'Address',
        headerStyle: {
            backgroundColor: colors.color1,
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
            { key: 0, name: 'Sataporn Pienvimungsa', phone: '0811111111', address: "Thai CC Tower Floor 27, 272 Yannawa, Sathon Bangkok 10120", province: 'aa', district: 'aaaa', postalcode: '11133', status: '[ Default ]' },
            { key: 1, name: 'Papapan mungsa', phone: '0822222222', address: "Street addresses: 445 Mount Eden Road, Mount Eden, Auckland", province: 'bb', district: 'bbbb', postalcode: '11133', status: '' },
            { key: 2, name: 'Sata vimungsa', phone: '0833333333', address: "Rural addresses: 21 Greens Road RD 2 Ruawai 0592", province: 'cc', district: 'cccc', postalcode: '11133', status: '' },
            { key: 3, name: 'Sorn Pisa', phone: '0844444444', address: "Partial addresses: Main Highway Otaki; 32 Wilson Street", province: 'dd', district: 'dddd', postalcode: '11133', status: '' },
            // { key: 4, name: 'Sarn Pienvi', phone: '0855555555', address: "PO Boxes: PO Box 39100, Howick", province: 'ee', district: 'eeee', postalcode: '11133', status: '' },
            // { key: 5, name: 'Panrapee visa', phone: '0866666666', address: "Thai CC Tower Floor 27, 272 Yannawa, Sathon Bangkok 10120", province: 'ff', district: 'ffff', postalcode: '11133', status: '' },
            // { key: 6, name: 'Ratinan Pien', phone: '0877777777', address: "Thai CC Tower Floor 27, 272 Yannawa, Sathon Bangkok 10120", province: 'gg', district: 'gggg', postalcode: '11133', status: '' },
            // { key: 7, name: 'Sataporn Pienvimungsa', phone: '08122056', address: "Thai CC Tower Floor 27, 272 Yannawa, Sathon Bangkok 10120", province: 'hh', district: 'hhhh', postalcode: '11133', status: '' },
            // { key: 8, name: 'Sataporn Pienvimungsa', phone: '081254155', address: "Thai CC Tower Floor 27, 272 Yannawa, Sathon Bangkok 10120", province: 'bb', district: 'iiii', postalcode: '11133', status: '' },
            // { key: 9, name: 'Sataporn Pienvimungsa', phone: '08122518741', address: "Thai CC Tower Floor 27, 272 Yannawa, Sathon Bangkok 10120", province: 'bb', district: 'bbaa', postalcode: '11133', status: '' },
        ],
    };

    setDefault = key => {
        this.setState({
            items: this.state.items.map(pre => (pre.key === key ? {...pre, status: '[ Default ]'} : {...pre, status: ''}))
        });
    }

    adddata = () => {
        this.props.navigation.navigate('AddressDataAdd')
    }

    setAddress = key => {
        const content = {
            name: this.state.items[key].name,
            phone: this.state.items[key].phone,
            address: this.state.items[key].address,
            province: this.state.items[key].province,
            district: this.state.items[key].district,
            postalcode: this.state.items[key].postalcode,
        }
        this.props.navigation.navigate('AddressData', {
            content
        })
    }

    render() {
        return (
            <SafeAreaView style={styles.safeArea} forceInset={{ bottom: 'never'}}>
                <View style={styles.container}>
                    <View style={styles.contentContainer}>
                        <AddressList
                            items={this.state.items}
                            onSetdefaultSelected={this.setDefault}
                            onItemSelected={this.setAddress}
                            adddata = {this.adddata}
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
        backgroundColor: Colors.color1,
        padding: 20,
        paddingBottom: 0,
        paddingTop: 10
    },
    contentContainer: {
        width: '100%',
        height: '100%',
        // height: deviceHeight,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    safeArea: {
        flex: 1,
        backgroundColor: Colors.color1
    },
})
