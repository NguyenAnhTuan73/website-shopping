
import React, {useEffect} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {S,M} from '../responsive';



const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(rgba(255, 255, 255, 0.5),rgba(255, 255, 255, 0.5) ) ,url('https://images.pexels.com/photos/1076450/pexels-photo-1076450.jpeg?cs=srgb&dl=pexels-nappy-1076450.jpg&fm=jpg');
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
    max-width: 500px;
    flex-direction: column;
    flex-wrap: wrap;
    ${M({display:'flex', flexDirection:'column'})}
    ${S({display:'flex', flexDirection:'column'})}

`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    text-align: center;
`;
const Input = styled.input`
flex: 1;
width: 100%;
margin: 20px 10px 0px 0px;
padding:  10px;
font-size: 1rem;
${M({width:'100%'})}
${S({width:'100%'})}
`;
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0;
    line-height: 1.4;

`;
const Button = styled.button`
    min-width: 200px;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    cursor: pointer;
    border-radius: 0.5rem;
    display: inline-block;
    margin: auto;
    

`;
const ButtonLink = styled(Link)`
    color: white;
    font-weight: 500;
    padding: 15px 20px;
    
`;


const Register = () => {
    useEffect(()=>{
        Aos.init({duration:2000,offset: 100})
    },[])
    return (
        <Container>
            <Wrapper data-aos="fade-down-left">
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder='name'/>
                    <Input placeholder='last name'/>
                    <Input placeholder='username'/>
                    <Input placeholder='email'/>
                    <Input placeholder='password'/>
                    <Input placeholder='confirmpassword'/>
                    <Agreement>
                        By creating an account, I consent to the processing 
                        of my personal data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button ><ButtonLink to='/' >CREATE</ButtonLink></Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
