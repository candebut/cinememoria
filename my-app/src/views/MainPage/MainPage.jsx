import React, { useState } from 'react';
import { movieList } from '../../mockedValues/movies';
import Movie from '../../components/Movie/Movie';
import Search from '../../components/Search/Search';
import { PopupButton } from '@typeform/embed-react';

const MainPage = () => {
  const [query, setQuery] = useState('');

  const search_params = Object.keys(Object.assign({}, ...movieList));

  function search(data) {
    return data.filter((data) =>
      search_params.some((param) =>
        data[param].toString().toLowerCase().includes(query)
      )
    );
  }

  return (
    <div className='app-wrapper'>
      <h1>Cine por la memoria</h1>
      <h3>Películas que protegen la memoria al alcance de un solo click*</h3>
      <PopupButton id='leOD4oQW' className='add-movie'>
        ¡Agregá tu película!
      </PopupButton>
      <Search setQuery={setQuery} />
      {/* <Disclaimer /> */}
      <div className='movies_wrapper'>
        {movieList && movieList.length
          ? search(movieList).map((movie, index) => (
              <Movie
                key={`movie_${movie.name}-${index}`}
                movie={movie}
                index={index}
              />
            ))
          : 'No hay películas para mostrar'}
      </div>
      <p className='disclaimer'><i>*Esta web no aloja ni sube ningún contenido. Solo recopila enlaces públicos a películas argentinas disponibles en redes y plataformas. Si es titular de derechos y desea solicitar la remoción de un enlace, contáctenos a través del formulario</i></p>
    </div>
  );
};

export default MainPage;
