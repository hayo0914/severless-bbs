import React from 'react';
import { View, Dimensions, Text, StyleSheet } from 'react-native-web';
import { connect } from 'react-redux';
import { createBoard } from '../actions/BoardActions';
import { BoardList, Loading, BoardForm } from '../components';
import { Button } from 'native-base';
import { FETCH_BOARDS_REQUEST } from '../actions/types';

class Boards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const type = FETCH_BOARDS_REQUEST;
    const { dispatch, firebase } = this.props;
    dispatch({
      type,
      paylode: { lastVisibleBoard: firebase.lastVisibleBoard },
    });
  };

  render = () => {
    if (this.props.firebase.loadingBoards) {
      return <Loading />;
    }
    return (
      <View style={{ height: Dimensions.get('window').height }}>
        <View style={{ padding: 5 }}>
          <Button
            light
            small
            onPress={this.onCreateBoardButtonPressed.bind(this)}
            style={styles.buttonStyle}
          >
            <Text>CREATE A NEW BOARD</Text>
          </Button>
          {this.state.showBoardForm && (
            <BoardForm onSubmit={this.onBoardFormSubmit.bind(this)} />
          )}
        </View>
        <BoardList
          itemList={this.props.firebase.boards}
          onEndReached={() => {
            console.log('On End Reached');
          }}
        />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  buttonStyle: {
    paddingHorizontal: 20,
    marginTop: 5,
  },
});

const mapStateToProps = state => {
  return {
    firebase: state.firebase,
  };
};

export default connect(mapStateToProps)(Boards);
