import React, {useContext} from 'react';
import { AlertContext } from '../App';

const Alert = () => {
  const alert = useContext(AlertContext);

  if (alert)  return null;

  return (
    <div>
      <p>It is a very important message</p>
    </div>
  )
}

export default Alert