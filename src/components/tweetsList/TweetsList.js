import { useEffect, useState } from "react";
import { TweetsItem } from "components/tweetsItem/TweetsItem";
import { List } from "components/tweetsList/TweetsList.styled";
import users from "../../users.json";

const usersList = users.map(item => {
    return { ...item, isFollowing: false }
});

const KEY = 'user_list';

export const TweetsList = () => {
    const [tweetUsers, setTweetUsers] = useState(() => JSON.parse(localStorage.getItem(KEY)) ?? usersList);
    const [userId, setUserId] = useState('');

//    const following = () => {
//         const updatedTweets = tweetUsers.map(item => {
//             if (item.id === userId.id) {
//                 return { ...item, isFollowing: userId.followingUser }
//             }
//             return item
//         });
//         setTweetUsers(updatedTweets);
//         localStorage.setItem(KEY, JSON.stringify(updatedTweets))
//         setUserId('')
//     };
    const updatedTweets = tweetUsers.map(item => {
            if (item.id === userId.id) {
                return { ...item, isFollowing: userId.followingUser }
            }
            return item
    });
    
    useEffect(() => {
        if (userId) {
            setTweetUsers(updatedTweets);
            localStorage.setItem(KEY, JSON.stringify(updatedTweets))
            setUserId('')
        }
      
    },[updatedTweets, userId]);


    return (
        <>
            <List>
                {tweetUsers.map(user => <TweetsItem key={user.id} card={user} setUserId={setUserId} setTweetUsers={setTweetUsers} />)}
            </List>
        </>
    )
}