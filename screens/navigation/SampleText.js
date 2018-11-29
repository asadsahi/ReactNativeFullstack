import React, { Component } from 'react';

import { StyleSheet, Text } from 'react-native';

const SampleText = ({ children }) => (
  <Text style={styles.sampleText}>{children}</Text>
);

export default SampleText;

const styles = StyleSheet.create({
  sampleText: {
    margin: 14,
  },
});
