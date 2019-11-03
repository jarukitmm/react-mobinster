import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';

const languageItem = props => (
    // onPress ==> MenuDetail
    
    <TouchableOpacity onPress={props.OnItemPressed}> 
        <View style={styles.listItem}>
            <Image resizeMode="cover" source={props.itemImage} style={styles.itemImage} />
            <Text>{props.itemName}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        marginBottom: 10,
        padding: 10,
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'flex-start',
        borderRadius: 25,
        shadowColor: '#bbb',
        shadowOffset: { width: 0, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 2,
    },

    namePriceContainer: {
        justifyContent: 'center'
    },

    itemImage: {
        marginRight: 20,
        marginLeft: 20,
        height: 30,
        width: 30
    },
    heartContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    heartImage: {
        height: 30,
        width: 30
    }
});
export default languageItem;