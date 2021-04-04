import { useEffect, useState } from 'react';
import CoinChart from '../../components/CoinCart/CoinChart';

import Layout from '../../components/Layout/Layout';
import * as cryptoService from '../../services/cryptoService';
import styles from './CoinDetail.module.css';

const CoinDetail = ({ match }) => {
  const id = match.params.name;
  const [coinData, setCoinData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    cryptoService
      .getOne(id)
      .then((data) => {
        setCoinData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  }, [id]);

  if (loading) return <p>Loading ...</p>;
  return (
    <Layout>
      <div className={styles.container}>
        <div style={{ textAlign: 'center' }}>
          <img src={coinData.image.large} alt={coinData.name} />
          <h2>{coinData.name}</h2>
          <p>Current price: USD {coinData.market_data.current_price.usd}</p>
        </div>
        <CoinChart data={coinData.market_data.sparkline_7d} />
        <div className={styles.contentBlock}>
          <h3>Description</h3>
          <p dangerouslySetInnerHTML={{ __html: coinData.description.en }} />
        </div>
        <div className={styles.contentBlock}>
          <h3>Categories</h3>
          <p>{coinData.categories.join(', ')}</p>
        </div>
      </div>
    </Layout>
  );
};

export default CoinDetail;
