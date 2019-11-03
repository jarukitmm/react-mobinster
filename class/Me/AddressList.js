//jarukit
import React, { Component } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Dimensions, Text } from 'react-native';
import IconA from 'react-native-vector-icons/AntDesign';

import AddressItems from './AddressItem';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const addressList = props => {
    
    return (
        <ScrollView
            style={styles.listContainer}
            showsVerticalScrollIndicator={false}
        >
            {
                props.items.map((item,i)=>(
                    <AddressItems
                        key={item.key}
                        name={item.name}
                        address={item.address}
                        status={item.status}
                        OnDefaultPressed={() => props.onSetdefaultSelected(item.key)}
                        OnItemPressed={() => props.onItemSelected(item.key)}
                    />
                ))
            }
            <TouchableOpacity style={styles.listItem} 
                onPress={props.adddata}
            >
                <Text style={{ fontSize: deviceHeight / 50, color: 'black' , marginLeft: 10, fontWeight: 'bold' }}>New address</Text>
                <IconA name="plus" size={deviceHeight / 40} style={{alignSelf: 'flex-end'}}/>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    },
    listItem: {
        width: "100%",
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: 'space-between',
        marginBottom: 10,
        padding: deviceHeight / 40,
        borderRadius: deviceHeight / 20,
        shadowColor: '#bbb',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
    },
});

export default addressList;