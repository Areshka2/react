import React, { useState } from 'react';
import Header from '../../components/Header';
import Film from './Film';
import './Films.scss';

const filmssInitial = [
  {
    title: 'Matrix',
    stars: 8
  },
  {
    title: 'Matrix 2',
    stars: 7
  },
  {
    title: 'Matrix 3',
    stars: 5
  },
]

const Films = () => {
  const [films, setFilms] = useState(filmssInitial);

  const handleSearchFilm = (value) => {
    const result = filmssInitial.filter(f => f.title.toLowerCase().includes(value.toLowerCase()));
    setFilms(result);
  }

  return (
    <>
      <Header handleSearch={handleSearchFilm} />
      <main>
        {films.map((f, i) => <Film key={i} film={f} />)}
      </main>
    </>
  );
}

export default Films;