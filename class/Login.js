import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import { Facebook } from 'expo';
import { Google } from 'expo';
import navigation from 'react-navigation'
// import { AppAuth } from 'expo-app-auth';
// import { GoogleSignIn } from 'expo-google-sign-in';

// const clientId = '214262655833-9m3s8g71hf8kq07goppr0rjmden865ib.apps.googleusercontent.com';
// const { type, accessToken, user } = await Google.logInAsync({ clientId });

state = {
    email: '', password: '', signedIn: false, name: "", photoUrl: ""
}

handleEmail = (text) => {
    this.setState({ email: text })
}
handlePassword = (text) => {
    this.setState({ password: text })
}

class LoginScreen extends React.Component {

    static navigationOptions = {
        title: 'Login',
        header: null
    };

    simpleAlertHandler = () => {
        //function to make simple alert
        alert('Hello I am Simple Alert');
    }

    fbLogIn = async () => {
        try {
            const {
                type,
                token,
                expires,
                permissions,
                declinedPermissions,
            } = await Facebook.logInWithReadPermissionsAsync('426916704377647', {
                permissions: ['public_profile', 'email'], behavior: 'native'
            });
            if (type === 'success') {
                // Get the user's name using Facebook's Graph API
                const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
                Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`, [

                    { text: 'Login', onPress: () => this.props.navigation.navigate('Main') }
                ]);

            } else {
                // type === 'cancel'
            }
        } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
        }
    }

    ggSignIn = async () => {
        try {
            const { type, accessToken, user } = await Google.logInAsync({
                behavior: 'web',
                iosClientId: '214262655833-ebl7jlc3rt0nfkkaelkimno5am83pjcl.apps.googleusercontent.com',
                androidClientId: '214262655833-ebl7jlc3rt0nfkkaelkimno5am83pjcl.apps.googleusercontent.com',
                scopes: ['profile', 'email']
            });
            if (type === "success") {
                Alert.alert('Logged in!', `Hi ${user.name}!`, [

                    { text: 'Login', onPress: () => this.props.navigation.navigate('Main') }
                ]);
            } else {
                console.log("cancelled")
            }
        } catch (e) {
            console.log("error", e)
        }
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <SafeAreaView style={styles.safeArea}>
                    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>

                        <Image style={styles.bg} source={require('../src/images/cookies.jpg')} />
                        <Image style={styles.marginlogo} source={require('../src/images/logo.png')} />

                        <View style={styles.section2}>

                            <Image style={styles.bgbtn} source={require('../src/images/rectangle.png')} />
                            <TouchableOpacity onPress={this.fbLogIn} style={styles.FacebookStyle} activeOpacity={0.5}>
                                <Image
                                    source={require('../src/images/facebook.png')}
                                />
                            </TouchableOpacity>

                            {/* <TouchableOpacity onPress={this.ggSignIn} style={styles.GoogleStyle} activeOpacity={0.5}> */}
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Main')} style={styles.GoogleStyle} activeOpacity={0.5}>
                                <Image
                                    source={require('../src/images/google.png')}
                                />
                            </TouchableOpacity>

                            <View style={styles.margintext} >
                                <Text style={styles.margintext} >Or</Text>
                            </View>

                            < View style={styles.textInputContainer}>
                                <TextInput style={styles.input}
                                    underlineColorAndroid="transparent"
                                    placeholder="Email"
                                    keyboardType="email-address"
                                    returnKeyType="done"
                                    placeholderTextColor="#778899"
                                    autoCapitalize="none"
                                    onChangeText={this.props.handleEmail}
                                />
                            </View>

                            < View style={styles.textInputContainer}>
                                <TextInput style={styles.input}
                                    underlineColorAndroid="transparent"
                                    placeholder="Password"
                                    placeholderTextColor="#778899"
                                    autoCapitalize="none"
                                    returnKeyType="done"
                                    secureTextEntry={true}
                                    onChangeText={this.props.handlePassword}
                                />
                            </View>

                            <TouchableOpacity onPress={this.simpleAlertHandler} style={styles.SigninStyle} activeOpacity={0.5}>
                                <Image
                                    source={require('../src/images/signin.png')}
                                />
                            </TouchableOpacity>


                            <View style={styles.row}>
                                <View style={styles.account}>
                                    <Text style={styles.account}>Don’t have an account?</Text>
                                </View>
                                <View style={styles.signup}>
                                    <Text style={styles.signup} onPress={() => this.props.navigation.navigate('SignUp')}>   Sign up here</Text>
                                </View>
                            </View>

                        </View>

                        <View style={styles.privacy} >
                            <Text style={styles.privacy} >Terms of Service   and   Privacy Policy</Text>
                        </View>

                    </KeyboardAvoidingView>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',

    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        color: '#FFFFFF',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#000000',
        marginBottom: 10,
        marginTop: 10,
    },

    bg: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        width: '100%',
        height: '100%',
    },

    marginbutton: {
        margin: 5,
        marginRight: 50,
        marginLeft: 50,
        height: 41,
        width: 280,
        borderRadius: 20,
    },

    textInputContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        width: 280,
        height: 41,
        borderRadius: 10,
        marginTop: 10,
        padding: 10
    },

    input: {
        fontSize: 15,
        margin: 10,
        height: "100%",
        width: "100%",
    },

    margintext: {
        textAlign: 'center',
        color: '#778899',
        margin: 3,
        fontSize: 15,

    },

    GoogleStyle: {
        flexDirection: 'row',
        alignItems: 'stretch',
        backgroundColor: 'transparent',
        borderWidth: 0.5,
        borderColor: 'transparent',
        height: 41,
        borderRadius: 5,
        margin: 5,
        marginRight: 50,
        marginLeft: 50,

    },
    FacebookStyle: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'stretch',
        backgroundColor: 'transparent',
        borderWidth: 0.5,
        borderColor: 'transparent',
        height: 41,
        borderRadius: 5,
        margin: 5,
        marginRight: 50,
        marginLeft: 50,

    },

    bgbtn: {
        position: 'absolute',
        width: 331,
        height: 350,
        borderRadius: 20,
    },

    marginlogo: {
        marginBottom: 50,
    },

    whiteView: {
        backgroundColor: '#000',
        width: 5,
        height: 41

    },
    section2: {
        width: 331,
        height: 350,
        alignItems: 'center',
    },

    row: {
        flexDirection: 'row',
        margin: 5,
    },

    safeArea: {
        flex: 1,
        backgroundColor: "#eee"
    },

    signup: {
        color: 'green'
    },
    account: {
        color: 'black',
        alignItems: 'flex-end',
    },

    privacy: {
        color: 'black',
        bottom: 5,
        position: 'absolute',
        alignItems: 'center',
    },

    SigninStyle: {
        flexDirection: 'row',
        alignItems: 'stretch',
        backgroundColor: 'transparent',
        borderWidth: 0.5,
        borderColor: 'transparent',
        height: 41,
        borderRadius: 5,
        margin: 5,
        marginRight: 50,
        marginLeft: 50,
    },

});

export default LoginScreen;