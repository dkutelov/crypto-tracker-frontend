import CoinChart from '../CoinChart/CoinChart';
import styles from './CoinData.module.css';

const CoinData = ({ coinData }) => {
  return (
    <>
      {coinData ? (
        <>
          <div className={styles.movingContentWrapper}>
            <p className={styles.movingContent}>
              Current price ${coinData.market_data.current_price.usd} ✦ Price
              Change 24h{' '}
              {coinData.market_data.price_change_percentage_24h.toFixed(2)}% ✦
              Hishest price 24h ${coinData.market_data.high_24h.usd} ✦ Lowest
              price 24h ${coinData.market_data.low_24h.usd}
            </p>
          </div>
          <div className={styles.container}>
            <div style={{ textAlign: 'center' }}>
              <img src={coinData.image.small} alt={coinData.name} />
              <h2>{coinData.name}</h2>
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
            <div className={styles.contentBlock}>
              <h3>Market capitalization</h3>
              <p>USD {coinData.market_data.market_cap.usd}</p>
              <p>Market Capitalization Rank: {coinData.market_cap_rank}</p>
            </div>
            <div className={styles.contentBlock}>
              <h3>Total Volume</h3>
              <p>USD {coinData.market_data.total_volume.usd}</p>
            </div>
          </div>
        </>
      ) : (
        <div style={{ textAlign: 'center', marginTop: '2em' }}>No data!</div>
      )}
    </>
  );
};

export default CoinData;
