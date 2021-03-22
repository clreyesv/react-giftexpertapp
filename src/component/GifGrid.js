import React, { useState, useEffect } from 'react'
// import { getGif } from '../helpers/GetGif';
import { useFetchGifs } from '../hooks/useFetchGifs';
 import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {



    //const [images, setImages] = useState([])

    const {data:images, loading} = useFetchGifs(category);
    // con el : se renombran los atributos.

    /*
    //ejecuta la instruccion una unica vez cuando se renderiza la pag
    useEffect(() => {
        getGif(category) //retorna promesa desde el helper
        //.then( imgs => setImages(imgs)); // aqui se llama explicitamente el metodo con el argumento retornado por la promesa.
        .then( setImages);// aqui la resùesta de la promesa se le indica solo el metodo y funciona igual que arriba
    }, [category]);

    */



    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>

            {loading && <p className="animate__animated animate__flash">Loading...</p>}

            {
            <div className="card-grid ">
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img} 
                            />
                    ))
                }
            </div>
        }
        </>
    )
}
