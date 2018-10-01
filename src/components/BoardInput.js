// @flow
import React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native-web';
import { Button } from 'native-base';

const BoardInput = () => {
  const { inputStyle, containerStyle, buttonStyle, buttonTextStyle } = styles;
  return (
    <View style={containerStyle}>
      <TextInput placeholder="New Board Title" style={inputStyle} />
      <TextInput
        placeholder="User Name"
        style={[inputStyle, { marginTop: 5 }]}
      />
      <TextInput
        placeholder="Comment"
        style={[inputStyle, { height: 120, marginTop: 5 }]}
        multiline
      />
      <Button style={buttonStyle}>
        <Text style={buttonTextStyle}>Create</Text>
      </Button>
    </View>
  );
};

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
    placeholderColor: '#ccc',
    height: 32,
  },
});

export { BoardInput };
