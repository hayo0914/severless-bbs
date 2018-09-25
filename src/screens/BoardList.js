// @flow
import React, { Component } from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native-web';
import _ from 'lodash';

type Item = {
  id: number,
  title: string,
};

type Props = {
  itemList: Array<Item>,
  onEndReached: () => void,
};

class BoardList extends Component<Props> {
  keyExtractor(item: Item) {
    return item.id;
  }

  renderItem({ item }: { item: Item }) {
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
