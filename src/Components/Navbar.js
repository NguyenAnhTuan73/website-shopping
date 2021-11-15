import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import {Badge} from '@material-ui/core';
import {S,M,L,Xl} from '../responsive';




const Container = styled.div`
    height: 50px;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: #fff;
    
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${S({padding:'10px'})};
    

`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const Language = styled.span`
    cursor: pointer;
    font-size: 14px;
    ${S({display:'none'})};
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 1.5rem;
    padding: 5px;
    ${S({marginRight:'0.5rem', marginLeft:'0'})};
`;

const Input = styled.input`
    border: none;
    outline: none;
    ${S({width:'50px'})};
`;


const Center = styled.div`
    flex: 1;
    text-align: center;
`;
const Logo = styled(Link)`
    color: #000;
    font-weight: bold;
    font-size: 1.5rem;
    ${S({fontSize:'1rem'})};
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${S({flex:'2'})};
`;
const MenuItem = styled.div`
    padding: 0.5rem 0;
    font-size: 14px;
    cursor: pointer;
    margin-left: 1.5rem;
    ${M({marginLeft:'0.5rem', fontSize:'12px'})}
    ${S({marginLeft:'0.5rem', fontSize:'12px'})}
`;
const MenuItemLink = styled(Link)`
    color:#000;
    font-weight: bold;
    transition: all 0.3s ease;
    letter-spacing: 1px;
    display: inline-block;
    &:hover {
        color: teal;
        transform: translateY(-1px);
    }
`;


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='Search'/>
                        <Search style={{color:'gray', fontSize:'1rem', cursor: 'pointer'}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo to='/'>FASHION.</Logo>
                </Center>
                <Right>
                    <MenuItem >
                    <MenuItemLink to='/register'>
                    REGISTER
                    </MenuItemLink>
                    </MenuItem>
                    <MenuItem >
                    <MenuItemLink to='/login'>
                    LOG IN
                    </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                    <Badge badgeContent={4} color="primary">

                        <ShoppingCartOutlined />
            
                    </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
    </Container>
    )
}

export default Navbar
