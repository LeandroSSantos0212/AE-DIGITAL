import styled from 'styled-components';


export const container = styled.div `
   width: 100%;
   


`   


export const FilterArea = styled.div`

width: 100%;
display: flex;

flex-wrap: wrap;
justify-content: space-around;
margin-Top: 40px; 


button{
        background: none;
        border: none;
    }

`

export const Title = styled.div`

width: 100%;
border-bottom: 1px solid #20295F;
display: flex;

justify-content: center;
margin-top: 20px;


h3{
    color: #20295F;
    position: relative;
    top: 30px;

    background: #fff;
    padding: 0 20px;
}


`


export const Content = styled.div`
 width: 100%;
 display: flex;
 flex-wrap: wrap;

 justify-content: center;

 margin-top: 30px;

 a{
     text-decoration: none;
     color: #000;
 }

`