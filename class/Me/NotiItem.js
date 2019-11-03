import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const notiItem = props => (
    // onPress ==> MenuDetail

    <View>
        <TouchableOpacity style={styles.listItem} onPress = {props.OnItemPressed}>
            <View style={styles.namePriceContainer}>
                <Text style={{ fontSize: deviceHeight / 48, color: '#068f7d', fontWeight: 'bold' }}>{props.itemTopic}</Text>
                <Text style={{ fontSize: deviceHeight / 58, marginTop: 5 }}>{props.itemDes}</Text>
                <Text style={{ fontSize: deviceHeight / 58, marginTop: 5, color: '#aaa' }}>{"Available " + props.itemDate}</Text>
            </View>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        padding: 20,
        borderRadius: 20,
        shadowColor: '#bbb',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
    },
    codeContainer: {
        padding: 10,
        flex: 1,
        backgroundColor: '#fa5581',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    namePriceContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
});
export default notiItem;