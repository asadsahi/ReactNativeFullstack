import React, { Component } from 'react';
import { StyleSheet, Text, View, AsyncStorage, Alert } from 'react-native';
import { Input, Button } from 'react-native-elements'

export default class LoginScreen extends Component {
    static navigationOptions = {
        title: 'Sign In',
    };

    state = {
        email: '',
        password: '',
    };

    render() {
        return (
            <View>
                <View>
                    <Input onChangeText={email => this.setState({ email })}
                        placeholder="Email"
                        keyboardType="email-address"
                        returnKeyType="next"
                    />
                    <Input
                        onChangeText={(password) => this.setState({ password })}
                        placeholder="Password"
                        keyboardType="default"
                    />
                </View>
                <Button title='LOG IN' onPress={this._signInAsync} buttonStyle={{ elevation: 0 }} />
            </View>
        );
    }

    _signInAsync = async () => {
        const { email, password } = this.state;
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };

    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return re.test(email);
    }
}


const styles = StyleSheet.create({
});