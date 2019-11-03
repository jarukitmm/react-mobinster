import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const myOrderDetailItem = props => (
    // onPress ==> MenuDetail

    <View>
        <View style={styles.listItem}>
            <View style={styles.nameContainer}>
                <Text style={{ fontSize: deviceHeight / 60, color: '#000' }}>{props.name}</Text>
            </View>
            <View style={styles.amountContainer}>
                <Text style={{ fontSize: deviceHeight / 60, color: '#000' }}>{props.amount}</Text>
            </View>
            <View style={styles.priceContainer}>
                <Text style={{ fontSize: deviceHeight / 60, color: '#000' }}>{(props.price * props.amount).toLocaleString(navigator.language, { maximumFractionDigits: 0 }) }</Text>
            </View>


        </View>
    </View>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        padding: deviceHeight / 100,
        justifyContent: 'center'
    },
    nameContainer: {
        flex: 1,
    },
    amountContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    },
    priceContainer: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: 'center'
    }
});
export default myOrderDetailItem;