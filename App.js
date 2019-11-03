/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './class/Login.js';
import startMainTabs from './class/startMainTabs.js';
import SignUp from './class/SignUp.js';
import MyOrder from './class/Me/MyOrder.js';
import Fav from './class/Me/Favourite';
import Vouch from './class/Me/Vouchers';
import Noti from './class/Me/Notification';
import Hist from './class/Me/History';
import Setting from './class/Me/Setting';
import NotiDetail from './class/Me/NotiDetail';
import Profile from './class/Me/Profile';
import Lang from './class/Me/Language';
import Loc from './class/Me/Location';
import Address from './class/Me/Address';
import MyOrderDetail from './class/Me/MyOrderDetail';
import HeaderRight from './src/components/cart&chat/cart&chat.js'
import Promo from './src/components/Card/promotioncard'
import AddressData from './class/Me/AddressData';
import AddressDataAdd from './class/Me/AddressDataAdd';

//import Icon from 'react-native-vector-icons/FontAwesome';

const handlePress = () => false
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  // android:
  //   'Double tap R on your keyboard to reload,\n' +
  //   'Shake or press menu button for dev menu',
});
const textEntry = Platform.select({
  ios: true,
  android: true
});

type Props = {};

class SignUpScreen extends React.Component {

  static navigationOptions = {
    title: 'SignUp',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>SignUp Screen</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Login: LoginScreen,
    SignUp: SignUp,
    Fav: Fav,
    Vouch: Vouch,
    Hist: Hist,
    Setting: Setting,
    Noti: Noti,
    MyOrder: MyOrder,
    NotiDetail: NotiDetail,
    Profiles: Profile,
    Language: Lang,
    Loc: Loc,
    MyOrderDetail: MyOrderDetail,
    Address: Address,
    AddressData: AddressData,
    AddressDataAdd: AddressDataAdd,
    Main: { screen: startMainTabs,
      navigationOptions: {
        headerLeft: (<Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold', marginLeft: 15}}>Mobinster</Text>),
        headerRight: (<HeaderRight/>),
        headerStyle: {
          backgroundColor: '#FF7B84',
          borderBottomWidth: 0,
          elevation: 0
        },
        headerLayoutPreset: 'left',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }  
    },
    Promotioncard: Promo
  },
  {
    initialRouteName: 'Login',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({

});
