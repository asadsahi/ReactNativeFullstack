import React, { Component } from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native';
import { Button, Icon } from 'react-native-elements';

export default class SignInScreen extends Component {

    static navigationOptions = {
        title: 'Sign In',
    };

    render() {
        return (
            <View style={styles.signinContainer}>
                <Button title="SIGN IN"
                    buttonStyle={styles.signinButton}
                    onPress={this._signInAsync}
                    icon={
                        <Icon name='login' type='material-community' color='white' />
                    } />
            </View>
        );
    }

    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };
}

const styles = StyleSheet.create({
    signinContainer: {
        alignItems: 'center',
    },
    signinButton: {
        marginVertical: 10,
        borderRadius: 30,
        height: 50,
        width: 250,
    },
});