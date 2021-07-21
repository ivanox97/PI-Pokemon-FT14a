import {useState} from "react";
import {getByName, setPage} from "../../actions";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {FaSearch} from "react-icons/fa"

export default function SearchBar(){
    const [name, setName] = useState("");
    const dispatch = useDispatch();
   
    const handleChange = (e) => {
        setName(e.target.value)
    }    
    console.log(name)
    const handleSubmit = (e) => {
        e.preventDefault();
        setPage(0)
        dispatch(getByName(name));
        setName("")
    }

    return (
    <form onSubmit={handleSubmit}>
        <Div>
            <Input value={name} onChange={handleChange} type="search" placeholder="Who's that pokemon?" />
            <Button className="button" type="submit"><FaSearch color="#F0DBA5"/></Button>
        </Div>
    </form>
    )
}

const Button = styled.button `
color: #e84118;
float: right;
width: 40px;
height: 40px;
border-radius: 50%;
background:  #2f3640;
display:flex;
justify-content: center;
align-items: center;
transition: 0.4s
}
`;

const Input = styled.input `
border: none;
background: none;
outline: none;
float: left;
padding: 0;
color: white;
font-size: 16px;
font-weight: bold;
transition: 0.4s;
line-height: 40px;
width: 0px;
`;

const Div = styled.div `
background: #2f3640;
height: 40px;
border-radius: 40px;
padding: 10px;
&:hover ${Input}{
    width: 240px;
    padding: 0 6px;
}
&:hover ${Button}{
    background: #34397D;
}
`;