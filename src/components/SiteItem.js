import React from 'react';
import { View, Text, StyleSheet } from 'react-native-web';
import { Link } from './Link';

const SiteItem = ({ item }) => (
  <View style={styles.containerStyle}>
    <Text style={styles.nameStyle}>{item.name}</Text>
    <Link href={item.url} style={styles.urlStyle}>
      <Text style={styles.linkStyle}>{item.url}</Text>
    </Link>
  </View>
);

const styles = StyleSheet.create({
  containerStyle: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white',
  },
  nameStyle: {
    fontWeight: 'bold',
  },
  urlStyle: {
    color: '#286EB4',
  },
});

export { SiteItem };
