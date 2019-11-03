import React, { Component } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity, Image, TextInput, Dimensions, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { ImagePicker, Permissions, Constants } from 'expo';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default class Profile extends React.Component {


    static navigationOptions = {
        title: 'Profile',
        headerStyle: {
            backgroundColor: '#f9eeee',
            borderBottomWidth: 0,
            elevation: 0
        },
        headerTintColor: '#000',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }

    state = {
        items: [
            { key: 0, menu: "Profile" },
            { key: 1, menu: "Address" },
            { key: 2, menu: "Languages" },
            { key: 3, menu: "Location" },
        ],
        image: null
    };

    askPermissionsAsync = async () => {
        await Permissions.askAsync(Permissions.CAMERA_ROLL);
        // you would probably do something to verify that permissions
        // are actually granted, but I'm skipping that for brevity
    };

    pickImage = async () => {
        await this.askPermissionsAsync();
        console.log('go to Image Picker')
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    };

    render() {
        let { image } = this.state;
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <SafeAreaView style={styles.safeArea}>
                    <KeyboardAwareScrollView
                        resetScrollToCoords={{ x: 0, y: 0 }}
                        contentContainerStyle={styles.container}
                        scrollEnabled={false}
                    >
                        <View style={styles.contentContainer}>
                            {image &&
                                <Image source={{ uri: image }} style={styles.profileImage} />}
                            <TouchableOpacity style={styles.editBtn} onPress={this.pickImage}>
                                <Text style={styles.editText}>EDIT</Text>
                            </TouchableOpacity>
                            <Text style={styles.nameText}>Name</Text>
                            <View style={styles.textInputContainer}>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Name"
                                    placeholderTextColor="#778899"
                                    autoCapitalize="none"
                                    onSubmitEditing={() => { this.emailtxtInput.focus(); }}
                                    returnKeyType="next" />
                            </View>
                            <Text style={styles.nameText}>Email</Text>
                            <View style={styles.textInputContainer}>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Email"
                                    placeholderTextColor="#778899"
                                    autoCapitalize="none"
                                    ref={(input) => { this.emailtxtInput = input; }}
                                    returnKeyType="done" />
                            </View>
                            <Text style={styles.nameText}>Gender</Text>
                            <View style={styles.textInputContainer}>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Gender"
                                    placeholderTextColor="#778899"
                                    autoCapitalize="none"
                                    returnKeyType="done" />
                            </View>
                            <Text style={styles.nameText}>BirthDay</Text>
                            <View style={styles.textInputContainer}>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="BirthDay"
                                    placeholderTextColor="#778899"
                                    autoCapitalize="none"
                                    returnKeyType="done" />
                            </View>
                            <Text style={styles.nameText}>Phone Number</Text>
                            <View style={styles.textInputContainer}>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Phone Number"
                                    placeholderTextColor="#778899"
                                    autoCapitalize="none"
                                    returnKeyType="done" />
                            </View>
                        </View>
                    </KeyboardAwareScrollView>
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
        backgroundColor: '#f9eeee',
        padding: 10
    },
    contentContainer: {
        width: '100%',
        height: '100%',
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
    profileImage: {
        borderRadius: deviceHeight / 16,
        height: deviceHeight / 8,
        width: deviceHeight / 8
    },
    editBtn: {
        marginTop: 10,
        padding: 10
    },
    editText: {
        fontSize: 15
    },
    textInputContainer: {
        padding: 10,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
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
        backgroundColor: "#f9eeee"
    }
})