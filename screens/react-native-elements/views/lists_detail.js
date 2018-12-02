
import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Platform } from 'react-native';

import { Text, Button, Icon, Card } from 'react-native-elements';

import colors from '../config/colors';
import socialColors from '../config/socialColors';
import fonts from '../config/fonts';

class IconsDetail extends Component {
  ratingCompleted(rating) {
    console.log('Rating is: ' + rating);
  }

  render() {
    const { navigation } = this.props;

    return (
      <Card
        title="RATINGS"
        containerStyle={{ marginTop: 15, marginBottom: 15 }}
      />
    );
  }
}

export default IconsDetail;
