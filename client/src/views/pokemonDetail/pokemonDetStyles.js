import styled  from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;
padding-top: 250px;
font-family: Roboto;
background: linear-gradient( 135deg, #202D5A, #2F8DED);
`;

export const PokeBox = styled.div`
width: 500px;
height: 600px;
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,8,219,1) 0%, rgba(34,2,85,1) 100%, rgba(254,255,255,1) 100%);
margin: 0 auto;
align-items: center;
border-radius: 30px;
border: 1px solid black
`;

export const Title = styled.div`
display: flex;
width: auto;
color: white;
padding-top: 20px;
padding-bottom: 20px;
margin: 0 auto;
text-align: center;
justify-content: center;
align-items: center;   
text-transform: uppercase;
font-weight: 900;
font-size: 34px;
-webkit-text-stroke: 1px black;
`;

export const ImageContainer = styled.div`
height: 200px;
display: flex;
justify-content: center;
align-items: center;
`;

export const Img = styled.img`
height; 200px;
width: 200px;
`;

export const Type = styled.div`
display: block;
font-weight: 500;
margin-bottom: 100px;
text-transform: uppercase;
font-weight: 100;
font-size: 24px;
padding; 10px;
color: white;
`;

export const TypeContainer = styled.div`
background: black;
width: calc(100% + 30px);
height: 40px;
border-radius: 50px;
position: relative;
bottom: 60px;
left: 10px;
transform: rotate(-9deg);
` 

export const InfoContainer = styled.div`
width: auto; 
display: inline-block;
flex-direction: column;
align-items: center;
padding: 10px;
height: auto;
margin-right: 40px;
position:relative;
bottom: 55px;
font-weight: 500;
text-transform: capitalize;
`;

export const Info = styled.div`
margin-bottom: 10px;
display: block;
color:white;
`;

export const StatsContainer = styled.div`
background: grey;
display: inline-block;    
padding: 2%; 
border-radius: 20px;
span { 
  position :relative;
  display:block;
  margin: 10px 0;
  font-weight: 100;
  text-transform: capitalize;
}
`;

export const MiddleContainer = styled.div`
padding: 5%;
text-align: center;
width: auto;   
height: auto;
`;