import CoinChart from '../CoinChart/CoinChart';
import styles from './CoinData.module.css';

const CoinData = ({ coinData }) => {
  return (
    <>
      {coinData ? (
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
      ) : (
        <div style={{ textAlign: 'center', marginTop: '2em' }}>No data!</div>
      )}
    </>
  );
};

export default CoinData;
