import PropTypes from "prop-types";
import styles from "./FriendsList.module.css";

const FriendItem = ({ avatar, name, isOnline }) => (
    <div className={styles.item}>
        <span  className={styles.status}
           style={{ color: isOnline ? "green" : "red" }}>O
        </span>
        <img
            src={avatar}
            alt={name}
            width="48" />
        <p className={styles.name}>{name}</p>
    </div>
);

FriendItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendItem;