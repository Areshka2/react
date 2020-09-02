import React from 'react';

const Stars = ({ isFill }) => {
  return (
    <div className={`stars__item ${isFill && 'stars__item--fill'}`}></div>
  )
}

const Film = ({ film }) => {
  const renderStart = (starsCount) => {
    const arrOfStarsComponents = [];

    for (let i = 1; i <= 10; i++) {
      arrOfStarsComponents.push(<Stars isFill={starsCount >= i} />)
    }

    return arrOfStarsComponents;
  }

  return (
    <div className="card">
      <h5>Name: {film.title}</h5>
      <div className="stars">
        {
          renderStart(film.stars)
        }
      </div>
    </div>
  )
}

export default Film;