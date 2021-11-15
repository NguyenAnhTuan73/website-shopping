import React, {useEffect} from 'react';
import styled from 'styled-components';
import { popularProducts } from '../Data/Data';
import Product from '../Components/Product';
import {Mobile} from '../responsive';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
    useEffect(()=>{
        Aos.init({duration:2000, offset: 400})
    },[])
    return (
        <Container data-aos="fade-up"
        data-aos-duration="3000" >
            {popularProducts.map((item, index) => (
                <Product item={item} key={index}/>
            ))}
        </Container>
    )
}

export default Products
