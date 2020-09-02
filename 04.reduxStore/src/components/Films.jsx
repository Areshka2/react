import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFilmAction } from '../store/films/actions';
import { filmsStateSelector } from '../store/films/selectors';


const Films = () => {
  const [film, setFilm] = useState('');
  const state = useSelector(filmsStateSelector);
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addFilmAction(film))
  }

  console.log('Films ', state)

  return (
    <div>
      Films
      <form onSubmit={handleSubmit}>
        <input onChange={e => setFilm(e.target.value)} type="text" name='name' />
        <button type="submit">Add film</button>
      </form>
    </div>
  );
}

export default Films;
