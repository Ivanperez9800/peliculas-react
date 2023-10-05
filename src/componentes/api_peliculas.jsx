import React, { useState, useEffect } from 'react';

import Botones from './botones';
import '../App.css';

const ApiPeliculas = () => {

    const [peliculas, setPeliculas] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); /*Pagina actual*/

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=0b822f6237427bd04fe8be72b32b4864&language=es&page=${currentPage}`)
            .then(data => data.json())
            .then(json => setPeliculas(json.results));
    }, [currentPage]);

    // console.log({ peliculas });


    const handlePageChange = (page) => {
        setCurrentPage(page);
      };

    return (
        <>

            <h2 className='mt-3 text-center'>Ejemplo de Api</h2>

            <div className='contenedor' >
                {peliculas.map(({ id, poster_path, title, overview }) => ( /* Se desempaqueta lo que trae pelicula para traer unicamente lo que se usara */

                    <div className="pelicula" key={id} >
                        <img className="poster" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
                        <h3 className="titulo">{title}</h3>
                        {overview === "" ? <p>Sin Descripcion</p> : <p>{overview}</p>}  {/* Condicional ternario: si overviwe es vacio tendra el valor de "sin descripcion", si tiene texto se imprimira lo que diga esa descripcion */}
                    </div>

                ))}
            </div>

            <Botones  currentPage={currentPage} onPageChange={handlePageChange} />

        </>
    )
}

export default ApiPeliculas;