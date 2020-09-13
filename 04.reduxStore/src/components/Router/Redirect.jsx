import { useContext } from 'react';
import { Context } from './Router';

const Redirect = ({ to }) => {
  const { setPathName } = useContext(Context);

  const handleChangeRoute = () => {
    setPathName(to);
    window.history.pushState(null, null, to);
    return null;
  }

  return handleChangeRoute();
}

export default Redirect;