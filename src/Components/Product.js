import React from 'react';
import styled from 'styled-components';
import {ShoppingCartOutlined, FavoriteBorderOutlined,SearchOutlined } from '@material-ui/icons';
import {S,M,L} from '../responsive';

const Info = styled.div`
opacity: 0;
display:flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
position: absolute;
left: 0;
top: 0;
z-index: 3;
background-color: rgba(0, 0, 0, 0.3);
transition: all 0.5s ease-in-out;
`;

const Container = styled.div`
flex:1;
margin: 5px;
min-width: 280px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
background-color: #f5fbfd;
position: relative;
${L({minWidth:'225px', height:'250px'})};
${M({minWidth:'225px', height:'250px'})};
${S({minWidth:'220px', height:'350px'})};



&:hover ${Info} {
    opacity: 1;
    cursor: pointer;
}

`;
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
`;

const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
z-index: 2;
border-radius: 0.5rem;
`;

const Icon = styled.div`
margin: 0 5px;
width: 40px;
height: 40px;
border-radius: 50%;
background-color: #fff;
display: flex;
justify-content: center;
align-items: center;
z-index: 6;
cursor: pointer;
transition: all 0.3s ease-in-out;

&:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
    color: #fd3153;
}
`;

const Product = ({item}) => {
    return (
        <Container>
            <Circle/>
            <Image src={item.img} alt='photo'/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
                <Icon>
                    <SearchOutlined/>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined/>
                </Icon>
            </Info>
            
        </Container>
    )
}

export default Product
