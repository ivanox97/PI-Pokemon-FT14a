import styled from 'styled-components';

export const Container = styled.div`
position: fixed;
z-index: 5;
margin-top: 0;
margin: 0;
width: calc(100%- 20px);
height: 200px;
background-color: #D4A000;
border: 6px solid #0D5EAF;
`;

export const GoContainer = styled.div `
width: 400px;
height: 130px;
float: right;
background-color: #D4A000;
display: flex;
align-items: center;
justify-content: flex-start;
`;

export const SearchContainer = styled.div `
width: 32%;
height: 130px;
bottom: 100px;
background-color: D4A000;
display: flex;
align-items: center;
justify-content: center;
`;

export const ImgContainer = styled.div `
width: 20%;
height: 130px;
background-color: #D4A000;
justify-content: center;
align-items: center;
float:left;
overflow: hidden;
`;

export const Img = styled.img`
position:  relative;
width: 100%;
height: auto;
`;

export const FilterContainer = styled.div `
padding-top: 20px;
width: 100%;
height: 50px;
background-color: D4A000;
display: flex;
align-items: center;
justify-content: space-around;
`;

export const Button = styled.button `
float:right;
width: 60px;
height: 60px;
border-radius: 50%;
text-align: center;
display:flex;
justify-content: center;
align-items: center;
background-color: #2f3640;
transition: 0.5s;
`;

export const Input = styled.input `
border: none;
background: none;
outline: none;
float: left;
padding: 0;
color: white;
font-size: 16px;
font-weight: bold;
line-height: 40px;
width: 0px;
`;

export const Div1= styled.div`
background: #D4A000;
height:60px;
width:60px;
border-radius: 40px;
&:hover{
  width: 150px;
  display:flex;
  justify-content: flex-end;
}
&:hover ${Input}{
    width: 60px;
}
&:hover ${Button}{
    background: white;
}
`;

export const CreateContainer = styled.div `
width: 230px;
height: 130px;
float: left;
background-color: #D4A000;
display: flex;
align-items: center;
justify-content: center;
`;
