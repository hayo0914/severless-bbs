import React from 'react';
import Boards from './Boards';
import { Container, Content } from 'native-base';
import { BrowserRouter, Route } from 'react-router-dom';

class Home extends React.Component {
  render = () => {
    return (
      <Container>
        <Content style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
          <BrowserRouter>
            <Route exact path="/" component={Boards} />
          </BrowserRouter>
        </Content>
      </Container>
    );
  };
}

export default Home;
