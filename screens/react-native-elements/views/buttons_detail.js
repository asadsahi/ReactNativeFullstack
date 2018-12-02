
import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Platform } from 'react-native';

import { Text, Button, Icon } from 'react-native-elements';

import colors from '../config/colors';
import socialColors from '../config/socialColors';
import fonts from '../config/fonts';

class ButtonsDetail extends Component {
  render() {
    const { navigation } = this.props;

    return <Text>Buttons detail view</Text>;
  }
}

export default ButtonsDetail;
