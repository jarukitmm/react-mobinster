//jarukit
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import IconF from 'react-native-vector-icons/Feather';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';

export default class HeaderRight extends Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return(
            <View style={{flexDirection: 'row'}}>
                <View style={{marginRight: 15}}>
                    <TouchableOpacity
                        // onPress={() => {}}
                    >
                        <IconF name="shopping-cart" size={25} style={{color: "#fff"}}/>
                    </TouchableOpacity>
                </View>
                <View style={{marginRight: 15}}>
                    <TouchableOpacity
                        // onPress={() => {}}
                    >
                        <IconM name="wechat" size={25} style={{color: "#fff"}}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}