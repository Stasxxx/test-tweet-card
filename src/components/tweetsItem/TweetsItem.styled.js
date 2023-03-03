import styled from "styled-components";


export const ItemTweet = styled.li`
max-width: 380px;
box-sizing: border-box;
padding: 28px 36px 36px 36px;
margin-left: auto;
margin-right: auto;
background-image: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
border-radius: 20px;
`;

export const TweetPhotoCont = styled.div`
position: relative;
margin-bottom: 18px;

`;

export const Logo = styled.a`
position: absolute;
top: -8px;
left: -16px;
`;

export const TweetPhoto = styled.img`
width: 308px;
`;

export const UserImgBorder = styled.img`
position: absolute;
width: 80px;
left: 50%;
bottom: 50%;
transform: translate(-50%,50%)
`

export const UserImg = styled.img`
position: absolute;
background-image: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
width: 62px;
height: 62px;
border-radius: 50%;
border: none;
left: 50%;
bottom: 50%;
transform: translate(-50%,40%)
`;

export const Text = styled.p`
font-family: 'Montserrat';
font-weight: 500;
font-size: 20px;
line-height: 24px;
text-transform: uppercase;
margin: 0;
margin-bottom: 16px;

    &:last-of-type{
        margin-bottom: 26px;
    }

text-align: center;
color: #EBD8FF;
`;

export const Button = styled.button`
display: block;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;
text-align: center;

padding: 14px 56px;
margin-left: auto;
margin-right: auto;

color: #373737;
background-color: #EBD8FF;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10px;
`;
