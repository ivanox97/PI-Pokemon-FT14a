import styled from 'styled-components';

export const Container = styled.div`
position: fixed;
z-index: 5;
margin-top: 0;
margin: 0;
width: calc(100%- 20px);
height: 200px;
background-color: #C04C4B;
border: 6px solid #464646;
`;

export const GoContainer = styled.div `
width: 400px;
height: 130px;
float: right;
background-color: #C04C4B;
display: flex;
align-items: center;
justify-content: flex-start;
`;

export const SearchContainer = styled.div `
width: 32%;
height: 130px;
bottom: 100px;
background-color: #C04C4B;
display: flex;
align-items: center;
justify-content: center;
`;

export const ImgContainer = styled.div `
width: 20%;
height: 130px;
background-color: #C04C4B;
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
background-color: #C04C4B;
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
background-color: #464646;
transition: 0.5s;
`;

export const Input1 = styled.input `
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
height:60px;
width:60px;
border-radius: 40px;
&:hover{
  width: 150px;
  display:flex;
  justify-content: flex-end;
}
&:hover ${Input1}{
    width: 60px;
}
&:hover ${Button}{
    background: #34397D;
}
`;

export const CreateContainer = styled.div `
width: 230px;
height: 130px;
float: left;
background-color: #C04C4B;
display: flex;
align-items: center;
justify-content: center;
`;

export const Input2 = styled.input `
border: none;
background: none;
outline: none;
float: flex;
padding: 0;
color: white;
font-size: 16px;
font-weight: bold;
line-height: 40px;
width: 0px;
position: relative;
left: 160px
`;

export const Div2= styled.div`
background: none;
height:60px;
width:60px;
border-radius: 40px;
&:hover{
  width: 150px;
  display:flex;
  justify-content: flex-end;
  text-align: left;
}
&:hover ${Input2}{
    width: 180px;
}
&:hover ${Button}{
  position: relative;
  right: 90px;
  background: #34397D;
}
`;
