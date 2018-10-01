// @flow
import React from 'react';
import { View, Text, StyleSheet } from 'react-native-web';
import { Link } from 'react-router-dom';

type Item = {
  id: string,
  title: string,
};

const BoardItem = ({ item }: { item: Item }) => (
  <View style={styles.containerStyle}>
    <Link to={`/${item.id}/threads`}>
      <Text style={styles.linkStyle}>{item.title}</Text>
    </Link>
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
