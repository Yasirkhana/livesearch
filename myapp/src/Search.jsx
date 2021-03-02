import React, { useContext, useState } from 'react'
import SearchResult from "./SearchResult";

const Search =() =>{

    const[img,setimg]=useState(" ");

    const inputEvent= (ev) =>{
            const data = ev.target.value;
            console.log(data);
            setimg(data);
    }


    return(
        <>
        <div className="container">
            <div className="searchBox"> 
                <input 
                    placeholder="Search Anything"
                    type="text" 
                    value={img}
                    onChange={inputEvent}
                    />
                    {
                        img===" "? null :  <SearchResult search={img}/>
                    }
                    
            </div>
        </div>
        </>
    )
}
export default Search ;