import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMatch, useNavigate } from 'react-router-dom';
import { searched } from '../../features/filter/filterSlice';

const Search = () => {
    const dispatch = useDispatch()
    const {searchText} = useSelector((state)=>state.filter)
    const [input, setInput] = useState(searchText);
    const match = useMatch('/');
    const navigate = useNavigate();
    console.log(match);

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(searched(input));
        if(!match){
            navigate('/');
        }
    }
    

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="outline-none border-none mr-2"
                type="search"
                name="search"
                placeholder="Search"
                value={input}
                onChange= {(e)=>setInput(e.target.value)}
            />
            <button
                type='submit'
            ><img
                className="inline h-5 cursor-pointer"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0DRetqdDRnICCWL2dS77eHXv4Zx26wDq6tg&usqp=CAU"
                alt="Search"
            /></button>
        </form>
    );
};

export default Search;