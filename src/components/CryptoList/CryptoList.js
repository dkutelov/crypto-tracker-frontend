import { useContext } from 'react';
import CryptoItem from '../CryptoItem/CryptoItem';
import styles from './CryptoList.module.css';
import CryptoContext from '../../context/cryptoContext';

const headings = [
  'Icon',
  'Crypto',
  'Symbol',
  'Price',
  'High/ Low 24h',
  'Change',
  'Volume',
  'More',
];

const CryptoList = ({ searchTerm }) => {
  let cryptoData = useContext(CryptoContext);

  if (searchTerm) {
    cryptoData = cryptoData.filter((coin) =>
      coin.id.startsWith(searchTerm.toLowerCase())
    );
  }
  return (
    <div className={styles.container}>
      <table className={styles.wrapper}>
        <thead>
          <tr>
            {headings.map((heading) => (
              <th key={heading}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cryptoData.length > 0 &&
            cryptoData.map((crypto) => (
              <CryptoItem key={crypto.id} {...crypto} />
            ))}
        </tbody>
      </table>
      {cryptoData.length === 0 && (
        <div style={{ textAlign: 'center', marginTop: '2em' }}>No data</div>
      )}
    </div>
  );
};

export default CryptoList;
