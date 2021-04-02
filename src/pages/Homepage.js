import { Component } from 'react';
import CryptoList from '../components/CryptoList/CryptoList';

import * as cryptoService from '../services/cryptoService';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      cryptoData: [],
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    cryptoService
      .getAll()
      .then((data) => {
        this.setState({
          cryptoData: data,
          loading: false,
        });
      })
      .catch((err) => {
        this.setState({ loading: false, error: true });
        console.log(err);
      });
  }

  render() {
    const { loading, error, cryptoData } = this.state;

    if (loading) return <p>Loading ..</p>;
    if (error) return <p>Something went wrong! No data!</p>;
    return <CryptoList cryptoData={cryptoData} />;
  }
}

export default Homepage;
