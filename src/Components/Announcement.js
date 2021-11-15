import React from 'react';
import styled from 'styled-components';
import {S} from '../responsive';

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: #fff;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    position: sticky;
    top: 50px;
    left: 0;
    z-index: 999;
    ${S({fontSize:'14px'})}
`;


const Announcement = () => {
    return (
        <Container>
            Super Deal! Free Shipping on Orders Over $50
        </Container>
    )
}

export default Announcement
