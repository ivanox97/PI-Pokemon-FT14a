import { Link } from "react-router-dom";
import styled from "styled-components";
import video from "../images/background.mp4";


const Button = styled.button`
position: absolute;
top: calc(50% - 30px);
left: calc(50% - 30px);
width: 60px;
height: 60px;
background: #7f8c8d;
border: 10px solid #fff;
border-radius: 50%;
z-index: 10;
box-shadow: 0 0 0 10px black;
animation: blink .5s alternate 7;
font-family: 'Alfa Slab One', cursive;
font-size: 18.5px;
&:hover{
    color: #fff;
    background: red;
}
`;

const Video = styled.video`
position: fixed;
  top: 20%; left: 50%;
  z-index: 1;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
`
const CenterButton = styled.div `
position: fixed;
top: 50%;
left: 50%;
z-index: 10;
transform: translate(-50%,-50%);
`

const Pokeball = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
    background: #fff;
    border: 10px solid #000;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: inset -10px 10px 0 10px #ccc;
    animation: fall 5s  ease-in-out,
    shake 1.25s cubic-bezier(.36,.07,.19,.97) 3;
    &:before{
        content:"";
        position: absolute;
        background: red;
        width: 100%;
        height: 50%;
    }
    &:after{
        top: calc(50% - 10px);
        width: 100%;
        height: 20px;
        background: #000;
    }
    @keyframes blink {
        from { background: #eee;}
        to { background: #e74c3c; }
      }
      @keyframes shake {
        0 { transform: translate(0, 0) rotate(0); }
        20% { transform: translate(-10px, 0) rotate(-20deg); }
        30% { transform: translate(10px, 0) rotate(20deg); }
        50% { transform: translate(-10px, 0) rotate(-10deg); }
        60% { transform: translate(10px, 0) rotate(10deg); }
        100% { transform: translate(0, 0) rotate(0); }
      }
      @keyframes fall {
        0% { top: -500px }
        60% { top: 0 }
        80% { top: -20px }
        100% { top: 0 }
      }
`

export default function Beggining(){
    return(
        
        <>
        <div>
            <Video autoPlay muted >
                <source src={video} type="video/mp4"/>
            </Video>
            <video autoPlay muted></video>
        </div>
        <CenterButton>
            <Pokeball>
                <Link to="/pokemons"><Button>GO</Button></Link>
            </Pokeball>
        </CenterButton>
        </>
    )
}

