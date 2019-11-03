//jarukit
import React, { Component } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity, Image, TextInput, Dimensions, Keyboard, TouchableWithoutFeedback, Platform } from 'react-native';
import colors from '../../src/color/color';
import IconE from 'react-native-vector-icons/EvilIcons';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default class AddrdataAdd extends React.Component {


    static navigationOptions = {
        title: 'Address',
        headerStyle: {
            backgroundColor: colors.color1,
            borderBottomWidth: 0,
            elevation: 0
        },
        headerTintColor: '#000',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }

    state = {
        content:{
            name: '',
            phone: '',
            address: '',
            province: '',
            district: '',
            postalcode: '',
        }
    };

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <SafeAreaView style={styles.safeArea}>
                    <KeyboardAwareScrollView
                        resetScrollToCoords={{ x: 0, y: 0 }}
                        contentContainerStyle={styles.container}
                        scrollEnabled={false}
                    >
                        <View style={styles.contentContainer}>
                            <Text style={styles.nameText}>Name</Text>
                            <View style={styles.textInputContainer}>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder= ''
                                    placeholderTextColor="#778899"
                                    autoCapitalize="none"
                                    onSubmitEditing={() => { this.emailtxtInput.focus(); }}
                                    returnKeyType="next" />
                                <IconE name="pencil" style={styles.editicon}/>
                            </View>
                            <Text style={styles.nameText}>Phone Number</Text>
                            <View style={styles.textInputContainer}>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder= ''
                                    placeholderTextColor="#778899"
                                    autoCapitalize="none"
                                    returnKeyType="done" />
                                <IconE name="pencil" style={styles.editicon}/>    
                            </View>
                            <Text style={styles.nameText}>Address</Text>
                            <View style={styles.textInputContainer}>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder=''
                                    placeholderTextColor="#778899"
                                    autoCapitalize="none"
                                    returnKeyType="done" />
                                <IconE name="pencil" style={styles.editicon}/>
                            </View>
                            <Text style={styles.nameText}>Province</Text>
                            <View style={styles.textInputContainer}>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder=''
                                    placeholderTextColor="#778899"
                                    autoCapitalize="none"
                                    returnKeyType="done" />
                                <IconE name="pencil" style={styles.editicon}/>
                            </View>
                            <Text style={styles.nameText}>District</Text>
                            <View style={styles.textInputContainer}>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder=''
                                    placeholderTextColor="#778899"
                                    autoCapitalize="none"
                                    returnKeyType="done" />
                                <IconE name="pencil" style={styles.editicon}/>
                            </View>
                            <Text style={styles.nameText}>Postal Code</Text>
                            <View style={styles.textInputContainer}>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder=''
                                    placeholderTextColor="#778899"
                                    autoCapitalize="none"
                                    returnKeyType="done" />
                                <IconE name="pencil" style={styles.editicon}/>
                            </View>
                        </View>
                    </KeyboardAwareScrollView>
                            <TouchableOpacity
                                underlayColor="grey"
                                style={styles.SubmitButton}
                                onPress={this._toggleModal}
                            >
                                <Text style={styles.SubmitText}>SUBMIT</Text>
                            </TouchableOpacity>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.color1,
        paddingLeft: 10,
        paddingRight: 10,
    },
    contentContainer: {
        width: '100%',
        height: '85%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,
        shadowColor: '#888',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 4,
    },
    textInputContainer: {
        padding: 10,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    editicon:{
        fontSize: 25,
    },
    textInput: {
        width: '100%',
        fontSize: 15
    },
    nameText: {
        fontSize: 15,
        width: '100%',
        marginTop: 10,
        fontWeight: 'bold'
    },
    safeArea: {
        flex: 1,
        backgroundColor: colors.color1
    },
    SubmitButton: {
        alignItems: "center", 
        borderRadius: 20,
        marginLeft: Dimensions.get('screen').width*0.2,
        marginRight: Dimensions.get('screen').width*0.2,
        paddingTop: 10,
        paddingBottom: Platform.OS === "ios" ? 20 : 18,
        marginBottom: Platform.OS === "ios" ? deviceHeight*0.02 : deviceHeight*0.01,
        backgroundColor: "black",
    },
    SubmitText: {
        margin: 0,
        height: 20,
        color: "white",
        fontSize: Platform.OS === "ios" ? 20 : Dimensions.get('screen').height*0.02,
    },
})