// @flow
import React from 'react';
import { View, Text, StyleSheet } from 'react-native-web';

type Item = {
  title: string,
};

const BoardItem = ({ item }: { item: Item }) => (
  <View style={styles.containerStyle}>
    <Text style={styles.linkStyle}>{item.title}</Text>
  </View>
);

const styles = StyleSheet.create({
  containerStyle: {
    padding: 10,
  },
  linkStyle: {
    color: '#0000ff',
    textDecorationLine: 'underline',
  },
});

export { BoardItem };
