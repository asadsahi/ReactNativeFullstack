import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Slider } from 'react-native-elements'
import { Permissions, Brightness } from 'expo';

export default class BrightnessScreen extends Component {
    state = {
        value: 1
    }

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.SYSTEM_BRIGHTNESS);
        if (status === 'granted') {
            const currentBrightness = await Brightness.getBrightnessAsync();
            this.setState({ value: currentBrightness });
            Brightness.setBrightnessAsync(currentBrightness);
        }
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
                <Slider value={this.state.value} onValueChange={this.updateBrightness} />
                <Text>Current brightness: {this.state.value}</Text>
            </View>
        )
    }

    updateBrightness = value => {
        this.setState({ value });
        Brightness.setBrightnessAsync(value);
    }
}
