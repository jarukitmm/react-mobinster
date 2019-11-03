import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const myOrderItem = props => (
    // onPress ==> MenuDetail

    <View>
        <TouchableOpacity style={styles.listItem} onPress={props.OnItemPressed}>
            <View style={styles.leftSection}>
                <Text style={styles.orderId}>Order ID: {props.orderId}</Text>
                <Text style={styles.date}>Date: {props.date}</Text>
            </View>

            <View style={styles.rightSection}>
                {props.status === 1 &&
                    <Text style={styles.confirm}>Status: Confirmed</Text>
                }
                {props.status === 2 &&
                    <Text style={styles.waiting}>Status: Waiting</Text>
                }
                {props.status === 3 &&
                    <Text style={styles.edit}>Status: Edited</Text>
                }
                {props.status === 4 &&
                    <Text style={styles.cancel}>Status: Canceled</Text>
                }
                {props.status === 5 &&
                    <Text style={styles.deliver}>Status: Delivered</Text>
                }
                <Text style={styles.time}>Time: {props.time}</Text>
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
        padding: 20,
        borderRadius: 20,
        shadowColor: '#bbb',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
    },
    leftSection: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    rightSection: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    orderId: {
        fontSize: deviceHeight / 50,
        color: '#000',
        fontWeight: 'bold'

    },
    date: {
        fontSize: deviceHeight / 60,
        marginTop: 20,
        color: '#d0bdbd'

    },
    waiting: {
        fontSize: deviceHeight / 50,
        color: '#42a6aa',
    },
    confirm: {
        fontSize: deviceHeight / 50,
        color: '#098a4a',
    },
    edit: {
        fontSize: deviceHeight / 50,
        color: '#7a42aa',
    },
    cancel: {
        fontSize: deviceHeight / 50,
        color: '#ff3d3d',
    },
    deliver: {
        fontSize: deviceHeight / 50,
        color: '#aa4242',
    },
    time: {
        fontSize: deviceHeight / 60,
        marginTop: 20,
    }
});
export default myOrderItem;