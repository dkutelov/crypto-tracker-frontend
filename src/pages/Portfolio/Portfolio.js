import { useState, useEffect, useContext } from 'react';

import Layout from '../../components/Layout/Layout';
import PortfolioSummary from '../../components/Portfolio/PortfolioSummary/PortfolioSummary';
import PortfolioChart from '../../components/Portfolio/PortfolioChart/PortfolioCart';
import isAuth from '../../hoc/isAuth';

import PortfolioContext from '../../context/portfolioContext';
import CryptoContext from '../../context/cryptoContext';
import * as cryptoService from '../../services/cryptoService';

import styles from './Portfolio.module.css';
import { getCurrentPrices } from '../../utils/getCurrentPrices';
import { getPortfolioChartData } from '../../utils/getPortfolioChartData';
import { getPortfolioSummary } from '../../utils/getPortfolioSummary';

const Portfolio = () => {
  const [priceData, setPriceData] = useState({});
  const {
    portfolioState: { transactions },
  } = useContext(PortfolioContext);
  const cryptoData = useContext(CryptoContext);

  const currentPrices = getCurrentPrices(cryptoData);
  const portfolioSummaryData = getPortfolioSummary(transactions, currentPrices);

  useEffect(() => {
    portfolioSummaryData.forEach(async (coinData) => {
      const coinId = coinData.name;
      const currentCoinData = await cryptoService.getLastSevenDaysPrices(
        coinId
      );
      console.log('priceData');
      setPriceData((state) => ({ ...state, [coinId]: currentCoinData.prices }));
    });
  }, []);

  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.heading}>My Portfolio</h2>

        <PortfolioSummary data={portfolioSummaryData} />

        <div className={styles.chartContainer}>
          <h3 className={styles.subheading}>Portfolio Evolution Last 7 days</h3>
          <PortfolioChart
            data={getPortfolioChartData(portfolioSummaryData, priceData)}
          />
        </div>
      </div>
    </Layout>
  );
};

export default isAuth(Portfolio);
