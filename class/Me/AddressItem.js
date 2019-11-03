//jarukit
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, Dimensions } from 'react-native';
import IconE from 'react-native-vector-icons/Entypo';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const addressItem = props => (
    // onPress ==> MenuDetail
    <View>
        <TouchableOpacity style={styles.listItem} onPress={props.OnItemPressed}>
            
            <View style={{flexDirection: 'column', width: '70%', height: deviceHeight / 9, justifyContent: 'space-between'}}>
                <Text style={{ fontSize: deviceHeight / 50, color: 'black' , marginLeft: 10, fontWeight: 'bold' }}>{props.name}</Text>
                <Text style={{ fontSize: deviceHeight / 50, color: '#707070' , marginLeft: 10 }}>{props.address}</Text>
            </View>
            <View style={{flexDirection: 'column', width: '30%', height: deviceHeight / 9, justifyContent: 'space-between'}}>
                <Text style={{ fontSize: deviceHeight / 50, color: '#707070' , alignSelf: 'flex-end' }}>{props.status}</Text>
                <TouchableOpacity
                    onPress={props.OnDefaultPressed}
                >
                    <IconE name="location-pin" style={props.status===""? styles.icondisable: styles.iconactive}/>
                </TouchableOpacity>
            </View>

        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 10,
        padding: deviceHeight / 40,
        borderRadius: deviceHeight / 50,
        shadowColor: '#bbb',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
    },
    icondisable: {
        fontSize: deviceHeight / 20, 
        color: '#DEDEDE', 
        alignSelf: 'flex-end'
    },
    iconactive: {
        fontSize: deviceHeight / 20, 
        color: '#707070', 
        alignSelf: 'flex-end'
    }
});
export default addressItem;