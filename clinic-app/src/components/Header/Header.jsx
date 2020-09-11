import React from 'react'

import cn from 'classname'

import './Header.scss'

const Header = ({ title, userName, className, renderIcon }) => {
  return (
    <div className={cn('header', className)}>
      <div className='header__body'>
        <div className='flex-1 d-flex flex-row justify-content-start align-items-center'>
          {renderIcon && renderIcon()}
          <div className='header__title'>
            {title}
          </div>
        </div>
        <div className='flex-1 d-flex flex-row justify-content-end align-items-center'>
          {userName && (
            <div className='header__userName'>
              {userName}
            </div>
          )}
          <a href='#s' className='btn btn-primary header__exitBtn'>
            Выйти
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header;