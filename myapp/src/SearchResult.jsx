import React from 'react'


const SearchResult =(props) =>{

    const img = `https://source.unsplash.com/500x400/${props.search}`;

    return(
        <>
            <div>
                <img 
                    src={img} 
                    alt="Image"
                />
            </div>
        </>
    )
}
export default SearchResult ;