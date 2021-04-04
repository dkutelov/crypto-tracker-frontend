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

const CryptoList = () => {
  const cryptoData = useContext(CryptoContext);
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
          {cryptoData.map((crypto) => (
            <CryptoItem key={crypto.id} {...crypto} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoList;
