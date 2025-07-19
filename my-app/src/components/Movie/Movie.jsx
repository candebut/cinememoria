import React from 'react';
import { motion } from 'framer-motion';

const Movie = ({ movie, index }) => {
  const redirectToMovie = (url) => {
    window.open(url);
  };

  return (
    <motion.div
      className='movie-box'
      onClick={() => redirectToMovie(movie.url)}
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? 50 : -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5,
        },
      }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.1,
        boxShadow: '2px -2px 201px 0px rgba(0, 0, 0, 1)',
        zIndex: 100,
      }}
    >
      <img src={movie.img} alt={`${movie.name} poster`} />
      <div class='movie-box-overlay'>
        <div className='movie-box-text'>{`Ver "${movie.name}" online`}</div>
      </div>
    </motion.div>
  );
};

export default Movie;
