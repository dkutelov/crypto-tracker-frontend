import { useContext } from 'react';

import Layout from '../../components/Layout/Layout';
import PortfolioSummary from '../../components/Portfolio/PortfolioSummary/PortfolioSummary';
import isAuth from '../../hoc/isAuth';

import PortfolioContext from '../../context/portfolioContext';
import CryptoContext from '../../context/cryptoContext';

import styles from './Portfolio.module.css';
import { getCurrentPrices } from '../../utils/getCurrentPrices';
import { getPortfolioSummary } from '../../utils/getPortfolioSummary';

const Portfolio = () => {
  const {
    portfolioState: { transactions },
  } = useContext(PortfolioContext);
  const cryptoData = useContext(CryptoContext);
  const currentPrices = getCurrentPrices(cryptoData);

  const portfolioSummaryData = getPortfolioSummary(transactions, currentPrices);

  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.heading}>My Portfolio</h2>

        <PortfolioSummary data={portfolioSummaryData} />

        <div>
          <p>Chart Last 7 Days</p>
        </div>
      </div>
    </Layout>
  );
};

export default isAuth(Portfolio);
