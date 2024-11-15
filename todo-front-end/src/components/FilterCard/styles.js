import styled from 'styled-components';


export const Container = styled.div`
    width: 290px;
    height: 90px;
    background: ${props => props.actived ? '#EE6B26' : '#20295F'};
    border-radius: 8px;
    padding: 10px;
    cursor: pointer;
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    img{
        width: 25px;
        height: 25px;
        margin-top: -10px;
    }

    span{
        color: #fff;
        font-weight: bold;
        align-self: flex-end;
        font-size: 18px;
        margin-bottom: -10px;

    }

    &:hover{

        background: #EE6B26;
    }

    
`


