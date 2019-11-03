import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const settingItem = props => (
    // onPress ==> MenuDetail

    <View>
        <TouchableOpacity style={styles.listItem} onPress={props.OnItemPressed}>

            <Text style={{ fontSize: deviceHeight / 50, color: '#068f7d' , marginLeft: 10 }}>{props.menu}</Text>

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
        padding: deviceHeight / 50,
        borderRadius: deviceHeight / 50,
        shadowColor: '#bbb',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
    },
});
export default settingItem;