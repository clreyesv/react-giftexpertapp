import React, { useState } from 'react'
import { AddCategory } from './component/AddCategory';
import { GifGrid } from './component/GifGrid';

export const GifExpertApp = () => {

    //const categories =  ['one', 'samurai', 'dragon'];
    const [categories, setCategories] = useState([]);

    const handleAdd =()=>{
        // setCategories([...categories,'hunter']);
        // setCategories(categories => [...categories, 'hunterhunter']);
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {
                    categories.map( (category)=> 
                    //  <li key={ category }> { category } </li>
                    <GifGrid 
                    key={category}
                    category = {category}/>
                    )
                }
            </ol>
        </>
    )
}
