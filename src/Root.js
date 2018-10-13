import React from 'react';
import Boards from './pages/Boards';
import Threads from './pages/Threads';
import { Container, Content } from 'native-base';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class Root extends React.Component {
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

export default Root;
