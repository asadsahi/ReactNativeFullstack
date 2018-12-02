
import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Platform } from 'react-native';

import { Text, Button, Icon } from 'react-native-elements';

import colors from '../config/colors';
import socialColors from '../config/socialColors';
import fonts from '../config/fonts';

class FontsDetail extends Component {
  render() {
    const { navigation } = this.props;

    return <Text>Fonts detail view</Text>;
  }
}

export default FontsDetail;
