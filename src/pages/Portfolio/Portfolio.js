import { useEffect, useContext, useReducer } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../components/Layout/Layout';
import styles from './Portfolio.module.css';
import * as portfolioService from '../../services/portfolioService';
import PortfolioContext from '../../context/portfolioContext';
import portfolioReducer from '../../reducers/portfolio.reducer';
import UserContext from '../../context/userContext';

const Portfolio = () => {
  const initialPortfolio = useContext(PortfolioContext);
  const [state, dispatch] = useReducer(portfolioReducer, initialPortfolio);
  const userContext = useContext(UserContext);

  useEffect(() => {
    portfolioService
      .getOne(userContext.state.user.id, userContext.state.user.token)
      .then((portfolio) => {
        dispatch({ type: 'SET_PORTFOLIO', payload: portfolio });
      });
  }, [userContext.state.user.id, userContext.state.user.token]);

  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.heading}>My Portfolio</h2>

        <div>
          <p>Current value: USD 123</p>
        </div>

        <div>
          <p>Chart Last 7 Days</p>
        </div>

        <h2 className={styles.heading}>My transactions</h2>
        <div style={{ marginBottom: '2em' }}>
          <Link to='/transaction/add' className={styles.addLink}>
            Add transaction
          </Link>
        </div>
        <div>
          <p>List of transactions - edit, delete</p>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
