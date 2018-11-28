import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { LocalAuthentication } from 'expo';
import Button from '../../components/Button';

export default class LocalAuthenticationScreen extends React.Component {
  static navigationOptions = {
    title: 'LocalAuthentication',
  };

  state = {
    waiting: false,
    hasHardware: null,
    isEnrolled: null,
  };

  componentDidMount() {
    this.checkDevicePossibilities();
  }

  async checkDevicePossibilities() {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    const isEnrolled = await LocalAuthentication.isEnrolledAsync();

    this.setState({ hasHardware, isEnrolled });
  }

  authenticate = async () => {
    this.setState({ waiting: true });
    try {
      let result = await LocalAuthentication.authenticateAsync('This message only shows up on iOS');
      if (result.success) {
        alert('Authenticated!');
      } else {
        alert('Failed to authenticate');
      }
    } finally {
      this.setState({ waiting: false });
    }
  };

  checkAuthenticationsTypes = async () => {
    const result = await LocalAuthentication.supportedAuthenticationTypesAsync();
    const stringResult = result.map(type => {
      switch (type) {
        case LocalAuthentication.AuthenticationType.FINGERPRINT:
          return 'FINGERPRINT';
        case LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION:
          return 'FACIAL_RECOGNITION';
        default:
          throw new Error(`Unrecognised authentication type returned: '${type}'`);
      }
    }).join(', ');
    alert(stringResult ? `Available types: ${stringResult}` : 'No available authentication types!');
  };

  render() {
    const { hasHardware, isEnrolled } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ paddingBottom: 30 }}>
          <Text>
            LocalAuthentication.hasHardwareAsync():
            <Text style={{ fontWeight: 'bold' }}>{` ${hasHardware}`}</Text>
          </Text>
          <Text>
            LocalAuthentication.isEnrolledAsync():
            <Text style={{ fontWeight: 'bold' }}>{` ${isEnrolled}`}</Text>
          </Text>
        </View>
        <Button
          onPress={this.authenticate}
          title={this.state.waiting ? 'Waiting for authentication... ' : 'Authenticate'}
        />
        <Button
          onPress={this.checkAuthenticationsTypes}
          title="Check aunthentications types available on the device"
        />
      </View>
    );
  }
}
