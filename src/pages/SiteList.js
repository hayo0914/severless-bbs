import React from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native-web';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import _ from 'lodash';
import { SiteItem } from '../components';

const SITE_LIST_QUERY = gql`
  query($startAt: String) {
    siteList
      @rtdbQuery(
        ref: "sites"
        type: "Sites"
        orderByChild: "name"
        startAt: $startAt
        limitToFirst: 10
      )
      @array {
      name
      url
    }
  }
`;

export default () => (
  <View>
    <Query
      query={SITE_LIST_QUERY}
      variables={{ startAt: ' ' }}
      fetchPolicy="cache-and-network"
    >
      {({ data, fetchMore }) => {
        const { siteList } = data;
        if (siteList === undefined) {
          return <Text>Loading...</Text>;
        }
        if (siteList.length === 0) {
          return <Text>Error!</Text>;
        }
        return (
          <FlatList
            data={siteList}
            keyExtractor={item => item.name}
            renderItem={({ item }) => <SiteItem item={item} />}
            onEndReached={() => {
              fetchMore({
                variables: { startAt: _.last(siteList).name + '_' },
                updateQuery: (prev, { fetchMoreResult }) => {
                  if (
                    !fetchMoreResult ||
                    fetchMoreResult.siteList.length === 0
                  ) {
                    return prev;
                  }
                  if (
                    _.last(fetchMoreResult.siteList).name ===
                    _.last(prev.siteList).name
                  ) {
                    // avoid duplication
                    return prev;
                  }
                  return Object.assign({}, prev, {
                    siteList: [...prev.siteList, ...fetchMoreResult.siteList],
                  });
                },
              });
            }}
            style={{
              height: Dimensions.get('window').height,
            }}
          />
        );
      }}
    </Query>
  </View>
);
