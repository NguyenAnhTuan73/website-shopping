import React, {useEffect} from 'react';
import styled from 'styled-components';
import {categories} from '../Data/Data';
import CategoryItem from '../Components/CategoryItem';
import {S} from '../responsive';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${S({padding:'10px', display:'flex', flexDirection:'column'})}
`;

const Categories = () => {
    useEffect(()=>{
        Aos.init({duration:500})
    },[])
    return (
        <Container data-aos="fade-up"
        data-aos-duration="3000">
            {categories.map(item => (
                <CategoryItem item={item}/>
            ) )}
        </Container>
    )
}

export default Categories
