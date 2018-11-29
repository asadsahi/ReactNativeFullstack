import React, { Component } from 'react';
import { Text } from 'react-native';

export class StyledText extends Component {
  render() {
    return <Text {...this.props} style={[this.props.style]} />;
  }
}
