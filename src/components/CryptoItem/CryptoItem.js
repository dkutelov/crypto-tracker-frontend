import './CryptoItem.css';
import { formatPrice } from '../../utils/formatPrice';
const CryptoItem = ({
  name,
  image,
  symbol,
  current_price: price,
  high_24h: highestPrice,
  low_24h: lowestPrice,
  price_change_percentage_24h: priceChange,
}) => {
  return (
    <tr>
      <td className='coinImageWrapper'>
        <img src={image} alt={name} className='coinImage' />
      </td>
      <td>{name}</td>
      <td>{symbol.toUpperCase()}</td>
      <td className='coinPrice'>{formatPrice(price)}</td>
      <td>
        {formatPrice(highestPrice)} / {formatPrice(lowestPrice)}
      </td>
      <td className={priceChange < 0 ? 'priceDown' : 'priceUp'}>
        {priceChange.toFixed(2)} %
      </td>
    </tr>
  );
};

export default CryptoItem;
