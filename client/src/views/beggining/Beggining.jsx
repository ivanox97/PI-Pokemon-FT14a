import { Link } from "react-router-dom";
import {Button, Video, CenterButton, Pokeball} from "./begginStyles";
import video from "../../images/background.mp4";

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

