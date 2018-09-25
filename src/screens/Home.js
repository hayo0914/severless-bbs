import React from 'react';
import { View, Dimensions } from 'react-native-web';
import Boards from './Boards';
import { Container, Content, Button, Text } from 'native-base';

class Home extends React.Component {
  render = () => {
    return (
      <Container>
        <Content style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              alignSelf: 'stretch',
            }}
          >
            <Boards />
          </View>
        </Content>
      </Container>
    );
  };
}

export default Home;
