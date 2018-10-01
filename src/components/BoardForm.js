// @flow
import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native-web';
import { Button } from 'native-base';

type Props = {
  onSubmit: ({ title: string, userName: string, comment: string }) => void,
  title: string,
  userName: string,
  comment: string,
};

type State = {
  title: string,
  userName: string,
  comment: string,
};

class BoardForm extends Component<Props, State> {
  state = {
    title: '',
    userName: 'Anonymous',
    comment: '',
  };

  onSubmit = () => {
    const { title, userName, comment } = this.state;
    this.props.onSubmit({ title, userName, comment });
  };

  render() {
    const { inputStyle, containerStyle, buttonStyle, buttonTextStyle } = styles;
    const { title, userName, comment } = this.state;
    return (
      <View style={containerStyle}>
        <TextInput
          placeholder="New Board Title"
          style={inputStyle}
          value={title}
          onChangeText={title => {
            this.setState({ title });
          }}
        />
        <TextInput
          placeholder="User Name"
          style={[inputStyle, { marginTop: 5 }]}
          value={userName}
          onChangeText={userName => {
            this.setState({ userName });
          }}
        />
        <TextInput
          placeholder="Comment"
          style={[inputStyle, { height: 120, marginTop: 5 }]}
          multiline
          value={comment}
          onChangeText={comment => {
            this.setState({ comment });
          }}
        />
        <Button style={buttonStyle} onPress={this.onSubmit.bind(this)}>
          <Text style={buttonTextStyle}>Create</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    paddingVertical: 5,
  },
  buttonStyle: {
    paddingHorizontal: 20,
    marginTop: 5,
  },
  buttonTextStyle: {
    color: '#fff',
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 10,
    height: 32,
  },
});

export { BoardForm };
