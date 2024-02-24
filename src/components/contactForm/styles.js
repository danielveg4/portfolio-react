import styled from 'styled-components';

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    margin-top: 3rem;
`;

export const StyledInput = styled.input`
    height: 1rem;
    width: 300px;
    display: block;
    border: 0.5px solid var(--principal);
    padding: 0.75rem 0.833rem;
    background-color: transparent;
    color: var(--secundary);
    font-size: 1rem;
    transition: filter 0.2s, outline 0.2s, box-shadow 0.2s;
    &:focus {
        border: 1.5px solid #2c2830;
        filter: hue-rotate(320deg);
        box-shadow: 0 0 0 0.08rem var(--principal);
        outline: #2c2830;
    }
    &::placeholder { 
        font-family: 'Encode Sans Condensed', sans-serif;
        color: var(--principal);
        opacity: 0.6;
    }
    @media (max-width: 600px) {
        width: 220px;
        font-size: 1rem;
    }
`;

export const StyledInputButton = styled.input`
    height: 3rem;
    width: 120px;
    display: block;
    border: 0.5px solid var(--principal);
    padding: 0.75rem 0.833rem;
    background-color: transparent;
    color: var(--secundary);
    font-size: 1rem;
    transition: filter 0.3s;    
    &:hover {
        cursor: pointer;
        filter: drop-shadow(0 0 15px #2c2830) hue-rotate(320deg);
    }
    @media (max-width: 600px) {
        width: 220px;
        font-size: 1rem;
    }
`;


export const StyledTextarea = styled.textarea`
    height: 5rem;
    width: 300px;
    display: block;
    border: 0.5px solid var(--principal);
    padding: 0.75rem 0.833rem;
    background-color: transparent;
    color: var(--secundary);
    font-size: 1rem;
    transition: filter 0.2s, outline 0.2s, box-shadow 0.2s;
    &:focus {
        border: 1.5px solid #2c2830;
        filter: hue-rotate(320deg);
        box-shadow: 0 0 0 0.08rem var(--principal);
        outline: #2c2830;
    }
    &::placeholder { 
        font-family: 'Encode Sans Condensed', sans-serif;
        color: var(--principal);
        opacity: 0.6;
    }
    @media (max-width: 600px) {
        width: 220px;
        font-size: 1rem;
    }
`;	

export const StyledSpanErrors = styled.span`
    color: var(--principal);
    font-size: 0.8rem;
    font-weight: 500;
    text-align: center;
    margin: -0.7rem;
    @media (max-width: 600px) {
        font-size: 1rem;
    }
`;