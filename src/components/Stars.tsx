import React from 'react';
import { Star } from './Star';

interface StarsProps {
  count: number; // Рейтинг фильма
}

export const Stars: React.FC<StarsProps> = ({ count }) => {
  if (typeof count !== 'number' || count < 1 || count > 5) {
    return null; // Если рейтинг не является числом или находится вне диапазона, ничего не рендерим
  }

  const stars = Array(count).fill(null); // Массив для заполнения звезд

  return (
    <ul className="card-body-stars u-clearfix">
      {stars.map((_, index) => (
        <li key={index}>
          <Star />
        </li>
      ))}
    </ul>
  );
};

