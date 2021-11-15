import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined} from '@material-ui/icons';
import {DataSlider} from '../Data/Data';
import Aos from 'aos';
import 'aos/dist/aos.css';



const SliderSection = styled.section`
    position: relative;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    display: flex;
    
    @media only screen and (min-width:992px) and (max-width:1200px){
        height: 80vh;
        
    };
    @media only screen and (min-width:768px) and (max-width:991px){
        height: 60vh;
        h1{
            font-size: 3rem !important;
        }
    };
    @media only screen and (min-width:567px) and (max-width:767px){
        display: none;
    };
    @media only screen and (min-width:320px) and (max-width:566px){
        display: none;
    };
    
`;

const SliderWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
`;
const SliderContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;

`;
const SliderItem = styled.div`
    width: 100vw;
    display: flex ;
    position: relative;
    align-items: center;
    
`;

const SliderImg = styled.img`
    height: 90%;
    width: 50%;
    flex: 1;
    object-fit: contain;
    
`;

const SliderContent = styled.div`
    padding: 50px;
    flex: 2;
    h1 {
        font-size: 4rem;
    }
    p {
        font-size: 20px;
        margin: 50px 0;
        letter-spacing: 2px;
        font-weight: 500;
    }
    button {
        padding: 10px;
        cursor: pointer;
        font-size: 20px;
        background-color: transparent;
        border: 1px solid #888;
        box-shadow: 1px 2px  5px  #555;
    }
`;

const MoveSlider = styled.div`
    z-index: 10 ;
    display: flex;
    position: absolute;
    right: 2rem;
    bottom: 2rem;
`;
const PrevSlider = styled.div`
height: 50px;
width: 50px;
border-radius: 50%;
cursor: pointer;
background-color: teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0 5px;
opacity: 0.5;
transition: 0.3s ease-in-out;
&:hover {
    opacity: 1;
}
`;

const NextSlider = styled.div`
    height: 50px;
width: 50px;
border-radius: 50%;
cursor: pointer;
background-color: teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0 5px;
opacity: 0.5;
transition: 0.3s ease-in-out;
&:hover {
    opacity: 1;
}
`;


const Slider = () => {
    const [current, setCurrent] = useState(0);
    const length = DataSlider.length;

    const nextSlide = () => {
        setCurrent( current === length - 1 ? 0 : current + 1);
        console.log(current);
    };
    const prevSlide = () => {
        setCurrent ( current === 0 ? length - 1 : current - 1);
        console.log(current);
    }
    useEffect(()=>{
        Aos.init({duration:2000,offset:400})
    },[])
    return (
        <SliderSection>
            <SliderWrapper>
                
                {DataSlider.map((item, index)=> {
                    return( 
                        <SliderContainer style={{backgroundColor: `${item.bg}`}} key={index}>
                            {index === current && (
                                <SliderItem>
                                <SliderImg src={item.Imgsrc} alt={item.alt}
                                data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine"/>
                                <SliderContent data-aos="fade-left"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine">
                                    <h1>{item.title}</h1>
                                    <p>{item.desc}</p>
                                    <button>{item.valuebutton}</button>
                                </SliderContent>
                                
                            </SliderItem>
                            )}
                            
                        </SliderContainer>
                    )
                })}
                <MoveSlider>
                    <PrevSlider onClick={prevSlide}>
                        <KeyboardArrowLeftOutlined style={{width: '30px', height: '30px'}}/>
                    </PrevSlider>
                    <NextSlider onClick={nextSlide}>
                    <KeyboardArrowRightOutlined style={{width: '30px', height: '30px'}}/>
                    </NextSlider>
                </MoveSlider>
            </SliderWrapper>
        </SliderSection>
    )
}

export default Slider
