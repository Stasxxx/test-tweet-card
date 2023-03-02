import { ItemTweet, TweetPhotoCont, Logo, TweetPhoto, UserImg, UserImgBorder, UserInfoCont, Text, Button } from 'components/tweetsItem/TweetsItem.styled';
import tweet from '../images/Picture1.png';
import logo from '../images/Logo.png';
import rectangle from '../images/Rectangle1.png';
import ellipse from '../images/Ellipse.png';
// import hansel from '../images/Hansel.png'

export const TweetsItem = ({ card: { id, user, tweets, followers, avatar } }) => {
    const followersFormating = new Intl.NumberFormat("en-US", {
  style: "decimal",}).format(followers)
    return (
        <>
            <ItemTweet key={id}>
                <TweetPhotoCont>
                    <Logo href="https://goit.global/ua/" target="_blank" rel="noreferrer noopener">
                        <img src={logo} alt='logo' />
                    </Logo>
                    
                    <TweetPhoto src={tweet} alt='tweet photo'/>
                </TweetPhotoCont>
                <div style={{position: "relative", marginBottom: "62px"}}>
                    <img src={rectangle} alt="" style={{marginLeft: "-36px", marginRight: "-36px"}}/>
                    <UserImg src={avatar} />
                    <UserImgBorder src={ellipse}  alt=""/>
                </div>
                <UserInfoCont>
                    <Text><span>{tweets}</span> TWEETS</Text>
                    <Text><span>{followersFormating}</span> FOLLOWERS</Text>
                    <Button type="button">FOLLOW</Button>
                </UserInfoCont>
            </ItemTweet>
        </>
    )
}