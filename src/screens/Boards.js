import React from 'react';
import { View, Text } from 'react-native-web';
import { buildABoard, fetchBoards } from '../actions/BoardActions';

class Boards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      lastVisible: undefined,
    };
  }

  componentWillMount = () => {
    fetchBoards(this.state.lastVisible).then(({ results, lastVisible }) => {
      console.log(results);
      this.setState({
        boards: results,
        lastVisible,
        loading: false,
      });
    });
    //buildABoard({
    //  title: "What is the best movie you've ever seen 2",
    //  userName: 'anonymous',
    //});
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
        <Text>Hello</Text>
      </View>
    );
  };
}

export default Boards;
