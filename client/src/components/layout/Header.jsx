import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header id='header' role='banner'>
            <div className='left'>
                <h1 className='logo'>
                    <Link to="/">webs ai</Link>
                </h1>
                <nav className='nav'>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/list">List</Link>
                        </li>
                        <li>
                            <Link to="/write">Write</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='right'>
                <ul>
                    <li>
                        <Link to="/login">로그인</Link>
                    </li>
                    <li>
                        <Link to="/Join">회원가입</Link>
                    </li>
                    <li>
                        <Link>로그아웃</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header