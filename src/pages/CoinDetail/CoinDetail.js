import { useEffect, useState, useContext } from 'react';
import CoinChart from '../../components/CoinChart/CoinChart';

import Layout from '../../components/Layout/Layout';
import Loading from '../../components/Loading/Loading';

import ErrorContext from '../../context/errorContext';
import * as cryptoService from '../../services/cryptoService';
import styles from './CoinDetail.module.css';

const CoinDetail = ({ match }) => {
  const id = match.params.name;
  const [coinData, setCoinData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { _, errorDispatch } = useContext(ErrorContext);

  useEffect(() => {
    cryptoService
      .getOne(id)
      .then((data) => {
        setCoinData(data);
        setLoading(false);
      })
      .catch((err) => {
        errorDispatch({
          type: 'SET_ERROR_MESSAGE',
          payload: 'Something went wrong! Try again!',
        });
        setLoading(false);
        console.log(err);
      });
  }, [id, errorDispatch]);

  return (
    <Layout>
      {loading ? (
        <Loading />
      ) : (
        <>
          {coinData ? (
            <div className={styles.container}>
              <div style={{ textAlign: 'center' }}>
                <img src={coinData.image.large} alt={coinData.name} />
                <h2>{coinData.name}</h2>
                <p>
                  Current price: USD {coinData.market_data.current_price.usd}
                </p>
              </div>
              <CoinChart data={coinData.market_data.sparkline_7d} />
              <div className={styles.contentBlock}>
                <h3>Description</h3>
                <p
                  dangerouslySetInnerHTML={{ __html: coinData.description.en }}
                />
              </div>
              <div className={styles.contentBlock}>
                <h3>Categories</h3>
                <p>{coinData.categories.join(', ')}</p>
              </div>
            </div>
          ) : (
            <div style={{ textAlign: 'center', marginTop: '2em' }}>
              No data!
            </div>
          )}
        </>
      )}
    </Layout>
  );
};

export default CoinDetail;
