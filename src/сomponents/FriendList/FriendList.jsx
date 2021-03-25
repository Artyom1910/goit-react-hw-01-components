import PropTypes from 'prop-types';
import FriendItem from "./FriendItem";
import styles from "./FriendsList.module.css";

const FriendList = ({ friends }) =>  (
    <ul className={styles.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id}>
          <FriendItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};
export default FriendList;