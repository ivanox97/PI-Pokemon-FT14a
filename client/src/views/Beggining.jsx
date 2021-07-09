import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export default function Beggining(){
    return(
        <div>
            <Button><Link to="/pokemons">I CHOOSE YOU!</Link></Button>
        </div>
    )
}

