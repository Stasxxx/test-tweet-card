import { TweetsItem } from "components/tweetsItem/TweetsItem";
import { List } from "components/tweetsList/TweetsList.styled";
import users from "../../users.json"

export const TweetsList = () => {
    return (
        <>
            <List>
                {users.map(user => <TweetsItem card={user} />)}
                
            </List>
        </>
    )
}