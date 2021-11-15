import React, {useEffect} from 'react';
import styled from 'styled-components';
import { Send } from '@material-ui/icons';
import {S,M,L,Xl} from '../responsive';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Container = styled.div`
height: 40vh;
background-color: #fcf5f5;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
${L({height:'30vh'})};
${M({height:'30vh'})};
${S({height:'30vh'})};
`;

const Title = styled.h1`
font-size: 70px;
${L({fontSize:'50px'})};
${M({fontSize:'40px'})};
${S({fontSize:'40px'})};
`;

const Desc = styled.div`
    margin: 20px 0;
    font-size: 24px;
    font-weight: 300;
    ${S({fontSize:'20px', margin:'20px 10px'})};
`;

const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: #fff;
display: flex;
justify-content: space-between;
border: 1px solid lightgray;
${L({width:'60%'})};
${M({width:'70%'})};
${S({width:'80%'})};


`;

const Input = styled.input`
    flex: 8;
    padding: 0 0.5rem;
    outline: none;
    font-size: 1rem;
    border: none;
`;

const Button = styled.button`
    cursor: pointer;
    flex: 2;
    background-color: teal;
    color: #fff;
    border: 1px solid lightgray;
    opacity: 0.7;
    transition: all 0.3s ease-in-out;
    &:hover {
        opacity: 1;
    }
`;

const Newsletter = () => {
    useEffect(()=>{
        Aos.init({duration:500})
    },[])
    return (
        <Container data-aos="fade-up"
        data-aos-duration="3000">
            <Title>
                Newsletter
            </Title>
            <Desc>
                Get timely updates from your favorite products.
            </Desc>
            <InputContainer>
            <Input placeholder="Your email..."/>
            <Button>
            <Send/>
            </Button>
            </InputContainer>
            
        </Container>
    )
}

export default Newsletter
