
import Profile from "./сomponents/Profile/Profile"
import Statistics from "./сomponents/Statistics/Statistics";
import FriendList from "./сomponents/FriendList/FriendList";
import TransactionHistory from "./сomponents/Transactions/TransactionHistory";
import user from "./сomponents/json/user.json";
import statisticalData from "./сomponents/json/statistical-data.json";
import friends from "./сomponents/json/friends.json";
import transactions from "./сomponents/json/transactions.json";

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