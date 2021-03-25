import PropTypes from 'prop-types';
import styles from "./Statistics.module.css";

const color = function randomColor() {
  return (
    'rgb(' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ')'
  );
};

const Statistics = ({title, stats}) => (
<section className={styles.title}>
  <h2>{title}</h2>

   <ul className={styles.list}>
     {stats.map(({ id, label, percentage }) => (
       <li key={id} className={styles.item}
        style={{ backgroundColor: color() }}
       >
        <span>{label}</span>
        <span>{percentage}%</span>
      </li>))}
   </ul>
</section>
);

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape(PropTypes.number.isRequired))
    .isRequired,
};

export default Statistics;