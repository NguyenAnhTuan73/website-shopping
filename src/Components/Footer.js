import React from 'react';
import styled from 'styled-components';
import {Facebook, Instagram, Twitter, Pinterest, 
    YouTube, EmailOutlined, PhoneIphoneOutlined, Room  } from '@material-ui/icons';
import PaymentImg  from '../image/payment.png';
import {S,M,L,Xl} from '../responsive';


const Container = styled.div`
display: flex;
${L({flexDirection:'column'})};
${M({flexDirection:'column'})};
${S({flexDirection:'column'})};

`;

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
${M({padding:'10px'})};
${S({padding:'10px'})};

`;
const Logo = styled.h1` 
${M({fontSize:'24px'})};
`;

const Desc = styled.p`
    margin: 20px 0;
    ${M({margin:'10px 0'})};
    ${S({margin:'10px 0'})};
`;

const SocialContainer = styled.div`
    display: flex;

`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${props => props.color} ;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
    color: #fff;
    

`;


const Center = styled.div`
flex: 1;
padding: 20px;
${M({padding:'10px'})};
${S({padding:'10px'})};
`;

const Right = styled.div`
flex: 1;
padding: 20px;
${M({padding:'10px'})};
${S({padding:'10px'})};
`;

const Title = styled.h3`
margin-bottom: 30px;
${L({marginBottom:'10px'})};
${M({marginBottom:'10px'})};
`;

const List = styled.ul`
display: flex;
flex-wrap: wrap;
li {
    width: 50%;
    margin-bottom: 10px;

}
`;
const ContactItem = styled.div`
display:flex;
align-items: center;
margin-bottom: 1rem;
`;

const Payment = styled.img`
/* margin-top: 10px; */
width: 40%;
height: 10%;
object-fit: contain;
${L({width:'30%'})};
${M({width:'30%'})};
${S({width:'50%'})};

`;


const Footer = () => {
    
    return (
        <Container 
        >
            <Left>
                <Logo>FASHION.</Logo>
                <Desc>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet tempora blanditiis 
                    vero nesciunt et hic tenetur 
                    illo minima earum numquam laudantium corrupti! Doloremque est iusto nostrum illum.
                </Desc>
                <SocialContainer>
                    <SocialIcon color='#3B5999'>
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color='#E4405F'>
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color='#55ACEE'>
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color='#E60023'>
                        <Pinterest/>
                    </SocialIcon>
                    <SocialIcon color='#FF0000'>
                        <YouTube/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <li>Home</li>
                    <li>Cart</li>
                    <li>Man Fashion</li>
                    <li>Woman Fashion</li>
                    <li>Accessories</li>
                    <li>My Account</li>
                    <li>Order Tracking</li>
                    <li>Wishlist</li>
                    <li>Wishlist</li>
                    <li>Terms</li>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight:'4px'}}/>662 Dixie Path, South Tobinchester 98336
                </ContactItem>
                <ContactItem>
                    <PhoneIphoneOutlined style={{marginRight:'4px'}}/>+84 896 627 727
                </ContactItem>
                <ContactItem>
                    <EmailOutlined style={{marginRight:'4px'}}/>contact@fashion.dev
                </ContactItem>
                <Payment src={PaymentImg} alt='photo'/>
            </Right>

        </Container>
    )
}

export default Footer
