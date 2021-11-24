import React from 'react';
import styled from 'styled-components';
import {S, M, L} from '../responsive';

const Container = styled.div`
flex:1;
margin: 5px;
position: relative;

`;

const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
border-radius: 0.5rem;
`;

const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`;
const Title = styled.h1`
color: #fff;
margin-bottom: 20px;
text-align: center;
height: 60px;
${L({fontSize:'28px'})};
${M({fontSize:'22px'})};
`;
const Button = styled.button`
border:none;
padding: 10px;
background-color: #fff;
color: gray;
cursor: pointer;
transition: 0.3s ease-in-out;
font-weight: 600;
box-shadow: 1px 2px 5px #555;
&:hover {
    color: #000;
    background-color: #ccc;
}
${M({padding:'5px'})};
`;

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img} alt='photo'/>
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem
