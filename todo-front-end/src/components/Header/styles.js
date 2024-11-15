import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    height: 70px;
    background: #20295F;
    border-bottom: 5px solid #EE6B26;
    display: flex;

`


export const Leftside = styled.div`
   
    width: 50%;
    height: 70px;

    display: flex;
    align-items: center;

    img{
        width: 100px;
        height: 40px;
        padding-left: 10px;
       
    }


`

export const Rightside = styled.div`
     width: 50%;
     height: 70px;
    
    display: flex;
    align-items: center;
    justify-content: flex-end;

    button{
        background: none;
        border: none;
        cursor: pointer;
        font-size: 16px;
    }

    .dividir::after{
        content: '|';
        margin: 0 10px;
        color: #fff;
    }

    a, button{
        color: #fff;
        font-weight: bold;
        text-decoration: none;
        margin: 0 10px;
        
        &:hover{
            color: #EE6B26;
        }

        
    }
    #notification{
        img{
        width: 25px;
        height: 30px;
        padding-left: 10px;
       
    }

    span{
        background: #fff;
        color: #EE6B26;
        padding: 3px 7px;
        border-radius: 50%;
        position: relative;
        top: -20px;
        right: 10px;

        &:hover{
            opacity: 0.5;
    }
}
 

`   