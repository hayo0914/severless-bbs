import React from 'react';
import { View, Text } from 'react-native-web';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import _ from 'lodash';
import NewsList from '../screens/NewsList';

const NEWS_LIST_QUERY = gql`
  query($startAt: String) {
    newsList
      @rtdbQuery(
        ref: "newsList"
        type: "NewsList"
        orderByChild: "sortKey"
        startAt: $startAt
        limitToFirst: 10
      )
      @array {
      id @key
      baseDate
      link
      name
      pubDate
      summary
      title
      sortKey
    }
  }
`;

export default () => (
  <View>
    <Query
      query={NEWS_LIST_QUERY}
      variables={{ startAt: Number.MIN_SAFE_INTEGER }}
      fetchPolicy="cache-and-network"
    >
      {({ data, fetchMore }) => {
        const { newsList } = data;
        if (newsList === undefined) {
          return <Text>Loading...</Text>;
        }
        if (newsList.length === 0) {
          return <Text>Error!</Text>;
        }
        return (
          <NewsList
            newsList={newsList}
            onEndReached={() =>
              fetchMore({
                variables: { startAt: _.last(newsList).sortKey + 1 },
                updateQuery: (prev, { fetchMoreResult }) => {
                  if (
                    !fetchMoreResult ||
                    fetchMoreResult.newsList.length === 0
                  ) {
                    return prev;
                  }
                  if (
                    _.last(fetchMoreResult.newsList).id ===
                    _.last(prev.newsList).id
                  ) {
                    // avoid duplication
                    return prev;
                  }
                  return Object.assign({}, prev, {
                    newsList: [...prev.newsList, ...fetchMoreResult.newsList],
                  });
                },
              })
            }
          />
        );
      }}
    </Query>
  </View>
);
