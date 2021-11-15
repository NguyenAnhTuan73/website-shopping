import {css} from 'styled-components'

export const S = (props) => {
    return css`
    @media only screen and (min-width:320px) and (max-width:566px){
        ${props}
    }`;
};
export const M = (props) => {
    return css`
    @media only screen and (min-width:567px) and (max-width:767px){
        ${props}
    }`;
};
export const L = (props) => {
    return css`
    @media only screen and (min-width:768) and (max-width:991px){
        ${props}
    }`;
};
export const XL = (props) => {
    return css`
    @media only screen and (min-width:992px) and (max-width:1200px){
        ${props}
    }`;
};