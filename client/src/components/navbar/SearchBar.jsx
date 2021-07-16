import {useState} from 'react';
import {getByName, setPage} from '../../actions';
import { useDispatch } from "react-redux";

export default function SearchBar(){
    const [name, setName] = useState("");
    const dispatch = useDispatch();
   
    const handleChange = (e) => {
        setName(e.target.value)
    }    

    const handleSubmit = (e) => {
        e.preventDefault();
        setPage(0)
        setName("")
        dispatch(getByName(name));
    }

    return (
    <form onSubmit={handleSubmit} className="d-flex">
        <input value={name} onChange={handleChange} className="form" type="search" placeholder="Who's that pokemon?" />
        <button className="button" type="submit"> Search </button>
    </form>
    )

}