import { Component } from 'react';

import CryptoList from '../../components/CryptoList/CryptoList';
import Layout from '../../components/Layout/Layout';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptoData: [],
      error: null,
    };
  }

  render() {
    const { error } = this.state;
    if (error) return <p>Something went wrong! No data!</p>;
    return (
      <Layout>
        <CryptoList />
      </Layout>
    );
  }
}

export default Homepage;
