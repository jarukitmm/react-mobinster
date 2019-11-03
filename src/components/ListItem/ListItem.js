import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';


const listItem = props => (
    <TouchableOpacity onPress={props.OnItemPressed}>
        <View style={styles.listItem}>
            <Image resizeMode = "cover" source = {props.itemImage} style = {styles.itemImage}/>
            <Text>{props.itemName}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        marginBottom: 5,
        padding: 10,
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
    },

    itemImage: {
        marginRight: 20,
        height: 30,
        width: 30
    }
});
export default listItem;