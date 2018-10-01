import React, { Component } from 'react';
import { View, Text } from 'react-native-web';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { RkCard, RkTextInput, RkButton } from 'react-native-ui-kitten';

const ADD_BLOG = gql`
  fragment BlogInput on firebase {
    id: String
    name: String
  }
  mutation($ref: string, $input: BlogInput!) {
    pushdata(input: $input) @rtdbPush(ref: $ref) {
      id
      name
    }
  }
`;

class Blog extends Component {
  state = {
    name: '',
    url: '',
    successMessage: '',
    errorMessage: '',
  };

  render() {
    const { name, url } = this.state;
    return (
      <Mutation
        mutation={ADD_BLOG}
        onCompleted={data => {
          this.setState({
            successMessage: `Success !: ${data.pushdata.name}`,
            name: '',
            url: '',
          });
        }}
        onError={() => {
          this.setState({ errorMessage: 'Error !' });
        }}
      >
        {(addBlog, { data }) => (
          <View style={{ backgroundColor: 'gray', flex: 1 }}>
            <RkCard style={{ margin: 10 }}>
              <View rkCardHeader>
                <Text>New Blog</Text>
              </View>
              <View rkCardContent>
                <RkTextInput
                  placeholder="Blog Name"
                  onChangeText={name => this.setState({ name })}
                  value={name}
                />
                <RkTextInput
                  placeholder="Feed Url"
                  onChangeText={url => this.setState({ url })}
                  value={url}
                />
                <RkButton
                  style={{ alignSelf: 'center' }}
                  onPress={() => {
                    this.setState({
                      successMessage: '',
                      errorMessage: '',
                    });
                    addBlog({
                      variables: {
                        ref: '/sites',
                        input: {
                          url,
                          name,
                        },
                      },
                    });
                  }}
                >
                  Add it !
                </RkButton>
                <Text style={styles.successMessage}>
                  {this.state.successMessage}
                </Text>
              </View>
            </RkCard>
          </View>
        )}
      </Mutation>
    );
  }
}

const styles = {
  successMessage: {
    color: 'green',
  },
  errorMessage: {
    color: 'red',
  },
};

export default Blog;
