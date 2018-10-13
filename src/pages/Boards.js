import React from 'react';
import { View, Dimensions, Text, StyleSheet } from 'react-native-web';
import { connect } from 'react-redux';
import * as actions from '../actions/FirebaseActions';
import { BoardList, Loading, BoardForm } from '../components';
import { Button } from 'native-base';

class Boards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
    };
  }

  onCreateBoardButtonPressed = () => {
    this.setState({
      showForm: !this.state.showForm,
    });
  };

  onBoardFormSubmit = ({ title, userName, comment }) => {
    this.props.createBoard({ title, userName, comment });
  };

  componentWillMount = () => {
    this.props.actionOnLoad(this.props.boards.lastVisible);
  };

  render = () => {
    if (this.props.boards.loading) {
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
          {this.state.showForm && (
            <BoardForm onSubmit={this.onBoardFormSubmit.bind(this)} />
          )}
        </View>
        <BoardList
          itemList={this.props.boards.data}
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
    boards: state.boards,
  };
};

const mapDispatchToProps = dispatch => ({
  actionOnLoad: lastVisible => dispatch(actions.getBoards.request(lastVisible)),
  createBoard: data => dispatch(actions.createBoard.request(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Boards);
