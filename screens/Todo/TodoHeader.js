import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class TodoHeader extends Component {
  render() {
    const { children } = this.props;
    return (
      <View>
        <Text style={styles.title}>{children}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'skyblue',
    padding: 15,
  },
  title: {
    textAlign: 'center',
    color: 'white',
  },
});