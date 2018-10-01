import React from 'react';
import { View, Dimensions, Text } from 'react-native-web';
import { Loading } from '../components';

class Threads extends React.Component {
  constructor(props) {
    super(props);
    console.log({ props });
    this.state = {
      loading: true,
      lastVisible: undefined,
    };
  }

  render = () => {
    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <View style={{ height: Dimensions.get('window').height }}>
        <Text>Threads</Text>
      </View>
    );
  };
}

export default Threads;
