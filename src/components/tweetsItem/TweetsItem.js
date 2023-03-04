import { useEffect, useState } from 'react';
import { ItemTweet, TweetPhotoCont, Logo, TweetPhoto, UserImg, UserImgBorder, Text, Button } from 'components/tweetsItem/TweetsItem.styled';
import tweet from '../images/Picture1.png';
import logo from '../images/Logo.png';
import rectangle from '../images/Rectangle1.png';
import ellipse from '../images/Ellipse.png';

export const TweetsItem = ({ card: { id, tweets, followers, avatar, isFollowing }, setUserId }) => {
    const [followingUser, setFollowingUser] = useState(isFollowing);
    const [signedUp, setSignedUp] = useState(followers);

    const formatingFollowers = new Intl.NumberFormat("en-US", {
        style: "decimal",
    }).format(signedUp);
    
    const increment = () => {
        setSignedUp(state => state + 1)
    }

    const decrement = () => {
        setSignedUp(state => state - 1)
    };

    useEffect(() => {
        setUserId({ id, followingUser, signedUp })
         
    }, [followingUser, id, setUserId, signedUp]);
    
    const toggleFollow = () => {
        setFollowingUser(state => !state)

        if (!isFollowing) {
            increment()
        }
         if (isFollowing) {
            decrement()
        }
    };

    return (
        <>
            <ItemTweet>
                <TweetPhotoCont>
                    <Logo href="https://goit.global/ua/" target="_blank" rel="noreferrer noopener">
                        <img src={logo} alt='logo' />
                    </Logo>
                    <TweetPhoto src={tweet} alt='tweet photo'/>
                </TweetPhotoCont>
                <div style={{position: "relative", marginBottom: "62px"}}>
                    <img src={rectangle} alt="" style={{marginLeft: "-36px", marginRight: "-36px"}}/>
                    <UserImg src={require(`components/images/${avatar}.png`)} />
                    <UserImgBorder src={ellipse}  alt=""/>
                </div>
                <div>
                    <Text><span>{tweets}</span> TWEETS</Text>
                    <Text><span>{formatingFollowers}</span> FOLLOWERS</Text>
                    {
                        !isFollowing ?
                            <Button type="button" onClick={toggleFollow}>FOLLOW</Button>
                            : <Button
                                type="button"
                                onClick={toggleFollow}
                                style={{ backgroundColor: '#5CD3A8', padding: '14px 39px 14px 39px' }}>FOLLOWING
                            </Button>
                    }
                </div>
            </ItemTweet>
        </>
    )
}