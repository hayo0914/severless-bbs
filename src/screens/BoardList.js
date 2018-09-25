// @flow
import React, { Component } from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native-web';
import { BoardItem } from '../components';
import _ from 'lodash';

type Item = {
  id: string,
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
    return <BoardItem item={item} />;
  }

  render() {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        data={this.props.itemList}
        onEndReached={this.props.onEndReached}
        style={{
          flex: 1,
        }}
      />
    );
  }
}

export default BoardList;
