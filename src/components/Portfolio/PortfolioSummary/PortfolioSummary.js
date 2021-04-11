import styles from './PortfolioSummary.module.css';

const headings = [
  'Coin',
  'Amount',
  'Purchase Amount USD',
  'Current Amount USD',
  'Change, %',
];

const PortfolioSummary = ({ data }) => {
  let totalPurchased = data.reduce((acc, x) => (acc += x.purchaseAmount), 0);
  let totalCurrent = data.reduce((acc, x) => (acc += x.currentAmount), 0);
  const totalChange = (
    ((totalCurrent - totalPurchased) / totalPurchased) *
    100
  ).toFixed(2);

  if (data.length === 0) {
    return (
      <h2 style={{ textAlign: 'center' }}>
        No data. You need to create some transactions first!
      </h2>
    );
  }

  return (
    <div className={styles.summaryContainer}>
      <h3 className={styles.subheading}>Summary</h3>
      <div className={styles.container}>
        {data.length === 0 ? (
          <h4 style={{ textAlign: 'center' }}>
            No data. You need to create some transactions first!
          </h4>
        ) : (
          <table className={styles.wrapper}>
            <thead>
              <tr>
                {headings.map((heading) => (
                  <th key={heading}>{heading}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map(({ name, amount, purchaseAmount, currentAmount }) => {
                const change = (
                  ((currentAmount - purchaseAmount) / purchaseAmount) *
                  100
                ).toFixed(2);
                return (
                  <tr key={name}>
                    <td style={{ textTransform: 'capitalize' }}>{name}</td>
                    <td className={styles.values}>{amount}</td>
                    <td className={styles.values}>
                      {purchaseAmount.toFixed(2)}
                    </td>
                    <td className={styles.values}>
                      {currentAmount.toFixed(2)}
                    </td>
                    <td
                      className={styles.values}
                      style={{ color: change >= 0 ? 'lawngreen' : 'red' }}
                    >
                      {change} %
                    </td>
                  </tr>
                );
              })}
              <tr style={{ fontWeight: 'bold' }}>
                <td>total</td>
                <td></td>
                <td className={styles.values}>{totalPurchased.toFixed(2)}</td>
                <td className={styles.values}>{totalCurrent.toFixed(2)}</td>
                <td
                  className={styles.values}
                  style={{ color: totalChange >= 0 ? 'lawngreen' : 'red' }}
                >
                  {totalChange} %
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default PortfolioSummary;
