import React, { Component } from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native';
import { Button, Text } from 'native-base';

export default class SignInScreen extends Component {
    
    static navigationOptions = {
        title: 'Please sign in',
    };

    render() {
        return (
            <View style={styles.container}>
                <Button primary onPress={this._signInAsync}>
                    <Text>Sing in</Text>
                </Button>
            </View>
        );
    }

    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});