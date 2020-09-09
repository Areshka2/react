import React from 'react';

const Button = ({
  className,
  type,
  handleClick,
  title,
}) => (
    <button
      type={type}
      className={className}
      onClick={handleClick}
    >
      {title}
    </button>
  )

export default Button;