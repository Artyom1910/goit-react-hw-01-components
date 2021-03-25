import PropTypes from 'prop-types';
import styles from "./Profile.module.css";

const Profile = ({name, tag, location, avatar, stats}) => (
  <div
  className={styles.profile}>
  <div>
    <img
      src={avatar}
      alt="Аватар пользователя"
      width="250"
    />
    <p className={styles.name}>{name}</p>
    <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
  </div>

    <ul
    className={styles.stats}>
    <li className={styles.item}>
      <span>Followers</span>
      <span className={styles.quantity}>{stats.followers}</span>
    </li>
    <li className={styles.item}>
      <span>Views</span>
      <span className={styles.quantity}>{stats.views}</span>
    </li>
    <li className={styles.item}>
      <span>Likes</span>
      <span className={styles.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
);

Profile.defaultProps = {
  avatar:
  'https://redzonekickboxing.com/wp-content/uploads/2017/04/default-image.jpg',
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Profile;