import { Link } from 'react-router-dom';
import format from 'date-fns/format';

import './TransactionItem.css';
import { formatPrice } from '../../utils/formatPrice';
import deleteIcon from '../../assets/icons/delete.svg';
import editIcon from '../../assets/icons/edit.svg';

const TransactionItem = ({
  _id,
  purchasedAt,
  type,
  coinId: name,
  amount,
  price,
  application,
}) => {
  return (
    <tr>
      <td>{format(new Date(purchasedAt), 'dd-MM-yyyy hh:mm')}</td>
      <td> {type === 'b' ? 'Buy' : 'Sell'}</td>
      <td style={{ textTransform: 'capitalize' }}>{name}</td>
      <td>{amount}</td>
      <td className='coinPrice'>{formatPrice(price)}</td>

      <td>{(price * amount).toFixed(2)}</td>
      <td>{application}</td>
      <td>
        <Link to={`/transactions/${_id}/edit`} className='iconWrapper'>
          <img src={editIcon} alt='edit' className='icon' />
        </Link>
      </td>
      <td>
        <Link to={`/transactions/${_id}/delete`} className='iconWrapper'>
          <img src={deleteIcon} alt='delete' className='icon' />
        </Link>
      </td>
    </tr>
  );
};

export default TransactionItem;
