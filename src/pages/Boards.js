import React from 'react';
import { View } from 'react-native-web';
import { createBoard, fetchBoards } from '../actions/BoardActions';
import { BoardList, Loading, BoardForm } from '../components';
import { Button, Text } from 'native-base';

class Boards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      lastVisible: undefined,
      boards: undefined,
      showBoardForm: false,
    };
  }

  onCreateBoardButtonPressed = () => {
    this.setState({
      showBoardForm: !this.state.showBoardForm,
    });
  };

  onBoardFormSubmit = ({ title, userName, comment }) => {
    createBoard({ title, userName, comment });
  };

  componentWillMount = () => {
    fetchBoards(this.state.lastVisible).then(({ results, lastVisible }) => {
      this.setState({
        boards: results,
        lastVisible,
        loading: false,
      });
    });
  };

  render = () => {
    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <View>
        <View style={{ padding: 5 }}>
          <Button
            light
            small
            onPress={this.onCreateBoardButtonPressed.bind(this)}
          >
            <Text>Create a Board</Text>
          </Button>
          {this.state.showBoardForm && (
            <BoardForm onSubmit={this.onBoardFormSubmit.bind(this)} />
          )}
        </View>
        <BoardList
          itemList={this.state.boards}
          onEndReached={() => {
            console.log('On End Reached');
          }}
        />
      </View>
    );
  };
}

export default Boards;
