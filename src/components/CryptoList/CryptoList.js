import { useContext } from 'react';
import CryptoItem from '../CryptoItem/CryptoItem';
import styles from './CryptoList.module.css';
import CryptoContext from '../../context/cryptoContext';

const headings = [
  { text: 'Icon', showOnSmall: false },
  { text: 'Crypto', showOnSmall: true },
  { text: 'Symbol', showOnSmall: false },
  { text: 'Price', showOnSmall: true },
  { text: 'H/L 24h', showOnSmall: false },
  { text: 'Change', showOnSmall: true },
  { text: 'Volume', showOnSmall: true },
  { text: 'More', showOnSmall: true },
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
            {headings.map((heading) => {
              return (
                <th
                  key={heading.text}
                  className={`${styles.tableHeading} ${
                    heading.showOnSmall ? '' : styles.noShow
                  }`}
                >
                  {heading.text}
                </th>
              );
            })}
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
