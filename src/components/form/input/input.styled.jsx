import styled from 'styled-components';

const InputSt = styled.input`
    border: 1.5px solid #80808099;
    border-radius: 10px
    
    ::placeholder {
        color: gray;
    }

    @media screen and (max-width: 2560px) {
        width: 750px;
        height: 75px;

        ::placeholder {
            padding-left: 15px;
            font-size: 25px;
        }
    }

    @media screen and (max-width: 1440px) {
        width: 350px;
        height: 50px;

        ::placeholder {
            padding-left: 10px;
            font-size: 15px;
        }
    }

    @media screen and (max-width: 1024px) {
        width: 350px;
        height: 40px;
    }

    @media screen and (max-width: 768px) {
        width: 225px;
        height: 35px;

        ::placeholder {
            padding-left: 7.5px;
            font-size: 12px;
        }
    }
`;

export default InputSt;
