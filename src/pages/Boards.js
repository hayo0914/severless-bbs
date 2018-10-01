import React from 'react';
import { View } from 'react-native-web';
import { fetchBoards } from '../actions/BoardActions';
import BoardList from '../components/BoardList';
import { Button, Text } from 'native-base';

class Boards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      lastVisible: undefined,
      boards: undefined,
    };
  }

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
      return (
        <View>
          <Text>Loading</Text>
        </View>
      );
    }
    return (
      <View>
        <View style={{ padding: 5 }}>
          <Button light small>
            <Text>Build a Board</Text>
          </Button>
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
