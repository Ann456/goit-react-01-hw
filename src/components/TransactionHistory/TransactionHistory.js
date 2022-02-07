import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={s.table}>
      <thead className={s.head}>
        <tr>
          <th className={s.titles}>Type</th>
          <th className={s.titles}>Amount</th>
          <th className={s.titles}>Currency</th>
        </tr>
      </thead>

      <tbody className={s.body}>
        {items.map(item => (
          <tr key={item.id}>
            <td className={s.items}>{item.type}</td>
            <td className={s.items}>{item.amount}</td>
            <td className={s.items}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default TransactionHistory;