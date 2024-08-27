import React from 'react'


function HeaderComponent() {
  return (
    <div>
        <header className='header'>
            <nav className='navbar navbar-dark bg-primary fixed-top'>
                <a className='navbar-brand' href='/employees' >&nbsp;&nbsp;&nbsp;Employee Management System</a>
            </nav>
        </header>
        <div className='content'>

        </div>
    </div>
  )
}

export default HeaderComponent