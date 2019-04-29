import React from 'react';

import api from '../../api';
import Heros from '../components/heros';

class herosContainer extends React.Component {
  state = {
    data: undefined,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const data = await api.heros.read(this.props.match.params.badgeId);
      this.setState({ data: data });
    } catch (error) {
      this.setState({ error: error });
    }
  };
  // componentWillUnmount() {
  //   clearInterval(this.intervalId);
  // }
  render() {
    return (
      //  pasar la data
    <Heros
        hero={this.state.data}
    />
    );
  }
}

export default herosContainer;