import React, { Component } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { TextInput, Button, Image, View, StyleSheet, TouchableOpacity, Text, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard } from 'react-native'

class SignUp extends React.Component {

    static navigationOptions = {
        title: 'SignUp',
    };

    state = {
        email: "", password: "password", rePassword: "", username: ""
    }

    handleEmail = (text) => {
        this.setState({ email: text })
    }
    handleUsername = (text) => {
        this.setState({ username: text })
    }
    handleRePassword = (text) => {
        this.setState({ rePassword: text })
    }
    handlePassword = (text) => {
        this.setState({ password: text })
    }

    showSignUpInfo = () => {

        console.log(this.state.username)
        console.log(this.state.password)
        console.log(this.state.rePassword)
        console.log(this.state.email)

        if (this.state.rePassword !== this.state.password) {
            alert('Password is not match with your confirm password.');
        }
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <KeyboardAwareScrollView
                    resetScrollToCoords={{ x: 0, y: 0 }}
                    contentContainerStyle={styles.container}
                    scrollEnabled={true}
                >
                    <Image style={styles.bg} source={require('../src/images/cookies.jpg')} />

                    <Image style={styles.marginlogo} source={require('../src/images/logo.png')} resizeMode={'contain'} />


                    <View style={styles.textInputContainer}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Username"
                            returnKeyType='next'
                            autoCapitalize= "none"
                            onSubmitEditing={() => { this.passwordtxtInput.focus(); }}
                            onChangeText={(text) => this.handleUsername(text)}
                            blurOnSubmit={false} // prevent keyboard flickering when onSubmitEditing
                        />
                    </View>
                    <View style={styles.textInputContainer}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Password"
                            returnKeyType='next'
                            secureTextEntry={true}
                            autoCapitalize= "none"
                            ref={(input) => { this.passwordtxtInput = input; }}
                            onChangeText={(text) => this.handlePassword(text)}
                        />
                    </View>
                    <View style={styles.textInputContainer}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Confirm Password"
                            returnKeyType='next'
                            secureTextEntry={true}
                            autoCapitalize= "none"
                            onSubmitEditing={() => { this.emailtxtInput.focus(); }}
                            onChangeText={(text) => this.handleRePassword(text)}
                            blurOnSubmit={false} // prevent keyboard flickering when onSubmitEditing
                        />
                    </View>
                    <View style={styles.textInputContainer}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Email"
                            returnKeyType='done'
                            autoCapitalize= "none"
                            ref={(input) => { this.emailtxtInput = input; }}
                            onChangeText={(text) => this.handleEmail(text)}
                            keyboardType = 'email-address'
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.submit}
                        underlayColor='#fff'
                        onPress={this.showSignUpInfo}
                    >
                        <Text style={[20, styles.submitText]}>Submit</Text>
                    </TouchableOpacity>
                </KeyboardAwareScrollView>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#aaa',

    },
    marginlogo: {
      
    },
    bg: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    textInputContainer: {
        justifyContent: 'center',
        backgroundColor: '#fff',
        width: '80%',
        height: 50,
        borderRadius: 10,
        marginTop: 10,
        opacity: 0.9,
    },
    textInput: {
        width: "100%",
        height: "100%",
        margin: 10,
        fontSize: 15
    },
    submit: {
        width: '80%',
        height: 50,
        marginTop: 10,
        backgroundColor: '#000',
        borderRadius: 10,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,

    },
    submitText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 15
    }


})
export default SignUp;