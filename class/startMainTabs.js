//jarukit
import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createMaterialTopTabNavigator, createAppContainer, ImageBackground, StyleSheet } from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IconA from 'react-native-vector-icons/AntDesign';

import Promotion from "./promotion.js"
import Reward from "../class/Reward"
import Sharepopup from "../src/components/Popup/sharepopup";
import Me from "./Me/Me.js"

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'home',
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Setting',
    headerStyle: {
        backgroundColor: '#f9eeee',
    },
    headerTintColor: '#000',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Promotion: { screen: Promotion,
      navigationOptions: {
        tabBarLabel:"Promotion",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="bullhorn" size={25} color={tintColor} />
        )
      }
    },
    // HomeScreen: HomeScreen,
    Menu: { screen: SettingsScreen,
      navigationOptions: {
        tabBarLabel:"Menu",
        tabBarIcon: ({ tintColor }) => (
          <IconA name="appstore-o" size={25} sytle={{width: 100}} color={tintColor}/>
        ),
      }
    },
    Reward: { screen: Reward,
      navigationOptions: {
        tabBarLabel:"Reward",
        tabBarIcon: ({ tintColor }) => (
          <IconA name="gift" size={25} color={tintColor} />
        )
      }
    },
    Profile: { screen: Me,
      navigationOptions: {
        tabBarLabel:"Me",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="user" size={25} color={tintColor} />
        )
      }
    },
  },
  {
    initialRouteName: 'Promotion',
    tabBarOptions: {
      activeTintColor: '#FF7B84',
      showLabel: true,
      inactiveTintColor: 'black',
      inactiveBackgroundColor: 'white',
      style: {
        backgroundColor: 'white',
      },
      labelStyle: {
        marginTop: 0,
        // marginBottom: "5%"
      },
      tabStyle: {
        // marginTop: "1%",
        // marginBottom: "15%"
      }
    },
  },
);

export default createAppContainer(TabNavigator);