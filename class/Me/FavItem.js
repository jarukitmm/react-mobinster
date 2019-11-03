import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';

const favItem = props => (
    // onPress ==> MenuDetail
    
    <TouchableOpacity onPress={props.OnItemPressed}> 
        <View style={styles.listItem}>
            <Image resizeMode="cover" source={props.itemImage} style={styles.itemImage} />
            <View style={styles.namePriceContainer}>
                <Text>{props.itemName}</Text>
                <Text style={{ marginTop: 15, color: '#aaa' }}>{props.itemPrice.toLocaleString(navigator.language, { maximumFractionDigits: 0 }) + " Baht"}</Text>
            </View>
            <TouchableOpacity style={styles.heartContainer} onPress={props.OnItemPressed}>
                <Image resizeMode="cover" source={props.itemHeart} style={styles.heartImage} />
            </TouchableOpacity>

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
        borderRadius: 10,
        shadowColor: '#888',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 1,
        shadowRadius: 2,
    },

    namePriceContainer: {
        justifyContent: 'center'
    },

    itemImage: {
        marginRight: 20,
        height: 70,
        width: 70
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
export default favItem;