import { useContext } from 'react';
import { Context } from './Router';

const Route = ({ path, component }) => {
  const { pathName } = useContext(Context);

  return pathName === path && component;
}

export default Route;