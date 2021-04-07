import { Link } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';

import styles from './Portfolio.module.css';

const Portfolio = () => {
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
