import styled from "styled-components";

export const Body = styled.div`
margin: 0;
padding-top: 200px;
box-sizing: border-box;
font-family: Roboto;
display: flex;
height: 150vh;
justify-content: center;
align-items:center;
background: linear-gradient( 135deg, #202D5A, #2F8DED);
`;

export const Container = styled.div`
width: 700px;
background: #fff;
padding: 25px 30px;
border-radius: 5px;
`;

export const Title = styled.div`
font-size: 25px;
font-weight: 500;
position: relative;
&::before{
  content:'';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 300px;
  background: linear-gradient( 135deg, #202D5A, #2F8DED);
}
`;

export const UserDetail = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin: 20px 0  12px 0;
`;

export const InputBox = styled.div`
margin-bottom: 15px;
width: calc(100% / 2 - 20px);
`;

export const Details = styled.span`
display: block;
font-weight: 500;
margin-bottom: 5px;
`;

export const Input = styled.input`
height: 45px;
width: 100%;
outline: none;
border-radius: 5px;
border: 1px solid #ccc;
padding-left: 15px;
font-size: 16px;
border-bottom-width: 2px;
transition: all 0.3s ease;
&:focus&:valid{
  border-color: #9b59b6;
}
`;

export const ButtonContainer = styled.div`
height: 45px;
margin: 45px 0;
`;

export const Button = styled.input`
height: 100%;
width: 300px;
outline: none;
color: #fff;
border: none;
font-size: 18px;
font-weight: 500;
border-radius: 5px;
letter-spacing: 1px;
background: linear-gradient( 135deg, #202D5A, #2F8DED);
&:hover{
  background: linear-gradient(-135deg, #2F8DED, #202D5A);
}
`;


export const SelectBox = styled.div`
width: 50%;
display: flex;
justify-content: left;
align-items:space-between;
`;

export const SelectBox2 = styled.div`
width: 50%;
display: flex;
justify-content: right;
align-items:space-between;
`;

export const Select = styled.select `
margin: 0 auto;
color: black;
font-family: Roboto;
font-weight: bold;
text-transform: uppercase;
text-aling: center;
width: 130px;
height: 45px;
cursor: pointer;
&:hover{
  background-color: #71b7e6;
  color: white;
}
`;

export const Option = styled.option`
background-color: white;
color: gray;
width: 310px;
padding: 10px 15px;
height: 20px;
cursor: pointer;
&:hover{
  padding-left: 25px;
	width: 270px;
	color: #EC6F66;
}
`;

export const DetailsType1 = styled.h3`
position: relative;
bottom: 6px;
left: 60px;
`;

export const DetailsType2 = styled.h3`
position: relative;
bottom: 6px;
left: 47px;
`;

