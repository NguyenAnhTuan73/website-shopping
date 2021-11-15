import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(rgba(255, 255, 255, 0.5),rgba(255, 255, 255, 0.5) ) ,
url('https://images.pexels.com/photos/2108932/pexels-photo-2108932.jpeg?cs=srgb&dl=pexels-edu-carvalho-2108932.jpg&fm=jpg');
background-position: center;
background-size: cover;
background-repeat: no-repeat;
display: flex;
align-items: center;
justify-content: center;

`;
const Wrapper = styled.div`
padding: 20px;
max-width: 500px;
background-color: #fff;


`;
const Form = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 10px  0px;
padding: 10px;
font-size: 1rem;
`;

const Button = styled.button`
    width: 200px;
    margin: auto;
    border: none;
    padding: 15px 0;
    background-color: teal;
    color: white;
    font-weight: 500;
    cursor: pointer;
    margin-top: 20px; 
    margin-bottom: 10px;
    border-radius: 10px;
    font-size: 1rem;
    
`;
const LinkInfo = styled.a`
margin: 5px 0;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
color: blue;
`;

const ButtonLink = styled(Link)`
    color: white;
    font-weight: 500;
    padding: 15px 20px;
    cursor: pointer;
    
`;


const Login = () => {
    useEffect(()=>{
        Aos.init({duration:2000,offset: 100})
    },[])
    return (
        <Container>
            <Wrapper data-aos="fade-down-left">
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder='username'/>
                    <Input placeholder='password' type='password'/>
                    <Button >
                    <ButtonLink to="/">
                    LOGIN
                    </ButtonLink>
                    </Button>
                    <LinkInfo>DO NOT YOU REMEMBER THE PASSWORD ?</LinkInfo>
                    <LinkInfo>CREATE A NEW ACCOUNT</LinkInfo>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
