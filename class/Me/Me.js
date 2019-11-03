import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, FlatList } from 'react-native'
import { Dimensions } from 'react-native';
// import myOrderIcon from './../src/images/Me/myOrder.png'
// import favouriteIcon from ''
// import voucherIcon from ''
// import notiIcon from ''
// import historyIcon from ''
// import settingIcon from ''
import ItemList from './../../src/components/ItemList/ItemList.js';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const meItems = [
    {key: 0, name: "My Order", image: require('./../../src/images/Me/myOrder.png')},
    {key: 1, name: "Favourite", image: require('./../../src/images/Me/like.png')},
    {key: 2, name: "My Vouchers", image: require('./../../src/images/Me/coupon.png')},
    {key: 3, name: "Notification", image: require('./../../src/images/Me/noti.png')},
    {key: 4, name: "History", image: require('./../../src/images/Me/history.png')},
    {key: 5, name: "Setting", image: require('./../../src/images/Me/settings.png')},
]

class Me extends React.Component {

    static navigationOptions = {
        title: 'Me'
    }

    state = {
        selectedPlace: null
    };

    itemSelectedHandler = (key, name) => {
        if (key === 0) {
            this.props.navigation.navigate('MyOrder')    
        } else if (key === 1) {
            this.props.navigation.navigate('Fav')    
        } else if (key === 2) {
            this.props.navigation.navigate('Vouch')    
        } else if (key === 3) {
            this.props.navigation.navigate('Noti')    
        } else if (key === 4) {
            this.props.navigation.navigate('Hist')    
        } else if (key === 5) {
            this.props.navigation.navigate('Setting')    
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.section1Container}>
                    <Image style={styles.cover} source={require('./../../src/images/Me/cover-test.jpg')} resizeMode='stretch' />
                    <Image style={styles.profileImage} source={require('./../../src/images/Me/profile.png')} resizeMode='stretch' />
                    <Text style={styles.name}>Thanavat Chaopaknam</Text>
                    <Text style={styles.email}>thanavat@dmit.co.th</Text>
                </View>
                <View style={styles.section2Container}>
                    <ItemList items={meItems} onItemSelected={(this.itemSelectedHandler)} />
                    
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    section1Container: {
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        shadowColor: '#bbb',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
    },
    cover: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    profileImage: {
        width: deviceWidth / 4,
        height: deviceWidth / 4,
        marginLeft: 30
    },
    name: {
        marginTop: 10,
        marginLeft: 25,
        fontSize: 20,
        fontWeight: 'bold'
    },
    email: {
        marginTop: 10,
        marginLeft: 25,
    },
    section2Container: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        paddingTop: 30,
        paddingLeft: 30,
        paddingRight: 30

    },

})
export default Me 