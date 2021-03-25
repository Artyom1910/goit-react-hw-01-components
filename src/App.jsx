
import Profile from "./сomponents/Profile/Profile"
import Statistics from "./сomponents/Statistics/Statistics";
import FriendList from "./сomponents/FriendList/FriendList";
import TransactionHistory from "./сomponents/Transactions/TransactionHistory";
import user from "./сomponents/Profile/user.json";
import statisticalData from "./сomponents/Statistics/statistical-data.json";
import friends from "./сomponents/FriendList/friends.json";
import transactions from "./сomponents/Transactions/transactions.json";

const App = () => {
    return (
        <div>
           <Profile
                name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
            <Statistics
                title="Upload stats"
                stats={statisticalData}
            />
            <FriendList friends={friends} />

            <TransactionHistory items={transactions} />
        </div>
    )
};

export default App;