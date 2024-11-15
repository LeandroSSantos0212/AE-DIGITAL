
import styled from 'styled-components';

export const container = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   
   


`


export const content = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    margin-top: 100px;

    h1{
        color: #EE6B26;
    }

    p{
        color: #20295F;
    }

`


export const QrCodeArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

`

export const ValidationCode = styled.div`

    display: flex;
    flex-direction: column;
    margin: 10px;


    span{

        text-transform: uppercase;
        font-weight: bold;
        margin-bottom: 10px;

    }

    input{
        font-size: 18px;
        padding: 10px;
        text-align: center;
    }

    button{
        font-weight: bold;
        background: #EE6B26;
        color: #fff;
        font-size: 18px;
        padding: 10px;
        border-radius: 30px;
        border: none;
        margin-top: 10px;
        cursor: pointer;

        &:hover{
            background-color: #20295F;
        }
    }

`