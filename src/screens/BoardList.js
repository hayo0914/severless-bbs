// @flow
import React, { Component } from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native-web';
import _ from 'lodash';

class BoardList extends Component {
  keyExtractor(item) {
    return item.id;
  }

  renderItem({ item }) {
    return <Text>{item.title}</Text>;
  }

  render() {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        data={this.props.itemList}
        onEndReached={this.props.onEndReached}
        style={{
          height: Dimensions.get('window').height,
        }}
      />
    );
  }
}

export default BoardList;
