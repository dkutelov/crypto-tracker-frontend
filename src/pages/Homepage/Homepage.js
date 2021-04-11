import { Component } from 'react';

import Layout from '../../components/Layout/Layout';
import CryptoList from '../../components/CryptoList/CryptoList';

import styles from './Homepage.module.css';
import close from '../../assets/icons/close.svg';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  handleSearchInput(e) {
    this.setState({ searchTerm: e.target.value });
  }

  clearSearchInput() {
    this.setState({ searchTerm: '' });
  }

  render() {
    const { searchTerm } = this.state;

    return (
      <Layout>
        <div className={styles.searchWrapper}>
          <div className={styles.searchInnerWrapper}>
            <input
              type='text'
              name='searchTerm'
              placeholder='Search coin ...'
              value={searchTerm}
              onChange={this.handleSearchInput.bind(this)}
              className={styles.searchInput}
            />
            <img
              src={close}
              onClick={this.clearSearchInput.bind(this)}
              alt='clear search'
              className={styles.clearIcon}
            />
          </div>
        </div>
        <CryptoList searchTerm={searchTerm} />
      </Layout>
    );
  }
}

export default Homepage;
