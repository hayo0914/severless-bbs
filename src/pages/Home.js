import React from 'react';
import Boards from './Boards';
import Threads from './Threads';
import { Container, Content } from 'native-base';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class Home extends React.Component {
  render = () => {
    return (
      <Container>
        <Content style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Boards} />
              <Route exact path="/:boardId/threads" component={Threads} />
            </Switch>
          </BrowserRouter>
        </Content>
      </Container>
    );
  };
}

export default Home;
