import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const historyItem = props => (
    // onPress ==> MenuDetail

    <View>
        <View style={styles.listItem}>
            <View style = {styles.leftSection}>
                <Text style={styles.action}>{props.action}</Text>
                <Text style={styles.date}>{props.date}</Text>
            </View>
            <View style = {styles.rightSection}>
                <Text style={styles.points}>{props.points}</Text>
                <Text style={styles.unit}>{props.unit}</Text>
            </View>
        </View>
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
        flex: 3,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    rightSection: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    action: {
        fontSize: deviceHeight / 45,
        color: '#068f7d',
        fontWeight: 'bold'
    },
    date: {
        fontSize: deviceHeight / 55,
        marginTop: 20,
        color: '#d0bdbd'

    },
    points: {
        fontSize: deviceHeight / 45,
        color: '#ff3d3d',
    }, 
    unit: {
        fontSize: deviceHeight / 55,
        marginTop: 20,
    }
});
export default historyItem;