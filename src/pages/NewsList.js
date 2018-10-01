// @flow
import React, { Component } from 'react';
import { View, Text, SectionList, Dimensions } from 'react-native-web';
import _ from 'lodash';
import { NewsItem } from '../components';

type News = {
  id: string,
  baseDate: string,
};

type Props = {
  newsList: Array<News>,
  onEndReached: () => void,
};

class NewsList extends Component<Props> {
  keyExtractor(item: News) {
    return item.id;
  }

  reshapeData(newsList: Array<News>) {
    const t = _.groupBy(newsList, v => v.baseDate);
    return _.map(Object.keys(t), key => ({
      baseDate: key,
      data: t[key],
    }));
  }

  renderItem({ item }: {item: News}) {
    return <NewsItem item={item} />;
  }

  renderSectionHeader({ section }: {section: {baseDate: string}}) {
    return (
      <View style={{ backgroundColor: '#8af', paddingVertical: 5 }}>
        <Text style={{ textAlign: 'center' }}>{section.baseDate}</Text>
      </View>
    );
  }

  render() {
    return (
      <SectionList
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        renderSectionHeader={this.renderSectionHeader}
        sections={this.reshapeData(this.props.newsList)}
        onEndReached={this.props.onEndReached}
        style={{
          height: Dimensions.get('window').height,
        }}
      />
    );
  }
}

export default NewsList;
