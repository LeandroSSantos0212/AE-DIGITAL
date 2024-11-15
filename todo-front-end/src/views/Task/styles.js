import styled from 'styled-components';


export const container = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
  
   
   


`


export const Form = styled.div`
width: 50%;
margin-bottom: 70px;
padding:10px;
    

`

export const TypeIcons = styled.div`

width: 100%;
display: flex;
justify-content: center;


.inative{
   opacity:0.5;
}

button{
   border: none;
   background: none;
}

img{
   width: 50px;
   height: 50px;
   margin: 10px;
   cursor: pointer;
   &:hover{
      opacity: 0.5;
   }
}

`

export const InputGroup = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   margin: 20px 0;

   span{
      color: #707070;
      margin: 5px 0;
   }

   input{
      font-size: 16px;
      padding: 15px;
      border: none;
      border-bottom: 1px solid #EE6B26;
   }
   
img{
   width: 20px;
   height: 20px;
   position: relative;
   left: 90%;
   bottom: 35px;
}


`

export const TextAreaGroup = styled.div`

width: 100%;
   display: flex;
   flex-direction: column;
   margin: 20px 0;

   span{
      color: #707070;
      margin: 5px 0;
   }
   textarea{
      font-size: 16px;
      border-radius: 5px;
      border: 1px solid #EE6B26; 
   }

`

export const Options = styled.div`
display: flex;
justify-content: space-between;

button{
   font-weight: bold;
   color:  #20295F;
   font-size: 18px;
   border: none;
   background: none;
   cursor: pointer;
   &:hover {
      opacity: 0.7;
   }
}

div{
   display: flex;
   align-items: center;
   color: #EE6B26;
   font-weight: bold;
   font-size: 18px;
   

input[type=checkbox]{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;

      border-radius: 5px;
      border: 1px solid #EE6B26; 

    width:  1.5rem;
    height: 1.5rem;

    color: transparent;
    transition: .2s;

    margin-right: 16px;

    background: #FFF;
    cursor: pointer;
}
}

`
export const Save = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin-top:20px;

button{
   width: 100%;
   border: none;
   border-radius: 30px;
   background-color: #EE6B26;
   color: #fff;
   font-size:24px;
   font-weight: bold;
   padding: 20px;
   cursor: pointer;
   &:hover {
      opacity: 0.7;
   }

}

`